/**
 * @flow strict
 * Js_of_ocaml__XmlHttpRequest
 */

// @ts-check


"use strict";

var runtime = require("../runtime.js");
var caml_get_public_method = runtime["caml_get_public_method"];
var string = runtime["caml_new_string"];
var caml_wrap_thrown_exception = runtime["caml_wrap_thrown_exception"];

function call1(f, a0) {
  return f.length === 1 ? f(a0) : runtime["caml_call_gen"](f, [a0]);
}

var cst_readystatechange = string("readystatechange");
var cst_loadstart = string("loadstart");
var cst_progress = string("progress");
var cst_abort = string("abort");
var cst_error = string("error");
var cst_load = string("load");
var cst_timeout = string("timeout");
var cst_loadend = string("loadend");
var Js_of_ocaml_Js = require("./Js_of_ocaml__Js.js");
var Assert_failure = require("../runtime/Assert_failure.js");
var Js_of_ocaml_Dom = require("./Js_of_ocaml__Dom.js");
var a_ = [0,string("lib/js_of_ocaml/xmlHttpRequest.ml"),125,75];
var readystatechange = call1(Js_of_ocaml_Dom[14][1], cst_readystatechange);
var loadstart = call1(Js_of_ocaml_Dom[14][1], cst_loadstart);
var progress = call1(Js_of_ocaml_Dom[14][1], cst_progress);
var abort = call1(Js_of_ocaml_Dom[14][1], cst_abort);
var error = call1(Js_of_ocaml_Dom[14][1], cst_error);
var load = call1(Js_of_ocaml_Dom[14][1], cst_load);
var timeout = call1(Js_of_ocaml_Dom[14][1], cst_timeout);
var loadend = call1(Js_of_ocaml_Dom[14][1], cst_loadend);
var Event = [
  0,
  readystatechange,
  loadstart,
  progress,
  abort,
  error,
  load,
  timeout,
  loadend
];

function create(param) {
  function b_(x) {
    return call1(caml_get_public_method(x, -1035517745, 208), x);
  }
  var c_ = Js_of_ocaml_Js[50][1];
  var xmlHttpRequest = function(t8, param) {return t8.XMLHttpRequest;}(c_, b_);
  function d_(x) {return call1(caml_get_public_method(x, -5445583, 209), x);}
  var e_ = Js_of_ocaml_Js[50][1];
  var activeXObject = function(t7, param) {return t7.activeXObject;}(e_, d_);
  try {
    var o_ = 0;
    var p_ = function(t6, param) {return new t6();}(xmlHttpRequest, o_);
    return p_;
  }
  catch(q_) {
    try {
      var l_ = 0;
      var m_ = "Msxml2.XMLHTTP";
      var n_ = function(t5, t4, param) {return new t5(t4);}(activeXObject, m_, l_
      );
      return n_;
    }
    catch(r_) {
      try {
        var i_ = 0;
        var j_ = "Msxml3.XMLHTTP";
        var k_ = function(t3, t2, param) {return new t3(t2);}(activeXObject, j_, i_
        );
        return k_;
      }
      catch(s_) {
        try {
          var f_ = 0;
          var g_ = "Microsoft.XMLHTTP";
          var h_ = function(t1, t0, param) {return new t1(t0);}(activeXObject, g_, f_
          );
          return h_;
        }
        catch(t_) {throw caml_wrap_thrown_exception([0,Assert_failure,a_]);}
      }
    }
  }
}

var Js_of_ocaml_XmlHttpRequest = [0,create,Event];

module.exports = Js_of_ocaml_XmlHttpRequest;

/*::type Exports = {
  create: (param: any) => any,
  Event: any,
}*/
/** @type {{
  create: (param: any) => any,
  Event: any,
}} */
module.exports = ((module.exports /*:: : any*/) /*:: :Exports */);
module.exports.create = module.exports[1];
module.exports.Event = module.exports[2];

/* Hashing disabled */
