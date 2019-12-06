/* tslint:disable */
/**
*/
export function render(): void;
/**
* Handler for `console.log` invocations.
*
* If a test is currently running it takes the `args` array and stringifies
* it and appends it to the current output of the test. Otherwise it passes
* the arguments to the original `console.log` function, psased as
* `original`.
* @param {any} args 
*/
export function __wbgtest_console_log(args: any): void;
/**
* Handler for `console.debug` invocations. See above.
* @param {any} args 
*/
export function __wbgtest_console_debug(args: any): void;
/**
* Handler for `console.info` invocations. See above.
* @param {any} args 
*/
export function __wbgtest_console_info(args: any): void;
/**
* Handler for `console.warn` invocations. See above.
* @param {any} args 
*/
export function __wbgtest_console_warn(args: any): void;
/**
* Handler for `console.error` invocations. See above.
* @param {any} args 
*/
export function __wbgtest_console_error(args: any): void;
/**
*/
export class Model {
  free(): void;
}
/**
* Runtime test harness support instantiated in JS.
*
* The node.js entry script instantiates a `Context` here which is used to
* drive test execution.
*/
export class WasmBindgenTestContext {
  free(): void;
/**
* Creates a new context ready to run tests.
*
* A `Context` is the main structure through which test execution is
* coordinated, and this will collect output and results for all executed
* tests.
* @returns {WasmBindgenTestContext} 
*/
  constructor();
/**
* Inform this context about runtime arguments passed to the test
* harness.
*
* Eventually this will be used to support flags, but for now it\'s just
* used to support test filters.
* @param {any[]} args 
*/
  args(args: any[]): void;
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
  run(tests: any[]): any;
}

/**
* If `module_or_path` is {RequestInfo}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {RequestInfo | BufferSource | WebAssembly.Module} module_or_path
*
* @returns {Promise<any>}
*/
export default function init (module_or_path: RequestInfo | BufferSource | WebAssembly.Module): Promise<any>;
        