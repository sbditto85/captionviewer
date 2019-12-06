(function() {
    const __exports = {};
    let wasm;

    function logError(e) {
        let error = (function () {
            try {
                return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
            } catch(_) {
                return "<failed to stringify thrown value>";
            }
        }());
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
        throw e;
    }

    function _assertNum(n) {
        if (typeof(n) !== 'number') throw new Error('expected a number argument');
    }
    function __wbg_elem_binding0(arg0, arg1, arg2) {
        _assertNum(arg0);
        _assertNum(arg1);
        _assertNum(arg2);
        try {
            wasm.__wbg_function_table.get(161)(arg0, arg1, arg2);
        } catch (e) {
            logError(e)
        }
    }

    const heap = new Array(32);

    heap.fill(undefined);

    heap.push(undefined, null, true, false);

    let heap_next = heap.length;

    function addHeapObject(obj) {
        if (heap_next === heap.length) heap.push(heap.length + 1);
        const idx = heap_next;
        heap_next = heap[idx];

        if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

        heap[idx] = obj;
        return idx;
    }
    function __wbg_elem_binding1(arg0, arg1, arg2) {
        _assertNum(arg0);
        _assertNum(arg1);
        try {
            wasm.__wbg_function_table.get(159)(arg0, arg1, addHeapObject(arg2));
        } catch (e) {
            logError(e)
        }
    }
    function __wbg_elem_binding2(arg0, arg1, arg2) {
        _assertNum(arg0);
        _assertNum(arg1);
        try {
            wasm.__wbg_function_table.get(1074)(arg0, arg1, addHeapObject(arg2));
        } catch (e) {
            logError(e)
        }
    }
    function __wbg_elem_binding3(arg0, arg1) {
        _assertNum(arg0);
        _assertNum(arg1);
        try {
            wasm.__wbg_function_table.get(994)(arg0, arg1);
        } catch (e) {
            logError(e)
        }
    }
    function __wbg_elem_binding4(arg0, arg1, arg2, arg3, arg4) {
        _assertNum(arg0);
        _assertNum(arg1);
        _assertNum(arg3);
        try {
            wasm.__wbg_function_table.get(1100)(arg0, arg1, addHeapObject(arg2), arg3, addHeapObject(arg4));
        } catch (e) {
            logError(e)
        }
    }
    function __wbg_elem_binding5(arg0, arg1, arg2, arg3) {
        _assertNum(arg0);
        _assertNum(arg1);
        try {
            wasm.__wbg_function_table.get(1096)(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
        } catch (e) {
            logError(e)
        }
    }
    /**
    */
    __exports.render = function() {
        try {
            wasm.render();
        } catch (e) {
            logError(e)
        }
    };

    let cachegetUint32Memory = null;
    function getUint32Memory() {
        if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
            cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
        }
        return cachegetUint32Memory;
    }

    let WASM_VECTOR_LEN = 0;

    function passArrayJsValueToWasm(array) {
        const ptr = wasm.__wbindgen_malloc(array.length * 4);
        const mem = getUint32Memory();
        for (let i = 0; i < array.length; i++) {
            mem[ptr / 4 + i] = addHeapObject(array[i]);
        }
        WASM_VECTOR_LEN = array.length;
        return ptr;
    }

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
/**
* Handler for `console.log` invocations.
*
* If a test is currently running it takes the `args` array and stringifies
* it and appends it to the current output of the test. Otherwise it passes
* the arguments to the original `console.log` function, psased as
* `original`.
* @param {any} args
*/
__exports.__wbgtest_console_log = function(args) {
    try {
        try {
            wasm.__wbgtest_console_log(addBorrowedObject(args));
        } catch (e) {
            logError(e)
        }
    } finally {
        heap[stack_pointer++] = undefined;
    }
};

/**
* Handler for `console.debug` invocations. See above.
* @param {any} args
*/
__exports.__wbgtest_console_debug = function(args) {
    try {
        try {
            wasm.__wbgtest_console_debug(addBorrowedObject(args));
        } catch (e) {
            logError(e)
        }
    } finally {
        heap[stack_pointer++] = undefined;
    }
};

/**
* Handler for `console.info` invocations. See above.
* @param {any} args
*/
__exports.__wbgtest_console_info = function(args) {
    try {
        try {
            wasm.__wbgtest_console_info(addBorrowedObject(args));
        } catch (e) {
            logError(e)
        }
    } finally {
        heap[stack_pointer++] = undefined;
    }
};

/**
* Handler for `console.warn` invocations. See above.
* @param {any} args
*/
__exports.__wbgtest_console_warn = function(args) {
    try {
        try {
            wasm.__wbgtest_console_warn(addBorrowedObject(args));
        } catch (e) {
            logError(e)
        }
    } finally {
        heap[stack_pointer++] = undefined;
    }
};

/**
* Handler for `console.error` invocations. See above.
* @param {any} args
*/
__exports.__wbgtest_console_error = function(args) {
    try {
        try {
            wasm.__wbgtest_console_error(addBorrowedObject(args));
        } catch (e) {
            logError(e)
        }
    } finally {
        heap[stack_pointer++] = undefined;
    }
};

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error('expected a boolean argument');
    }
}

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

let cachedTextEncoder = new TextEncoder('utf-8');

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {


        if (typeof(arg) !== 'string') throw new Error('expected a string argument');

        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            arg = arg.slice(offset);
            ptr = wasm.__wbindgen_realloc(ptr, size, size = offset + arg.length * 3);
            const view = getUint8Memory().subarray(ptr + offset, ptr + size);
            const ret = cachedTextEncoder.encodeInto(arg, view);
            if (ret.read != arg.length) throw new Error('failed to pass whole string');
            offset += ret.written;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {


        if (typeof(arg) !== 'string') throw new Error('expected a string argument');

        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            const buf = cachedTextEncoder.encode(arg.slice(offset));
            ptr = wasm.__wbindgen_realloc(ptr, size, size = offset + buf.length);
            getUint8Memory().set(buf, ptr + offset);
            offset += buf.length;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
}

let cachegetInt32Memory = null;
function getInt32Memory() {
    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory;
}

function handleError(e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
}

function getArrayU8FromWasm(ptr, len) {
    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
/**
*/
class Model {

    constructor() {
        throw new Error('cannot invoke `new` directly');
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_model_free(ptr);
    }
}
__exports.Model = Model;
/**
* Runtime test harness support instantiated in JS.
*
* The node.js entry script instantiates a `Context` here which is used to
* drive test execution.
*/
class WasmBindgenTestContext {

    static __wrap(ptr) {
        const obj = Object.create(WasmBindgenTestContext.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_wasmbindgentestcontext_free(ptr);
    }
    /**
    * Creates a new context ready to run tests.
    *
    * A `Context` is the main structure through which test execution is
    * coordinated, and this will collect output and results for all executed
    * tests.
    * @returns {WasmBindgenTestContext}
    */
    constructor() {
        try {
            const ret = wasm.wasmbindgentestcontext_new();
            return WasmBindgenTestContext.__wrap(ret);
        } catch (e) {
            logError(e)
        }
    }
    /**
    * Inform this context about runtime arguments passed to the test
    * harness.
    *
    * Eventually this will be used to support flags, but for now it\'s just
    * used to support test filters.
    * @param {any[]} args
    */
    args(args) {
        _assertNum(this.ptr);
        try {
            wasm.wasmbindgentestcontext_args(this.ptr, passArrayJsValueToWasm(args), WASM_VECTOR_LEN);
        } catch (e) {
            logError(e)
        }
    }
    /**
    * Executes a list of tests, returning a promise representing their
    * eventual completion.
    *
    * This is the main entry point for executing tests. All the tests passed
    * in are the JS `Function` object that was plucked off the
    * `WebAssembly.Instance` exports list.
    *
    * The promise returned resolves to either `true` if all tests passed or
    * `false` if at least one test failed.
    * @param {any[]} tests
    * @returns {any}
    */
    run(tests) {
        _assertNum(this.ptr);
        try {
            const ret = wasm.wasmbindgentestcontext_run(this.ptr, passArrayJsValueToWasm(tests), WASM_VECTOR_LEN);
            return takeObject(ret);
        } catch (e) {
            logError(e)
        }
    }
}
__exports.WasmBindgenTestContext = WasmBindgenTestContext;

function init(module) {

    let result;
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_cb_forget = function(arg0) {
        try {
            takeObject(arg0);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = takeObject(arg0).original;
        if (obj.cnt-- == 1) {
            obj.a = 0;
            return true;
        }
        try {
            const ret = false;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_json_parse = function(arg0, arg1) {
        try {
            const ret = JSON.parse(getStringFromWasm(arg0, arg1));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_json_serialize = function(arg0, arg1) {
        try {
            const ret = JSON.stringify(getObject(arg1));
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        try {
            const ret = getObject(arg0);
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        try {
            takeObject(arg0);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_log_8c8f2dcc43deb867 = function(arg0, arg1) {
        try {
            console.log(getStringFromWasm(arg0, arg1));
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_String_e67e28b0b893098b = function(arg0, arg1) {
        try {
            const ret = String(getObject(arg1));
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_wbgtestinvoke_30def8908229173a = function(arg0, arg1) {
        const state0 = {a: arg0, b: arg1};
        const cb0 = () => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_elem_binding3(a, state0.b, );
            } finally {
                state0.a = a;
            }
        };
        try {
            try {
                try {
                    __wbg_test_invoke(cb0);
                } catch (e) {
                    handleError(e)
                }
            } catch (e) {
                logError(e)
            }
        } finally {
            state0.a = state0.b = 0;
        }
    };
    imports.wbg.__wbg_static_accessor_document_e71f804333a84a5d = function() {
        try {
            const ret = document;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_getElementById_6f176d83599dd7e6 = function(arg0, arg1, arg2) {
        try {
            const ret = getObject(arg0).getElementById(getStringFromWasm(arg1, arg2));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_textcontent_c13681c3486ac053 = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).textContent;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_settextcontent_94671f0b63dabef8 = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).textContent = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_stack_c552e53036e987af = function(arg0) {
        try {
            const ret = getObject(arg0).stack;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_self_01637715f8e02f56 = function(arg0) {
        try {
            const ret = getObject(arg0).self;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        try {
            const ret = arg0;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_jsval_eq = function(arg0, arg1) {
        try {
            const ret = getObject(arg0) === getObject(arg1);
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_stack_fcb22a535a24ef63 = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).stack;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_new_3a746f2619705add = function(arg0, arg1) {
        try {
            const ret = new Function(getStringFromWasm(arg0, arg1));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_call_f54d3a6dadb199ca = function(arg0, arg1) {
        try {
            const ret = getObject(arg0).call(getObject(arg1));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_self_ac379e780a0d8b94 = function(arg0) {
        try {
            const ret = getObject(arg0).self;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_crypto_1e4302b85d4f64a2 = function(arg0) {
        try {
            const ret = getObject(arg0).crypto;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_getRandomValues_1b4ba144162a5c9e = function(arg0) {
        try {
            const ret = getObject(arg0).getRandomValues;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_getRandomValues_1ef11e888e5228e9 = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).getRandomValues(getArrayU8FromWasm(arg1, arg2));
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_require_6461b1e9a0d7c34a = function(arg0, arg1) {
        try {
            const ret = require(getStringFromWasm(arg0, arg1));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_randomFillSync_1b52c8482374c55b = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).randomFillSync(getArrayU8FromWasm(arg1, arg2));
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        try {
            const ret = getObject(arg0) === undefined;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        try {
            const ret = getStringFromWasm(arg0, arg1);
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
        const v0 = getStringFromWasm(arg0, arg1).slice();
        wasm.__wbindgen_free(arg0, arg1 * 1);
        try {
            console.error(v0);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_new_59cb74e423758ede = function() {
        try {
            const ret = new Error();
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_stack_558ba5917b466edd = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).stack;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_CustomEvent = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof CustomEvent;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_new_with_event_init_dict_CustomEvent = function(arg0, arg1, arg2) {
        try {
            try {
                const ret = new CustomEvent(getStringFromWasm(arg0, arg1), getObject(arg2));
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_detail_CustomEvent = function(arg0) {
        try {
            const ret = getObject(arg0).detail;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_create_element_Document = function(arg0, arg1, arg2) {
        try {
            try {
                const ret = getObject(arg0).createElement(getStringFromWasm(arg1, arg2));
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_create_element_ns_Document = function(arg0, arg1, arg2, arg3, arg4) {
        try {
            try {
                const ret = getObject(arg0).createElementNS(arg1 === 0 ? undefined : getStringFromWasm(arg1, arg2), getStringFromWasm(arg3, arg4));
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_create_text_node_Document = function(arg0, arg1, arg2) {
        try {
            const ret = getObject(arg0).createTextNode(getStringFromWasm(arg1, arg2));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_get_element_by_id_Document = function(arg0, arg1, arg2) {
        try {
            const ret = getObject(arg0).getElementById(getStringFromWasm(arg1, arg2));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_body_Document = function(arg0) {
        try {
            const ret = getObject(arg0).body;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_Element = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof Element;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_closest_Element = function(arg0, arg1, arg2) {
        try {
            try {
                const ret = getObject(arg0).closest(getStringFromWasm(arg1, arg2));
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_get_attribute_Element = function(arg0, arg1, arg2, arg3) {
        try {
            const ret = getObject(arg1).getAttribute(getStringFromWasm(arg2, arg3));
            const ptr0 = isLikeNone(ret) ? 0 : passStringToWasm(ret);
            const len0 = WASM_VECTOR_LEN;
            const ret0 = ptr0;
            const ret1 = len0;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_get_attribute_names_Element = function(arg0) {
        try {
            const ret = getObject(arg0).getAttributeNames();
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_remove_attribute_Element = function(arg0, arg1, arg2) {
        try {
            try {
                getObject(arg0).removeAttribute(getStringFromWasm(arg1, arg2));
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_attribute_Element = function(arg0, arg1, arg2, arg3, arg4) {
        try {
            try {
                getObject(arg0).setAttribute(getStringFromWasm(arg1, arg2), getStringFromWasm(arg3, arg4));
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_namespace_uri_Element = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).namespaceURI;
            const ptr0 = isLikeNone(ret) ? 0 : passStringToWasm(ret);
            const len0 = WASM_VECTOR_LEN;
            const ret0 = ptr0;
            const ret1 = len0;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_tag_name_Element = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).tagName;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_inner_html_Element = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).innerHTML;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_inner_html_Element = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).innerHTML = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_prevent_default_Event = function(arg0) {
        try {
            getObject(arg0).preventDefault();
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_stop_propagation_Event = function(arg0) {
        try {
            getObject(arg0).stopPropagation();
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_target_Event = function(arg0) {
        try {
            const ret = getObject(arg0).target;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_add_event_listener_with_callback_EventTarget = function(arg0, arg1, arg2, arg3) {
        try {
            try {
                getObject(arg0).addEventListener(getStringFromWasm(arg1, arg2), getObject(arg3));
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_dispatch_event_EventTarget = function(arg0, arg1) {
        try {
            try {
                const ret = getObject(arg0).dispatchEvent(getObject(arg1));
                _assertBoolean(ret);
                return ret;
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_remove_event_listener_with_callback_EventTarget = function(arg0, arg1, arg2, arg3) {
        try {
            try {
                getObject(arg0).removeEventListener(getStringFromWasm(arg1, arg2), getObject(arg3));
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_get_FileList = function(arg0, arg1) {
        try {
            const ret = getObject(arg0)[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_length_FileList = function(arg0) {
        try {
            const ret = getObject(arg0).length;
            _assertNum(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_new_FileReader = function() {
        try {
            try {
                const ret = new FileReader();
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_read_as_text_FileReader = function(arg0, arg1) {
        try {
            try {
                getObject(arg0).readAsText(getObject(arg1));
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_result_FileReader = function(arg0) {
        try {
            try {
                const ret = getObject(arg0).result;
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_onload_FileReader = function(arg0, arg1) {
        try {
            getObject(arg0).onload = getObject(arg1);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLAnchorElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLAnchorElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_download_HTMLAnchorElement = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).download = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_href_HTMLAnchorElement = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).href = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLButtonElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLButtonElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_value_HTMLButtonElement = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).value;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_value_HTMLButtonElement = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).value = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLDataElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLDataElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_value_HTMLDataElement = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).value;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_value_HTMLDataElement = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).value = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_click_HTMLElement = function(arg0) {
        try {
            getObject(arg0).click();
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_focus_HTMLElement = function(arg0) {
        try {
            try {
                getObject(arg0).focus();
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_onchange_HTMLElement = function(arg0, arg1) {
        try {
            getObject(arg0).onchange = getObject(arg1);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLInputElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLInputElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_checked_HTMLInputElement = function(arg0, arg1) {
        try {
            getObject(arg0).checked = arg1 !== 0;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_files_HTMLInputElement = function(arg0) {
        try {
            const ret = getObject(arg0).files;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_type_HTMLInputElement = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).type;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_type_HTMLInputElement = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).type = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_value_HTMLInputElement = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).value;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_value_HTMLInputElement = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).value = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLLIElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLLIElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_value_HTMLLIElement = function(arg0) {
        try {
            const ret = getObject(arg0).value;
            _assertNum(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_value_HTMLLIElement = function(arg0, arg1) {
        try {
            getObject(arg0).value = arg1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLMenuItemElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLMenuItemElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_checked_HTMLMenuItemElement = function(arg0, arg1) {
        try {
            getObject(arg0).checked = arg1 !== 0;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLMeterElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLMeterElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_value_HTMLMeterElement = function(arg0) {
        try {
            const ret = getObject(arg0).value;
            _assertNum(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_value_HTMLMeterElement = function(arg0, arg1) {
        try {
            getObject(arg0).value = arg1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLOptionElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLOptionElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_value_HTMLOptionElement = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).value;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_value_HTMLOptionElement = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).value = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLOutputElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLOutputElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_value_HTMLOutputElement = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).value;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_value_HTMLOutputElement = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).value = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLParamElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLParamElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_value_HTMLParamElement = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).value;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_value_HTMLParamElement = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).value = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLProgressElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLProgressElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_value_HTMLProgressElement = function(arg0) {
        try {
            const ret = getObject(arg0).value;
            _assertNum(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_value_HTMLProgressElement = function(arg0, arg1) {
        try {
            getObject(arg0).value = arg1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLSelectElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLSelectElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_value_HTMLSelectElement = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).value;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_value_HTMLSelectElement = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).value = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_HTMLTextAreaElement = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof HTMLTextAreaElement;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_value_HTMLTextAreaElement = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).value;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_value_HTMLTextAreaElement = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).value = getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_push_state_with_url_History = function(arg0, arg1, arg2, arg3, arg4, arg5) {
        try {
            try {
                getObject(arg0).pushState(getObject(arg1), getStringFromWasm(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm(arg4, arg5));
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_KeyboardEvent = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof KeyboardEvent;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_key_KeyboardEvent = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).key;
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_pathname_Location = function(arg0, arg1) {
        try {
            try {
                const ret = getObject(arg1).pathname;
                const ret0 = passStringToWasm(ret);
                const ret1 = WASM_VECTOR_LEN;
                getInt32Memory()[arg0 / 4 + 0] = ret0;
                getInt32Memory()[arg0 / 4 + 1] = ret1;
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_search_Location = function(arg0, arg1) {
        try {
            try {
                const ret = getObject(arg1).search;
                const ret0 = passStringToWasm(ret);
                const ret1 = WASM_VECTOR_LEN;
                getInt32Memory()[arg0 / 4 + 0] = ret0;
                getInt32Memory()[arg0 / 4 + 1] = ret1;
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_hash_Location = function(arg0, arg1) {
        try {
            try {
                const ret = getObject(arg1).hash;
                const ret0 = passStringToWasm(ret);
                const ret1 = WASM_VECTOR_LEN;
                getInt32Memory()[arg0 / 4 + 0] = ret0;
                getInt32Memory()[arg0 / 4 + 1] = ret1;
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_MouseEvent = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof MouseEvent;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_client_x_MouseEvent = function(arg0) {
        try {
            const ret = getObject(arg0).clientX;
            _assertNum(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_client_y_MouseEvent = function(arg0) {
        try {
            const ret = getObject(arg0).clientY;
            _assertNum(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_offset_x_MouseEvent = function(arg0) {
        try {
            const ret = getObject(arg0).offsetX;
            _assertNum(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_offset_y_MouseEvent = function(arg0) {
        try {
            const ret = getObject(arg0).offsetY;
            _assertNum(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_ctrl_key_MouseEvent = function(arg0) {
        try {
            const ret = getObject(arg0).ctrlKey;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_Node = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof Node;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_append_child_Node = function(arg0, arg1) {
        try {
            try {
                const ret = getObject(arg0).appendChild(getObject(arg1));
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_insert_before_Node = function(arg0, arg1, arg2) {
        try {
            try {
                const ret = getObject(arg0).insertBefore(getObject(arg1), getObject(arg2));
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_remove_child_Node = function(arg0, arg1) {
        try {
            try {
                const ret = getObject(arg0).removeChild(getObject(arg1));
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_replace_child_Node = function(arg0, arg1, arg2) {
        try {
            try {
                const ret = getObject(arg0).replaceChild(getObject(arg1), getObject(arg2));
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_node_type_Node = function(arg0) {
        try {
            const ret = getObject(arg0).nodeType;
            _assertNum(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_child_nodes_Node = function(arg0) {
        try {
            const ret = getObject(arg0).childNodes;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_first_child_Node = function(arg0) {
        try {
            const ret = getObject(arg0).firstChild;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_next_sibling_Node = function(arg0) {
        try {
            const ret = getObject(arg0).nextSibling;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_text_content_Node = function(arg0, arg1) {
        try {
            const ret = getObject(arg1).textContent;
            const ptr0 = isLikeNone(ret) ? 0 : passStringToWasm(ret);
            const len0 = WASM_VECTOR_LEN;
            const ret0 = ptr0;
            const ret1 = len0;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_text_content_Node = function(arg0, arg1, arg2) {
        try {
            getObject(arg0).textContent = arg1 === 0 ? undefined : getStringFromWasm(arg1, arg2);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_get_NodeList = function(arg0, arg1) {
        try {
            const ret = getObject(arg0)[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_length_NodeList = function(arg0) {
        try {
            const ret = getObject(arg0).length;
            _assertNum(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_PopStateEvent = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof PopStateEvent;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_state_PopStateEvent = function(arg0) {
        try {
            const ret = getObject(arg0).state;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_get_item_Storage = function(arg0, arg1, arg2, arg3) {
        try {
            try {
                const ret = getObject(arg1).getItem(getStringFromWasm(arg2, arg3));
                const ptr0 = isLikeNone(ret) ? 0 : passStringToWasm(ret);
                const len0 = WASM_VECTOR_LEN;
                const ret0 = ptr0;
                const ret1 = len0;
                getInt32Memory()[arg0 / 4 + 0] = ret0;
                getInt32Memory()[arg0 / 4 + 1] = ret1;
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_set_item_Storage = function(arg0, arg1, arg2, arg3, arg4) {
        try {
            try {
                getObject(arg0).setItem(getStringFromWasm(arg1, arg2), getStringFromWasm(arg3, arg4));
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_instanceof_Window = function(arg0) {
        try {
            const ret = getObject(arg0) instanceof Window;
            _assertBoolean(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_cancel_animation_frame_Window = function(arg0, arg1) {
        try {
            try {
                getObject(arg0).cancelAnimationFrame(arg1);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_request_animation_frame_Window = function(arg0, arg1) {
        try {
            try {
                const ret = getObject(arg0).requestAnimationFrame(getObject(arg1));
                _assertNum(ret);
                return ret;
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_document_Window = function(arg0) {
        try {
            const ret = getObject(arg0).document;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_location_Window = function(arg0) {
        try {
            const ret = getObject(arg0).location;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_history_Window = function(arg0) {
        try {
            try {
                const ret = getObject(arg0).history;
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_local_storage_Window = function(arg0) {
        try {
            try {
                const ret = getObject(arg0).localStorage;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_error_1_ = function(arg0) {
        try {
            console.error(getObject(arg0));
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__widl_f_log_1_ = function(arg0) {
        try {
            console.log(getObject(arg0));
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_encodeURI_0ac54ce78af9f188 = function(arg0, arg1) {
        try {
            const ret = encodeURI(getStringFromWasm(arg0, arg1));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_forEach_ee5c58c5ec360512 = function(arg0, arg1, arg2) {
        const state0 = {a: arg1, b: arg2};
        const cb0 = (arg0, arg1, arg2) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_elem_binding4(a, state0.b, arg0, arg1, arg2);
            } finally {
                state0.a = a;
            }
        };
        try {
            try {
                getObject(arg0).forEach(cb0);
            } catch (e) {
                logError(e)
            }
        } finally {
            state0.a = state0.b = 0;
        }
    };
    imports.wbg.__wbg_message_e00ce13d40f319b8 = function(arg0) {
        try {
            const ret = getObject(arg0).message;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_name_010cc936a5d32355 = function(arg0) {
        try {
            const ret = getObject(arg0).name;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_newnoargs_368b05293a3f44de = function(arg0, arg1) {
        try {
            const ret = new Function(getStringFromWasm(arg0, arg1));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_call_1fc553129cb17c3c = function(arg0, arg1) {
        try {
            try {
                const ret = getObject(arg0).call(getObject(arg1));
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_call_9c879b23724d007e = function(arg0, arg1, arg2) {
        try {
            try {
                const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_new_abadb45e63451a4b = function() {
        try {
            const ret = new Object();
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_concat_8a4dc999a465cf08 = function(arg0, arg1) {
        try {
            const ret = getObject(arg0).concat(getObject(arg1));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_new_99151b6c57c672fa = function(arg0, arg1) {
        const state0 = {a: arg0, b: arg1};
        const cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_elem_binding5(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        try {
            try {
                const ret = new Promise(cb0);
                return addHeapObject(ret);
            } catch (e) {
                logError(e)
            }
        } finally {
            state0.a = state0.b = 0;
        }
    };
    imports.wbg.__wbg_resolve_4ca5ad5c0eb0abf1 = function(arg0) {
        try {
            const ret = Promise.resolve(getObject(arg0));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_then_3bb8a69ecfd29434 = function(arg0, arg1) {
        try {
            const ret = getObject(arg0).then(getObject(arg1));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_then_fb82bfc0e1d7f311 = function(arg0, arg1, arg2) {
        try {
            const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_globalThis_8df2c73db5eac245 = function() {
        try {
            try {
                const ret = globalThis.globalThis;
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_self_937dd9f384d2384a = function() {
        try {
            try {
                const ret = self.self;
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_window_425d3fa09c43ece4 = function() {
        try {
            try {
                const ret = window.window;
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_global_2c090b42ef2744b9 = function() {
        try {
            try {
                const ret = global.global;
                return addHeapObject(ret);
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbg_set_09ce0f7f67d68b09 = function(arg0, arg1, arg2) {
        try {
            try {
                const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
                _assertBoolean(ret);
                return ret;
            } catch (e) {
                handleError(e)
            }
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg0);
        if (typeof(obj) !== 'string') return 0;
        const ptr = passStringToWasm(obj);
        getUint32Memory()[arg1 / 4] = WASM_VECTOR_LEN;
        try {
            const ret = ptr;
            _assertNum(ret);
            return ret;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        try {
            const ret = debugString(getObject(arg1));
            const ret0 = passStringToWasm(ret);
            const ret1 = WASM_VECTOR_LEN;
            getInt32Memory()[arg0 / 4 + 0] = ret0;
            getInt32Memory()[arg0 / 4 + 1] = ret1;
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        try {
            throw new Error(getStringFromWasm(arg0, arg1));
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_closure_wrapper16502 = function(arg0, arg1, arg2) {
        const state = { a: arg0, b: arg1, cnt: 1 };
        const real = (arg0) => {
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return __wbg_elem_binding2(a, state.b, arg0);
            } finally {
                if (--state.cnt === 0) wasm.__wbg_function_table.get(1075)(a, state.b);
                else state.a = a;
            }
        }
        ;
        real.original = state;
        try {
            const ret = real;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_closure_wrapper3886 = function(arg0, arg1, arg2) {
        const state = { a: arg0, b: arg1, cnt: 1 };
        const real = (arg0) => {
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return __wbg_elem_binding0(a, state.b, arg0);
            } finally {
                if (--state.cnt === 0) wasm.__wbg_function_table.get(162)(a, state.b);
                else state.a = a;
            }
        }
        ;
        real.original = state;
        try {
            const ret = real;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };
    imports.wbg.__wbindgen_closure_wrapper3888 = function(arg0, arg1, arg2) {
        const state = { a: arg0, b: arg1, cnt: 1 };
        const real = (arg0) => {
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return __wbg_elem_binding1(a, state.b, arg0);
            } finally {
                if (--state.cnt === 0) wasm.__wbg_function_table.get(160)(a, state.b);
                else state.a = a;
            }
        }
        ;
        real.original = state;
        try {
            const ret = real;
            return addHeapObject(ret);
        } catch (e) {
            logError(e)
        }
    };

    if (module instanceof URL || typeof module === 'string' || module instanceof Request) {

        const response = fetch(module);
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            result = WebAssembly.instantiateStreaming(response, imports)
            .catch(e => {
                console.warn("`WebAssembly.instantiateStreaming` failed. Assuming this is because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                return response
                .then(r => r.arrayBuffer())
                .then(bytes => WebAssembly.instantiate(bytes, imports));
            });
        } else {
            result = response
            .then(r => r.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes, imports));
        }
    } else {

        result = WebAssembly.instantiate(module, imports)
        .then(result => {
            if (result instanceof WebAssembly.Instance) {
                return { instance: result, module };
            } else {
                return result;
            }
        });
    }
    return result.then(({instance, module}) => {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;

        return wasm;
    });
}

self.wasm_bindgen = Object.assign(init, __exports);

})();
