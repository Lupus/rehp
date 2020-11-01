/**
 * @flow strict
 * Stdlib__parsing
 */

// @ts-check


"use strict";

var runtime = require("../runtime.js");
var caml_check_bound = runtime["caml_check_bound"];
var caml_fresh_oo_id = runtime["caml_fresh_oo_id"];
var caml_make_vect = runtime["caml_make_vect"];
var string = runtime["caml_new_string"];
var caml_wrap_thrown_exception = runtime["caml_wrap_thrown_exception"];
var caml_wrap_thrown_exception_reraise = runtime
 ["caml_wrap_thrown_exception_reraise"];

function call1(f, a0) {
  return f.length === 1 ? f(a0) : runtime["caml_call_gen"](f, [a0]);
}

function call4(f, a0, a1, a2, a3) {
  return f.length === 4 ?
    f(a0, a1, a2, a3) :
    runtime["caml_call_gen"](f, [a0,a1,a2,a3]);
}

function call5(f, a0, a1, a2, a3, a4) {
  return f.length === 5 ?
    f(a0, a1, a2, a3, a4) :
    runtime["caml_call_gen"](f, [a0,a1,a2,a3,a4]);
}

var cst_syntax_error = string("syntax error");
var cst_Stdlib_Parsing_YYexit = string("Stdlib.Parsing.YYexit");
var cst_Stdlib_Parsing_Parse_error = string("Stdlib.Parsing.Parse_error");
var Stdlib_obj = require("./Stdlib__obj.js");
var Stdlib_array = require("./Stdlib__array.js");
var Stdlib_lexing = require("./Stdlib__lexing.js");
var YYexit = [248,cst_Stdlib_Parsing_YYexit,caml_fresh_oo_id(0)];
var Parse_error = [248,cst_Stdlib_Parsing_Parse_error,caml_fresh_oo_id(0)];
var env = [
  0,
  caml_make_vect(100, 0),
  caml_make_vect(100, 0),
  caml_make_vect(100, Stdlib_lexing[1]),
  caml_make_vect(100, Stdlib_lexing[1]),
  100,
  0,
  0,
  0,
  Stdlib_lexing[1],
  Stdlib_lexing[1],
  0,
  0,
  0,
  0,
  0,
  0
];

function grow_stacks(param) {
  var oldsize = env[5];
  var newsize = oldsize * 2 | 0;
  var new_s = caml_make_vect(newsize, 0);
  var new_v = caml_make_vect(newsize, 0);
  var new_start = caml_make_vect(newsize, Stdlib_lexing[1]);
  var new_end = caml_make_vect(newsize, Stdlib_lexing[1]);
  call5(Stdlib_array[10], env[1], 0, new_s, 0, oldsize);
  env[1] = new_s;
  call5(Stdlib_array[10], env[2], 0, new_v, 0, oldsize);
  env[2] = new_v;
  call5(Stdlib_array[10], env[3], 0, new_start, 0, oldsize);
  env[3] = new_start;
  call5(Stdlib_array[10], env[4], 0, new_end, 0, oldsize);
  env[4] = new_end;
  env[5] = newsize;
  return 0;
}

function clear_parser(param) {
  call4(Stdlib_array[9], env[2], 0, env[5], 0);
  env[8] = 0;
  return 0;
}

var current_lookahead_fun = [0,function(param) {return 0;}];

function yyparse(tables, start, lexer, lexbuf) {
  function loop(cmd, arg) {
    var cmd__0 = cmd;
    var arg__0 = arg;
    for (; ; ) {
      var match = runtime["caml_parse_engine"](tables, env, cmd__0, arg__0);
      switch (match) {
        case 0:
          var arg__1 = call1(lexer, lexbuf);
          env[9] = lexbuf[11];
          env[10] = lexbuf[12];
          var cmd__0 = 1;
          var arg__0 = arg__1;
          continue;
        case 1:
          throw caml_wrap_thrown_exception(Parse_error);
        case 2:
          grow_stacks(0);
          var cmd__0 = 2;
          var arg__0 = 0;
          continue;
        case 3:
          grow_stacks(0);
          var cmd__0 = 3;
          var arg__0 = 0;
          continue;
        case 4:
          try {
            var m_ = env[13];
            var n_ = call1(caml_check_bound(tables[1], m_)[m_ + 1], env);
            var o_ = 4;
            var cmd__1 = o_;
            var arg__2 = n_;
          }
          catch(p_) {
            p_ = runtime["caml_wrap_exception"](p_);
            if (p_ !== Parse_error) {
              throw caml_wrap_thrown_exception_reraise(p_);
            }
            var k_ = 0;
            var l_ = 5;
            var cmd__1 = l_;
            var arg__2 = k_;
          }
          var cmd__0 = cmd__1;
          var arg__0 = arg__2;
          continue;
        default:
          call1(tables[14], cst_syntax_error);
          var cmd__0 = 5;
          var arg__0 = 0;
          continue
        }
    }
  }
  var init_asp = env[11];
  var init_sp = env[14];
  var init_stackbase = env[6];
  var init_state = env[15];
  var init_curr_char = env[7];
  var init_lval = env[8];
  var init_errflag = env[16];
  env[6] = env[14] + 1 | 0;
  env[7] = start;
  env[10] = lexbuf[12];
  try {var i_ = loop(0, 0);return i_;}
  catch(exn) {
    exn = runtime["caml_wrap_exception"](exn);
    var curr_char = env[7];
    env[11] = init_asp;
    env[14] = init_sp;
    env[6] = init_stackbase;
    env[15] = init_state;
    env[7] = init_curr_char;
    env[8] = init_lval;
    env[16] = init_errflag;
    if (exn[1] === YYexit) {var v = exn[2];return v;}
    current_lookahead_fun[1] =
      function(tok) {
        if (call1(Stdlib_obj[1], tok)) {
          var j_ = runtime["caml_obj_tag"](tok);
          return caml_check_bound(tables[3], j_)[j_ + 1] === curr_char ? 1 : 0;
        }
        return caml_check_bound(tables[2], tok)[tok + 1] === curr_char ? 1 : 0;
      };
    throw caml_wrap_thrown_exception_reraise(exn);
  }
}

function peek_val(env, n) {
  var h_ = env[11] - n | 0;
  return caml_check_bound(env[2], h_)[h_ + 1];
}

function symbol_start_pos(param) {
  function loop(i) {
    var i__0 = i;
    for (; ; ) {
      if (0 < i__0) {
        var e_ = (env[11] - i__0 | 0) + 1 | 0;
        var st = caml_check_bound(env[3], e_)[e_ + 1];
        var f_ = (env[11] - i__0 | 0) + 1 | 0;
        var en = caml_check_bound(env[4], f_)[f_ + 1];
        if (runtime["caml_notequal"](st, en)) {return st;}
        var i__1 = i__0 + -1 | 0;
        var i__0 = i__1;
        continue;
      }
      var g_ = env[11];
      return caml_check_bound(env[4], g_)[g_ + 1];
    }
  }
  return loop(env[12]);
}

function symbol_end_pos(param) {
  var d_ = env[11];
  return caml_check_bound(env[4], d_)[d_ + 1];
}

function rhs_start_pos(n) {
  var c_ = env[11] - (env[12] - n | 0) | 0;
  return caml_check_bound(env[3], c_)[c_ + 1];
}

function rhs_end_pos(n) {
  var b_ = env[11] - (env[12] - n | 0) | 0;
  return caml_check_bound(env[4], b_)[b_ + 1];
}

function symbol_start(param) {return symbol_start_pos(0)[4];}

function symbol_end(param) {return symbol_end_pos(0)[4];}

function rhs_start(n) {return rhs_start_pos(n)[4];}

function rhs_end(n) {return rhs_end_pos(n)[4];}

function is_current_lookahead(tok) {
  return call1(current_lookahead_fun[1], tok);
}

function parse_error(param) {return 0;}

var Stdlib_parsing = [
  0,
  symbol_start,
  symbol_end,
  rhs_start,
  rhs_end,
  symbol_start_pos,
  symbol_end_pos,
  rhs_start_pos,
  rhs_end_pos,
  clear_parser,
  Parse_error,
  function(a_) {return runtime["caml_set_parser_trace"](a_);},
  YYexit,
  yyparse,
  peek_val,
  is_current_lookahead,
  parse_error
];

module.exports = Stdlib_parsing;

/*::type Exports = {
  symbol_start: (param: any) => any,
  symbol_end: (param: any) => any,
  rhs_start: (n: any) => any,
  rhs_end: (n: any) => any,
  symbol_start_pos: (param: any) => any,
  symbol_end_pos: (param: any) => any,
  rhs_start_pos: (n: any) => any,
  rhs_end_pos: (n: any) => any,
  clear_parser: (param: any) => any,
  Parse_error: any,
  YYexit: any,
  yyparse: (tables: any, start: any, lexer: any, lexbuf: any) => any,
  peek_val: (env: any, n: any) => any,
  is_current_lookahead: (tok: any) => any,
  parse_error: (param: any) => any,
}*/
/** @type {{
  symbol_start: (param: any) => any,
  symbol_end: (param: any) => any,
  rhs_start: (n: any) => any,
  rhs_end: (n: any) => any,
  symbol_start_pos: (param: any) => any,
  symbol_end_pos: (param: any) => any,
  rhs_start_pos: (n: any) => any,
  rhs_end_pos: (n: any) => any,
  clear_parser: (param: any) => any,
  Parse_error: any,
  YYexit: any,
  yyparse: (tables: any, start: any, lexer: any, lexbuf: any) => any,
  peek_val: (env: any, n: any) => any,
  is_current_lookahead: (tok: any) => any,
  parse_error: (param: any) => any,
}} */
module.exports = ((module.exports /*:: : any*/) /*:: :Exports */);
module.exports.symbol_start = module.exports[1];
module.exports.symbol_end = module.exports[2];
module.exports.rhs_start = module.exports[3];
module.exports.rhs_end = module.exports[4];
module.exports.symbol_start_pos = module.exports[5];
module.exports.symbol_end_pos = module.exports[6];
module.exports.rhs_start_pos = module.exports[7];
module.exports.rhs_end_pos = module.exports[8];
module.exports.clear_parser = module.exports[9];
module.exports.Parse_error = module.exports[10];
module.exports.YYexit = module.exports[12];
module.exports.yyparse = module.exports[13];
module.exports.peek_val = module.exports[14];
module.exports.is_current_lookahead = module.exports[15];
module.exports.parse_error = module.exports[16];

/* Hashing disabled */
