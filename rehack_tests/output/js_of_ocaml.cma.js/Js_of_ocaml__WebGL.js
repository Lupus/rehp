/**
 * @flow strict
 * Js_of_ocaml__WebGL
 */

// @ts-check


"use strict";

var runtime = require("../runtime.js");
var caml_get_public_method = runtime["caml_get_public_method"];
var string = runtime["caml_new_string"];

function call1(f, a0) {
  return f.length === 1 ? f(a0) : runtime["caml_call_gen"](f, [a0]);
}

var cst_webglcontextlost = string("webglcontextlost");
var cst_webglcontextrestored = string("webglcontextrestored");
var cst_webglcontextcreationerror = string("webglcontextcreationerror");
var Js_of_ocaml_Js = require("./Js_of_ocaml__Js.js");
var Js_of_ocaml_Dom_html = require("./Js_of_ocaml__Dom_html.js");
var defaultContextAttributes = {
  "alpha": Js_of_ocaml_Js[7],
  "depth": Js_of_ocaml_Js[7],
  "stencil": Js_of_ocaml_Js[8],
  "antialias": Js_of_ocaml_Js[7],
  "premultipliedAlpha": Js_of_ocaml_Js[8],
  "preserveDrawingBuffer": Js_of_ocaml_Js[8],
  "preferLowPowerToHighPerformance": Js_of_ocaml_Js[8],
  "failIfMajorPerformanceCaveat": Js_of_ocaml_Js[8]
};
var webglcontextlost = call1(
  Js_of_ocaml_Dom_html[15][83],
  cst_webglcontextlost
);
var webglcontextrestored = call1(
  Js_of_ocaml_Dom_html[15][83],
  cst_webglcontextrestored
);
var webglcontextcreationerror = call1(
  Js_of_ocaml_Dom_html[15][83],
  cst_webglcontextcreationerror
);
var Event = [0,webglcontextlost,webglcontextrestored,webglcontextcreationerror
];

function getContext(c) {
  function e_(x) {
    return call1(caml_get_public_method(x, -388424711, 219), x);
  }
  var f_ = "webgl";
  var ctx = function(t3, t2, param) {return t3.getContext(t2);}(c, f_, e_);
  if (call1(Js_of_ocaml_Js[5][5], ctx)) {return ctx;}
  function g_(x) {
    return call1(caml_get_public_method(x, -388424711, 220), x);
  }
  var h_ = "experimental-webgl";
  return function(t1, t0, param) {return t1.getContext(t0);}(c, h_, g_);
}

function getContextWithAttributes(c, attribs) {
  function a_(x) {
    return call1(caml_get_public_method(x, -719364538, 221), x);
  }
  var b_ = "webgl";
  var ctx = function(t9, t7, t8, param) {return t9.getContext(t7, t8);}(c, b_, attribs, a_
  );
  if (call1(Js_of_ocaml_Js[5][5], ctx)) {return ctx;}
  function c_(x) {
    return call1(caml_get_public_method(x, -719364538, 222), x);
  }
  var d_ = "experimental-webgl";
  return function(t6, t4, t5, param) {return t6.getContext(t4, t5);}(c, d_, attribs, c_
  );
}

var Js_of_ocaml_WebGL = [
  0,
  defaultContextAttributes,
  Event,
  getContext,
  getContextWithAttributes
];

module.exports = Js_of_ocaml_WebGL;

/*::type Exports = {
  defaultContextAttributes: any,
  Event: any,
  getContext: (c: any) => any,
  getContextWithAttributes: (c: any, attribs: any) => any,
}*/
/** @type {{
  defaultContextAttributes: any,
  Event: any,
  getContext: (c: any) => any,
  getContextWithAttributes: (c: any, attribs: any) => any,
}} */
module.exports = ((module.exports /*:: : any*/) /*:: :Exports */);
module.exports.defaultContextAttributes = module.exports[1];
module.exports.Event = module.exports[2];
module.exports.getContext = module.exports[3];
module.exports.getContextWithAttributes = module.exports[4];

/* Hashing disabled */
