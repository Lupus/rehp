/**
 * @flow strict
 * Printexc
 */

// @ts-check


"use strict";

var runtime = require("../runtime/runtime.js");

function call1(f, a0) {
  return f.length === 1 ? f(a0) : runtime["caml_call_gen"](f, [a0]);
}

function call2(f, a0, a1) {
  return f.length === 2 ? f(a0, a1) : runtime["caml_call_gen"](f, [a0,a1]);
}

function call3(f, a0, a1, a2) {
  return f.length === 3 ?
    f(a0, a1, a2) :
    runtime["caml_call_gen"](f, [a0,a1,a2]);
}

function call6(f, a0, a1, a2, a3, a4, a5) {
  return f.length === 6 ?
    f(a0, a1, a2, a3, a4, a5) :
    runtime["caml_call_gen"](f, [a0,a1,a2,a3,a4,a5]);
}

function call7(f, a0, a1, a2, a3, a4, a5, a6) {
  return f.length === 7 ?
    f(a0, a1, a2, a3, a4, a5, a6) :
    runtime["caml_call_gen"](f, [a0,a1,a2,a3,a4,a5,a6]);
}

var caml_check_bound = runtime["caml_check_bound"];
var caml_get_exception_raw_backtrace = runtime
 ["caml_get_exception_raw_backtrace"];
var string = runtime["caml_new_string"];
var caml_obj_tag = runtime["caml_obj_tag"];
var caml_wrap_thrown_exception_reraise = runtime
 ["caml_wrap_thrown_exception_reraise"];
var cst__0 = string("");
var cst_Program_not_linked_with_g_cannot_print_stack_backtrace = string(
  "(Program not linked with -g, cannot print stack backtrace)\n"
);
var cst_Raised_at = string("Raised at");
var cst_Re_raised_at = string("Re-raised at");
var cst_Raised_by_primitive_operation_at = string(
  "Raised by primitive operation at"
);
var cst_Called_from = string("Called from");
var cst_inlined = string(" (inlined)");
var cst__3 = string("");
var partial = [4,0,0,0,0];
var cst_Out_of_memory = string("Out of memory");
var cst_Stack_overflow = string("Stack overflow");
var cst_Pattern_matching_failed = string("Pattern matching failed");
var cst_Assertion_failed = string("Assertion failed");
var cst_Undefined_recursive_module = string("Undefined recursive module");
var cst__1 = string("");
var cst__2 = string("");
var cst = string("_");
var locfmt = [
  0,
  [
    11,
    string('File "'),
    [
      2,
      0,
      [
        11,
        string('", line '),
        [
          4,
          0,
          0,
          0,
          [
            11,
            string(", characters "),
            [4,0,0,0,[12,45,[4,0,0,0,[11,string(": "),[2,0,0]]]]]
          ]
        ]
      ]
    ]
  ],
  string('File "%s", line %d, characters %d-%d: %s')
];
var Printf = require("./Printf.js");
var Pervasives = require("./Pervasives.js");
var Out_of_memory = require("../runtime/Out_of_memory.js");
var Buffer = require("./Buffer.js");
var Stack_overflow = require("../runtime/Stack_overflow.js");
var Match_failure = require("../runtime/Match_failure.js");
var Assert_failure = require("../runtime/Assert_failure.js");
var Undefined_recursive_module = require(
  "../runtime/Undefined_recursive_module.js"
);
var Obj = require("./Obj.js");
var c_ = [0,[11,string(", "),[2,0,[2,0,0]]],string(", %s%s")];
var l_ = [0,[2,0,[12,10,0]],string("%s\n")];
var j_ = [0,[2,0,[12,10,0]],string("%s\n")];
var k_ = [
  0,
  [11,string("(Program not linked with -g, cannot print stack backtrace)\n"),0
  ],
  string("(Program not linked with -g, cannot print stack backtrace)\n")
];
var h_ = [
  0,
  [
    2,
    0,
    [
      11,
      string(' file "'),
      [
        2,
        0,
        [
          12,
          34,
          [
            2,
            0,
            [
              11,
              string(", line "),
              [4,0,0,0,[11,string(", characters "),[4,0,0,0,[12,45,partial]]]]
            ]
          ]
        ]
      ]
    ]
  ],
  string('%s file "%s"%s, line %d, characters %d-%d')
];
var i_ = [
  0,
  [2,0,[11,string(" unknown location"),0]],
  string("%s unknown location")
];
var g_ = [
  0,
  [11,string("Uncaught exception: "),[2,0,[12,10,0]]],
  string("Uncaught exception: %s\n")
];
var f_ = [
  0,
  [11,string("Uncaught exception: "),[2,0,[12,10,0]]],
  string("Uncaught exception: %s\n")
];
var d_ = [0,[12,40,[2,0,[2,0,[12,41,0]]]],string("(%s%s)")];
var e_ = [0,[12,40,[2,0,[12,41,0]]],string("(%s)")];
var b_ = [0,[4,0,0,0,0],string("%d")];
var a_ = [0,[3,0,0],string("%S")];
var printers = [0,0];

function field(x, i) {
  var f = x[i + 1];
  return call1(Obj[1], f) ?
    caml_obj_tag(f) === Obj[13] ?
     call2(Printf[4], a_, f) :
     caml_obj_tag(f) === Obj[14] ? call1(Pervasives[23], f) : cst :
    call2(Printf[4], b_, f);
}

function other_fields(x, i) {
  if (x.length - 1 <= i) {return cst__0;}
  var ad_ = other_fields(x, i + 1 | 0);
  var ae_ = field(x, i);
  return call3(Printf[4], c_, ae_, ad_);
}

function fields(x) {
  var aa_;
  var ab_;
  var ac_;
  var match = x.length - 1;
  if (2 < match >>> 0) {
    aa_ = other_fields(x, 2);
    ab_ = field(x, 1);
    return call3(Printf[4], d_, ab_, aa_);
  }
  switch (match) {
    case 0:
      return cst__1;
    case 1:
      return cst__2;
    default:
      ac_ = field(x, 1);
      return call2(Printf[4], e_, ac_)
    }
}

function to_string(x) {
  function conv(param) {
    var tl;
    var hd;
    var W_;
    var s;
    var X_;
    var match;
    var char__0;
    var line;
    var file;
    var match__0;
    var char__1;
    var line__0;
    var file__0;
    var match__1;
    var char__2;
    var line__1;
    var file__1;
    var constructor;
    var Y_;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        tl = param__0[2];
        hd = param__0[1];
        try {X_ = call1(hd, x);W_ = X_;}catch(Z_) {W_ = 0;}
        if (W_) {s = W_[1];return s;}
        param__0 = tl;
        continue;
      }
      if (x === Out_of_memory) {return cst_Out_of_memory;}
      if (x === Stack_overflow) {return cst_Stack_overflow;}
      if (x[1] === Match_failure) {
        match = x[2];
        char__0 = match[3];
        line = match[2];
        file = match[1];
        return call6(
          Printf[4],
          locfmt,
          file,
          line,
          char__0,
          char__0 + 5 | 0,
          cst_Pattern_matching_failed
        );
      }
      if (x[1] === Assert_failure) {
        match__0 = x[2];
        char__1 = match__0[3];
        line__0 = match__0[2];
        file__0 = match__0[1];
        return call6(
          Printf[4],
          locfmt,
          file__0,
          line__0,
          char__1,
          char__1 + 6 | 0,
          cst_Assertion_failed
        );
      }
      if (x[1] === Undefined_recursive_module) {
        match__1 = x[2];
        char__2 = match__1[3];
        line__1 = match__1[2];
        file__1 = match__1[1];
        return call6(
          Printf[4],
          locfmt,
          file__1,
          line__1,
          char__2,
          char__2 + 6 | 0,
          cst_Undefined_recursive_module
        );
      }
      if (0 === caml_obj_tag(x)) {
        constructor = x[1][1];
        Y_ = fields(x);
        return call2(Pervasives[16], constructor, Y_);
      }
      return x[1];
    }
  }
  return conv(printers[1]);
}

function print(fct, arg) {
  var V_;
  var U_;
  try {V_ = call1(fct, arg);return V_;}
  catch(x) {
    x = runtime["caml_wrap_exception"](x);
    U_ = to_string(x);
    call2(Printf[3], f_, U_);
    call1(Pervasives[51], Pervasives[28]);
    throw caml_wrap_thrown_exception_reraise(x);
  }
}

function catch__0(fct, arg) {
  var T_;
  var S_;
  try {T_ = call1(fct, arg);return T_;}
  catch(x) {
    x = runtime["caml_wrap_exception"](x);
    call1(Pervasives[51], Pervasives[27]);
    S_ = to_string(x);
    call2(Printf[3], g_, S_);
    return call1(Pervasives[87], 2);
  }
}

function convert_raw_backtrace(bt) {
  var R_ = [0,runtime["caml_convert_raw_backtrace"](bt)];
  return R_;
}

function format_backtrace_slot(pos, slot) {
  var K_;
  var L_;
  var M_;
  var N_;
  var O_;
  var P_;
  function info(is_raise) {
    return is_raise ?
      0 === pos ? cst_Raised_at : cst_Re_raised_at :
      0 === pos ? cst_Raised_by_primitive_operation_at : cst_Called_from;
  }
  if (0 === slot[0]) {
    K_ = slot[5];
    L_ = slot[4];
    M_ = slot[3];
    N_ = slot[6] ? cst_inlined : cst__3;
    O_ = slot[2];
    P_ = info(slot[1]);
    return [0,call7(Printf[4], h_, P_, O_, N_, M_, L_, K_)];
  }
  if (slot[1]) {return 0;}
  var Q_ = info(0);
  return [0,call2(Printf[4], i_, Q_)];
}

function print_exception_backtrace(outchan, backtrace) {
  var J_;
  var str;
  var match;
  var i;
  var I_;
  var H_;
  var a;
  if (backtrace) {
    a = backtrace[1];
    I_ = a.length - 1 + -1 | 0;
    H_ = 0;
    if (! (I_ < 0)) {
      i = H_;
      for (; ; ) {
        match = format_backtrace_slot(i, caml_check_bound(a, i)[i + 1]);
        if (match) {str = match[1];call3(Printf[1], outchan, j_, str);}
        J_ = i + 1 | 0;
        if (I_ !== i) {i = J_;continue;}
        break;
      }
    }
    return 0;
  }
  return call2(Printf[1], outchan, k_);
}

function print_raw_backtrace(outchan, raw_backtrace) {
  return print_exception_backtrace(
    outchan,
    convert_raw_backtrace(raw_backtrace)
  );
}

function print_backtrace(outchan) {
  return print_raw_backtrace(outchan, caml_get_exception_raw_backtrace(0));
}

function backtrace_to_string(backtrace) {
  var G_;
  var str;
  var match;
  var i;
  var F_;
  var E_;
  var b;
  var a;
  if (backtrace) {
    a = backtrace[1];
    b = call1(Buffer[1], 1024);
    F_ = a.length - 1 + -1 | 0;
    E_ = 0;
    if (! (F_ < 0)) {
      i = E_;
      for (; ; ) {
        match = format_backtrace_slot(i, caml_check_bound(a, i)[i + 1]);
        if (match) {str = match[1];call3(Printf[5], b, l_, str);}
        G_ = i + 1 | 0;
        if (F_ !== i) {i = G_;continue;}
        break;
      }
    }
    return call1(Buffer[2], b);
  }
  return cst_Program_not_linked_with_g_cannot_print_stack_backtrace;
}

function raw_backtrace_to_string(raw_backtrace) {
  return backtrace_to_string(convert_raw_backtrace(raw_backtrace));
}

function backtrace_slot_is_raise(param) {
  return 0 === param[0] ? param[1] : param[1];
}

function backtrace_slot_is_inline(param) {return 0 === param[0] ? param[6] : 0;
}

function backtrace_slot_location(param) {
  return 0 === param[0] ? [0,[0,param[2],param[3],param[4],param[5]]] : 0;
}

function backtrace_slots(raw_backtrace) {
  var backtrace;
  var usable_slot;
  var exists_usable;
  var match = convert_raw_backtrace(raw_backtrace);
  if (match) {
    backtrace = match[1];
    usable_slot = function(param) {return 0 === param[0] ? 1 : 0;};
    exists_usable =
      function(i) {
        var D_;
        var i__1;
        var i__0 = i;
        for (; ; ) {
          if (-1 === i__0) {return 0;}
          D_ = usable_slot(caml_check_bound(backtrace, i__0)[i__0 + 1]);
          if (D_) {return D_;}
          i__1 = i__0 + -1 | 0;
          i__0 = i__1;
          continue;
        }
      };
    return exists_usable(backtrace.length - 1 + -1 | 0) ? [0,backtrace] : 0;
  }
  return 0;
}

function get_backtrace(param) {
  return raw_backtrace_to_string(caml_get_exception_raw_backtrace(0));
}

function register_printer(fn) {printers[1] = [0,fn,printers[1]];return 0;}

function exn_slot(x) {return 0 === caml_obj_tag(x) ? x[1] : x;}

function exn_slot_id(x) {var slot = exn_slot(x);return slot[2];}

function exn_slot_name(x) {var slot = exn_slot(x);return slot[1];}

var uncaught_exception_handler = [0,0];

function set_uncaught_exception_handler(fn) {
  uncaught_exception_handler[1] = [0,fn];
  return 0;
}

function m_(C_) {return runtime["caml_raw_backtrace_next_slot"](C_);}

function n_(B_) {return runtime["caml_convert_raw_backtrace_slot"](B_);}

function o_(A_, z_) {return runtime["caml_raw_backtrace_slot"](A_, z_);}

function p_(y_) {return runtime["caml_raw_backtrace_length"](y_);}

var q_ = [
  0,
  backtrace_slot_is_raise,
  backtrace_slot_is_inline,
  backtrace_slot_location,
  format_backtrace_slot
];

function r_(x_) {return runtime["caml_get_current_callstack"](x_);}

function s_(w_) {return caml_get_exception_raw_backtrace(w_);}

function t_(v_) {return runtime["caml_backtrace_status"](v_);}

var Printexc = [
  0,
  to_string,
  print,
  catch__0,
  print_backtrace,
  get_backtrace,
  function(u_) {return runtime["caml_record_backtrace"](u_);},
  t_,
  register_printer,
  s_,
  print_raw_backtrace,
  raw_backtrace_to_string,
  r_,
  set_uncaught_exception_handler,
  backtrace_slots,
  q_,
  p_,
  o_,
  n_,
  m_,
  exn_slot_id,
  exn_slot_name
];

module.exports = Printexc;

/*::type Exports = {
  to_string: (x: any) => any,
  print: (fct: any, arg: any) => any,
  _catch_: (fct: any, arg: any) => any,
  print_backtrace: (outchan: any) => any,
  get_backtrace: (param: any) => any,
  register_printer: (fn: any) => any,
  print_raw_backtrace: (outchan: any, raw_backtrace: any) => any,
  raw_backtrace_to_string: (raw_backtrace: any) => any,
  set_uncaught_exception_handler: (fn: any) => any,
  backtrace_slots: (raw_backtrace: any) => any,
  exn_slot_id: (x: any) => any,
  exn_slot_name: (x: any) => any,
}*/
/** @type {{
  to_string: (x: any) => any,
  print: (fct: any, arg: any) => any,
  _catch_: (fct: any, arg: any) => any,
  print_backtrace: (outchan: any) => any,
  get_backtrace: (param: any) => any,
  register_printer: (fn: any) => any,
  print_raw_backtrace: (outchan: any, raw_backtrace: any) => any,
  raw_backtrace_to_string: (raw_backtrace: any) => any,
  set_uncaught_exception_handler: (fn: any) => any,
  backtrace_slots: (raw_backtrace: any) => any,
  exn_slot_id: (x: any) => any,
  exn_slot_name: (x: any) => any,
}} */
module.exports = ((module.exports /*:: : any*/) /*:: :Exports */);
module.exports.to_string = module.exports[1];
module.exports.print = module.exports[2];
module.exports._catch_ = module.exports[3];
module.exports.print_backtrace = module.exports[4];
module.exports.get_backtrace = module.exports[5];
module.exports.register_printer = module.exports[8];
module.exports.print_raw_backtrace = module.exports[10];
module.exports.raw_backtrace_to_string = module.exports[11];
module.exports.set_uncaught_exception_handler = module.exports[13];
module.exports.backtrace_slots = module.exports[14];
module.exports.exn_slot_id = module.exports[20];
module.exports.exn_slot_name = module.exports[21];

/* Hashing disabled */
