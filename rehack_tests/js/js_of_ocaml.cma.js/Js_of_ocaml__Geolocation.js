/**
 * Js_of_ocaml__Geolocation
 * @providesModule Js_of_ocaml__Geolocation
 */
"use strict";
var Js_of_ocaml__Js = require('Js_of_ocaml__Js.js');
var runtime = require('runtime.js');

let joo_global_object = global;


var runtime = joo_global_object.jsoo_runtime;
var caml_get_public_method = runtime["caml_get_public_method"];

function caml_call1(f, a0) {
  return f.length === 1 ? f(a0) : runtime["caml_call_gen"](f, [a0]);
}

var global_data = runtime["caml_get_global_data"]();
var Js_of_ocaml_Js = global_data["Js_of_ocaml__Js"];

function empty_position_options(param) {return {};}

function mz(x) {
  return caml_call1(caml_get_public_method(x, 82957527, 235), x);
}

var mA = Js_of_ocaml_Js[50][1];
var x = function(t1, param) {return t1.navigator;}(mA, mz);

if (caml_call1(Js_of_ocaml_Js[6][5], x)) {
  var mB = function(x) {
    return caml_call1(caml_get_public_method(x, 315713478, 236), x);
  };
  var geolocation = function(t0, param) {return t0.geolocation;}(x, mB);
}
else var geolocation = x;

function is_supported(param) {
  return caml_call1(Js_of_ocaml_Js[6][5], geolocation);
}

var Js_of_ocaml_Geolocation = [
  0,
  empty_position_options,
  geolocation,
  is_supported
];

runtime["caml_register_global"](
  3,
  Js_of_ocaml_Geolocation,
  "Js_of_ocaml__Geolocation"
);


module.exports = global.jsoo_runtime.caml_get_global_data().Js_of_ocaml__Geolocation;