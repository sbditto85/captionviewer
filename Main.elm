port module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Time

{-
Teach me to walk in
the light of his love
Teach me to pray to 
my father above
Teach me to know all
the things I must do
Always
Always
to walk in the light.
-}

-- TYPES AND INIT
type alias Time = Time.Time

type alias Caption = { delay : Time
                     , duration : Time
                     , line : String
                     }

type alias Model = { captionList : List Caption
                   , playCaptions : Bool
                   , toParse : String
                   }

type Msg
    = NoOp
    | Tick Time.Time
    | SetPlayCaption Bool
    | UpdateToParse String
    | DoParse
    
init : ( Model, Cmd Msg)
init =
    let
        captionList =
            []
        toParse =
            "Teach me to walk in\nthe light of his love\nTeach me to pray to\nmy father above\nTeach me to know all\nthe things I must do\nAlways\nAlways\nto walk in the light."
    in
        { captionList = captionList, playCaptions = False, toParse = toParse } ! []

-- UPDATES            
update : Msg -> Model -> ( Model, Cmd Msg) 
update msg model =
    case msg of
        NoOp ->
            model ! []

        Tick time ->
            handleTick model

        SetPlayCaption tF ->
            { model | playCaptions = tF } ! []

        UpdateToParse toParse ->
            { model | toParse = toParse } ! []

        DoParse ->
            let
                extractCaptions : (List Caption, Bool, Time.Time) -> List Caption
                extractCaptions (captions, _, _) =
                    captions

                captionList =
                    model.toParse
                        |> String.lines
                        |> List.foldl toCaption ([], True, 0)
                        |> extractCaptions
            in
                { model | captionList = captionList, playCaptions = False, toParse = "" } ! []

toCaption : String -> (List Caption, Bool, Time.Time) -> (List Caption, Bool, Time.Time)
toCaption line (captions, isFirstLine, delay) =
    let
        caption =
            { delay = delay
            , duration = 5 * Time.second
            , line = line
            }
        nextDelay =
            if isFirstLine then
                delay
            else
                delay + (5 * Time.second)
    in
        (captions ++ [caption] , not isFirstLine, nextDelay)
                   
handleTick : Model -> ( Model, Cmd Msg)
handleTick model =
    let
        updateCaptionTime : Caption -> (Caption, Cmd Msg)
        updateCaptionTime caption =
            case truncate (Time.inSeconds caption.delay) of
                0 -> 
                    { caption | delay = caption.delay - (1 * Time.second), duration = caption.duration - (1 * Time.second) } ! [ addCaption caption.line ]
                i ->
                    if i > 0 then
                        { caption | delay = caption.delay - (1 * Time.second) } ! []
                    else
                      case truncate (Time.inSeconds caption.duration) of
                          0 ->
                              { caption | duration = caption.duration - (1 * Time.second) } ! [ removeCaption caption.line ]
                          i ->
                            if i > 0 then
                                { caption | duration = caption.duration - (1 * Time.second) } ! []
                            else
                                caption ! []

        toSepLists : (Caption, Cmd Msg) -> (List Caption, List (Cmd Msg)) -> (List Caption, List (Cmd Msg))
        toSepLists (cap, msg) (caps, msgs) =
            (cap :: caps, msg :: msgs)
            
        (captionList, msgs) =
            model.captionList
                |> List.map updateCaptionTime
                |> List.foldr toSepLists ([],[])

    in
        { model | captionList = captionList } ! msgs


-- VIEW        
view : Model -> Html Msg
view model =
    div []
        [ h1 [] [ text "Parse this block of text" ]
        , textarea [ onInput UpdateToParse
                   , style [ ("width", "400px")
                           , ("height", "500px")
                           ]
                   ] [ text model.toParse ]
        , button [ type_ "button"
                 , onClick DoParse
                 ]
            [ text "Parse" ]
        , h2 [] [ text "Current caption queue" ]
        , div [] (viewCaptionQueue model.captionList)
        ]

viewCaptionQueue : List Caption -> List (Html Msg)
viewCaptionQueue captions =
    captions
        |> List.filter isCaptionActive
        |> List.sortWith activeThenOldest
        |> List.map captionToHtml

captionToHtml : Caption -> Html Msg
captionToHtml caption =
    div []
        [ p [] [ text caption.line ]
        , h6 [] [ text "Timing" ]
        , label [] [ text "Delay" ]
        , input [ disabled True
                , value (toString (timeToSeconds caption.delay))
                ] []
        , label [] [ text "Duration" ]
        , input [ disabled True
                , value (toString (timeToSeconds caption.duration))
                ] []
        ]

timeToSeconds : Time.Time -> Int
timeToSeconds time =
    let
        val = truncate (Time.inSeconds time)
    in
        if val <=0 then
            0
        else
            val

isCaptionActive : Caption -> Bool
isCaptionActive caption =
    caption.delay >= 0 || caption.duration >= 0

activeThenOldest : Caption -> Caption -> Order
activeThenOldest capA capB =
    case compare capA.delay capB.delay of
        LT ->
            LT
        EQ ->
            compare capA.duration capB.duration
        GT ->
            GT

-- PORTS AND SUBS        
subscriptions : Model -> Sub Msg
subscriptions { playCaptions } =
    let
        captionSub = 
            if playCaptions then
                Time.every (1 * Time.second) Tick
            else
                Sub.none

        playCaptionsSub =
            changePlayCaption SetPlayCaption
    in
        Sub.batch [ captionSub
                  , playCaptionsSub
                  ]


port addCaption : String -> Cmd msg

port removeCaption : String -> Cmd msg                  

port changePlayCaption : (Bool -> msg) -> Sub msg

-- MAIN                     
main = program { init = init
               , subscriptions = subscriptions
               , update = update
               , view = view
               }
           
