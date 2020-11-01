/**
 * @flow strict
 * Stdlib__marshal
 */

// @ts-check


"use strict";

var runtime = require("../runtime.js");
var caml_marshal_data_size = runtime["caml_marshal_data_size"];
var caml_ml_bytes_length = runtime["caml_ml_bytes_length"];
var string = runtime["caml_new_string"];

function call1(f, a0) {
  return f.length === 1 ? f(a0) : runtime["caml_call_gen"](f, [a0]);
}

var cst_Marshal_from_bytes = string("Marshal.from_bytes");
var cst_Marshal_from_bytes__0 = string("Marshal.from_bytes");
var cst_Marshal_data_size = string("Marshal.data_size");
var cst_Marshal_to_buffer_substring_out_of_bounds = string(
  "Marshal.to_buffer: substring out of bounds"
);
var Stdlib_bytes = require("./Stdlib__bytes.js");
var Stdlib = require("./Stdlib.js");

function to_buffer(buff, ofs, len, v, flags) {
  if (0 <= ofs) {
    if (0 <= len) {
      if (! ((caml_ml_bytes_length(buff) - len | 0) < ofs)) {
        return runtime["caml_output_value_to_buffer"](buff, ofs, len, v, flags
        );
      }
    }
  }
  return call1(Stdlib[1], cst_Marshal_to_buffer_substring_out_of_bounds);
}

var header_size = 20;

function data_size(buff, ofs) {
  if (0 <= ofs) {
    if (! ((caml_ml_bytes_length(buff) - 20 | 0) < ofs)) {return caml_marshal_data_size(buff, ofs);}
  }
  return call1(Stdlib[1], cst_Marshal_data_size);
}

function total_size(buff, ofs) {return 20 + data_size(buff, ofs) | 0;}

function from_bytes(buff, ofs) {
  if (0 <= ofs) {
    if (! ((caml_ml_bytes_length(buff) - 20 | 0) < ofs)) {
      var len = caml_marshal_data_size(buff, ofs);
      return (caml_ml_bytes_length(buff) - (20 + len | 0) | 0) < ofs ?
        call1(Stdlib[1], cst_Marshal_from_bytes__0) :
        runtime["caml_input_value_from_bytes"](buff, ofs);
    }
  }
  return call1(Stdlib[1], cst_Marshal_from_bytes);
}

function from_string(buff, ofs) {
  return from_bytes(call1(Stdlib_bytes[43], buff), ofs);
}

function a_(e_) {return runtime["caml_input_value"](e_);}

var Stdlib_marshal = [
  0,
  function(d_, c_, b_) {return runtime["caml_output_value"](d_, c_, b_);},
  to_buffer,
  a_,
  from_bytes,
  from_string,
  header_size,
  data_size,
  total_size
];

module.exports = Stdlib_marshal;

/*::type Exports = {
  to_buffer: (buff: any, ofs: any, len: any, v: any, flags: any) => any,
  from_bytes: (buff: any, ofs: any) => any,
  from_string: (buff: any, ofs: any) => any,
  header_size: any,
  data_size: (buff: any, ofs: any) => any,
  total_size: (buff: any, ofs: any) => any,
}*/
/** @type {{
  to_buffer: (buff: any, ofs: any, len: any, v: any, flags: any) => any,
  from_bytes: (buff: any, ofs: any) => any,
  from_string: (buff: any, ofs: any) => any,
  header_size: any,
  data_size: (buff: any, ofs: any) => any,
  total_size: (buff: any, ofs: any) => any,
}} */
module.exports = ((module.exports /*:: : any*/) /*:: :Exports */);
module.exports.to_buffer = module.exports[2];
module.exports.from_bytes = module.exports[4];
module.exports.from_string = module.exports[5];
module.exports.header_size = module.exports[6];
module.exports.data_size = module.exports[7];
module.exports.total_size = module.exports[8];

/* Hashing disabled */
