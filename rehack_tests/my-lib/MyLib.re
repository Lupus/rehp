/**
 * The contents of this file don't matter as much. We're just testing library
 * compilation.
 */
type t(+'a);
type unsafe;
type _externalString;
type str = t(_externalString);
external toString: str => string = "caml_js_to_string";
external fromString: string => str = "caml_js_from_string";

external toUnsafe: t('any) => unsafe = "%identity";

external call: t('a) => t('c) = "caml_js_fun_call0";
external call1: (t('a), t('b)) => t('d) = "caml_js_fun_call1";
external call2: (t('a), t('b), t('c)) => t('d) = "caml_js_fun_call2";
external call3: (t('a), t('b), t('c), t('d)) => t('e) =
  "caml_js_fun_call3";
external call4: (t('a), t('b), t('c), t('d), t('e)) => t('f) =
  "caml_js_fun_call4";
external callWithArgs: (t('a), array(unsafe)) => t('c) = "caml_js_fun_call";

external send: (t('a), string) => t('c) = "caml_js_meth_call0";
external send1: (t('a), string, t('a)) => t('c) = "caml_js_meth_call1";
external send2: (t('a), string, t('a), t('b)) => t('c) =
  "caml_js_meth_call2";
external send3: (t('a), string, t('a), t('b), t('c)) => t('d) =
  "caml_js_meth_call3";

external sendWithArgs: (t('a), string, array(unsafe)) => t('c) =
  "caml_js_meth_call";

let foo = fromString("foo");
let bar = fromString("bar");
let baz = fromString("baz");
let testFunctionCalls = (o: t('anything)) => {
  let withArgsResult = callWithArgs(o, [|toUnsafe(foo)|]);
  let callResult = call(o);
  let callResult1 = call1(o, fromString("passThis"));
  let callResult2 = call2(o, fromString("passThis"), foo);
  let callResult3 = call3(o, fromString("passThis"), bar, bar);
  let callResult4 = call4(o, fromString("passThis"), baz, baz, baz);
  (
    withArgsResult,
    callResult,
    callResult1,
    callResult2,
    callResult3,
    callResult4,
  );
};

let testMethodCalls = (o: t('anything)) => {
  let withArgsResult = sendWithArgs(o, "yourMethod", [|toUnsafe(foo)|]);
  let sendResult = send(o, "myMethod");
  let sendResult1 = send1(o, "myMethod", foo);
  let sendResult2 = send2(o, "myMethod", foo, foo);
  let sendResult3 = send3(o, "myMethod", bar, foo, foo);
  (withArgsResult, sendResult, sendResult1, sendResult2, sendResult3);
};

let testPartialFunctionCalls = (o: t('anything)) => {
  let callResult1 = call1(o);
  let callResult2 = call2(o, fromString("passThis"));
  let callResult3 = call3(o, fromString("passThis"), bar);
  let callResult4 = call4(o, fromString("passThis"), baz, baz);
  (callResult1, callResult2, callResult3, callResult4);
};

let testPartialMethodCalls = (o: t('anything)) => {
  let sendResult1 = send1(o, "myPartiallyAppliedMethod");
  let sendResult2 = send2(o, "myPartiallyAppliedMethod", foo);
  let sendResult3 = send3(o, "myPartiallyAppliedMethod", bar, foo);
  (sendResult1, sendResult2, sendResult3);
};

let x = MyLibUtility.thisIsAUtilityFunction();

let genThisShouldBeAsyncTransformed2 = (input, cb) => {
  cb(input + 1);
};

/**
 * References to prior values aren't going to get re-exported in the summary
 * because their names are lost at bytecode compilation time. (I verified in
 * bytecode parser).
 */
let thisWontAppearInSummary = genThisShouldBeAsyncTransformed2;

let get = () => "this should be exported with (php)leading '_'";
let call = () => "this should be exported with (php)leading '_'";
let genCall = cb => "this should be exported with (php)leading '_'";
let syncCall = () => "this should be exported with (php)leading '_'";
let getExports = () => "this should be exported with (php)leading '_'";
let callRehackFunction = () => "this should be exported with (php)leading '_'";
let genCallFunctionWithArgs = () => "this should be exported with (php)leading '_'";
let genCallName = () => "this should be exported with (php)leading '_'";
let syncCallName = () => "this should be exported with (php)leading '_'";
let syncCallFunctionWithArgs = () => "this should be exported with (php)leading '_'";
let get = () => "this should be exported with (php)leading '_'";
let _get = () => "this should be exported with two (php)leading '_'";
let _construct = () => "this should be exported with three (php)leading '_'";

let genThisShouldBeAsyncTransformed1 = cb => {
  cb(100);
};

