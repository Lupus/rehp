/**
 * @flow strict
 * Stdlib__map
 */

// @ts-check


"use strict";

var runtime = require("../runtime.js");
var string = runtime["caml_new_string"];
var caml_wrap_thrown_exception = runtime["caml_wrap_thrown_exception"];

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

var cst_Map_remove_min_elt = string("Map.remove_min_elt");
var cst_Map_bal = string("Map.bal");
var cst_Map_bal__0 = string("Map.bal");
var cst_Map_bal__1 = string("Map.bal");
var cst_Map_bal__2 = string("Map.bal");
var Stdlib = require("./Stdlib.js");
var Assert_failure = require("../runtime/Assert_failure.js");
var Stdlib_seq = require("./Stdlib__seq.js");
var a_ = [0,0,0,0];
var b_ = [0,string("map.ml"),398,10];
var c_ = [0,0,0];

function Make(Ord) {
  function height(param) {if (param) {var h = param[5];return h;}return 0;}
  function create(l, x, d, r) {
    var hl = height(l);
    var hr = height(r);
    var U_ = hr <= hl ? hl + 1 | 0 : hr + 1 | 0;
    return [0,l,x,d,r,U_];
  }
  function singleton(x, d) {return [0,0,x,d,0,1];}
  function bal(l, x, d, r) {
    if (l) {
      var h = l[5];
      var hl = h;
    }
    else var hl = 0;
    if (r) {
      var h__0 = r[5];
      var hr = h__0;
    }
    else var hr = 0;
    if ((hr + 2 | 0) < hl) {
      if (l) {
        var lr = l[4];
        var ld = l[3];
        var lv = l[2];
        var ll = l[1];
        var P_ = height(lr);
        if (P_ <= height(ll)) {
          return create(ll, lv, ld, create(lr, x, d, r));
        }
        if (lr) {
          var lrr = lr[4];
          var lrd = lr[3];
          var lrv = lr[2];
          var lrl = lr[1];
          var Q_ = create(lrr, x, d, r);
          return create(create(ll, lv, ld, lrl), lrv, lrd, Q_);
        }
        return call1(Stdlib[1], cst_Map_bal);
      }
      return call1(Stdlib[1], cst_Map_bal__0);
    }
    if ((hl + 2 | 0) < hr) {
      if (r) {
        var rr = r[4];
        var rd = r[3];
        var rv = r[2];
        var rl = r[1];
        var R_ = height(rl);
        if (R_ <= height(rr)) {
          return create(create(l, x, d, rl), rv, rd, rr);
        }
        if (rl) {
          var rlr = rl[4];
          var rld = rl[3];
          var rlv = rl[2];
          var rll = rl[1];
          var S_ = create(rlr, rv, rd, rr);
          return create(create(l, x, d, rll), rlv, rld, S_);
        }
        return call1(Stdlib[1], cst_Map_bal__1);
      }
      return call1(Stdlib[1], cst_Map_bal__2);
    }
    var T_ = hr <= hl ? hl + 1 | 0 : hr + 1 | 0;
    return [0,l,x,d,r,T_];
  }
  var empty = 0;
  function is_empty(param) {return param ? 0 : 1;}
  function add(x, data, m) {
    if (m) {
      var h = m[5];
      var r = m[4];
      var d = m[3];
      var v = m[2];
      var l = m[1];
      var c = call2(Ord[1], x, v);
      if (0 === c) {return d === data ? m : [0,l,x,data,r,h];}
      if (0 <= c) {
        var rr = add(x, data, r);
        return r === rr ? m : bal(l, v, d, rr);
      }
      var ll = add(x, data, l);
      return l === ll ? m : bal(ll, v, d, r);
    }
    return [0,0,x,data,0,1];
  }
  function find(x, param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        var c = call2(Ord[1], x, v);
        if (0 === c) {return d;}
        var param__1 = 0 <= c ? r : l;
        var param__0 = param__1;
        continue;
      }
      throw caml_wrap_thrown_exception(Stdlib[8]);
    }
  }
  function find_first_aux(v0, d0, f, param) {
    var v0__0 = v0;
    var d0__0 = d0;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        if (call1(f, v)) {
          var v0__0 = v;
          var d0__0 = d;
          var param__0 = l;
          continue;
        }
        var param__0 = r;
        continue;
      }
      return [0,v0__0,d0__0];
    }
  }
  function find_first(f, param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        if (call1(f, v)) {return find_first_aux(v, d, f, l);}
        var param__0 = r;
        continue;
      }
      throw caml_wrap_thrown_exception(Stdlib[8]);
    }
  }
  function find_first_opt_aux(v0, d0, f, param) {
    var v0__0 = v0;
    var d0__0 = d0;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        if (call1(f, v)) {
          var v0__0 = v;
          var d0__0 = d;
          var param__0 = l;
          continue;
        }
        var param__0 = r;
        continue;
      }
      return [0,[0,v0__0,d0__0]];
    }
  }
  function find_first_opt(f, param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        if (call1(f, v)) {return find_first_opt_aux(v, d, f, l);}
        var param__0 = r;
        continue;
      }
      return 0;
    }
  }
  function find_last_aux(v0, d0, f, param) {
    var v0__0 = v0;
    var d0__0 = d0;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        if (call1(f, v)) {
          var v0__0 = v;
          var d0__0 = d;
          var param__0 = r;
          continue;
        }
        var param__0 = l;
        continue;
      }
      return [0,v0__0,d0__0];
    }
  }
  function find_last(f, param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        if (call1(f, v)) {return find_last_aux(v, d, f, r);}
        var param__0 = l;
        continue;
      }
      throw caml_wrap_thrown_exception(Stdlib[8]);
    }
  }
  function find_last_opt_aux(v0, d0, f, param) {
    var v0__0 = v0;
    var d0__0 = d0;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        if (call1(f, v)) {
          var v0__0 = v;
          var d0__0 = d;
          var param__0 = r;
          continue;
        }
        var param__0 = l;
        continue;
      }
      return [0,[0,v0__0,d0__0]];
    }
  }
  function find_last_opt(f, param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        if (call1(f, v)) {return find_last_opt_aux(v, d, f, r);}
        var param__0 = l;
        continue;
      }
      return 0;
    }
  }
  function find_opt(x, param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        var c = call2(Ord[1], x, v);
        if (0 === c) {return [0,d];}
        var param__1 = 0 <= c ? r : l;
        var param__0 = param__1;
        continue;
      }
      return 0;
    }
  }
  function mem(x, param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var v = param__0[2];
        var l = param__0[1];
        var c = call2(Ord[1], x, v);
        var O_ = 0 === c ? 1 : 0;
        if (O_) {return O_;}
        var param__1 = 0 <= c ? r : l;
        var param__0 = param__1;
        continue;
      }
      return 0;
    }
  }
  function min_binding(param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var N_ = param__0[1];
        if (N_) {var param__0 = N_;continue;}
        var d = param__0[3];
        var v = param__0[2];
        return [0,v,d];
      }
      throw caml_wrap_thrown_exception(Stdlib[8]);
    }
  }
  function min_binding_opt(param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var M_ = param__0[1];
        if (M_) {var param__0 = M_;continue;}
        var d = param__0[3];
        var v = param__0[2];
        return [0,[0,v,d]];
      }
      return 0;
    }
  }
  function max_binding(param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var J_ = param__0[4];
        var K_ = param__0[3];
        var L_ = param__0[2];
        if (J_) {var param__0 = J_;continue;}
        return [0,L_,K_];
      }
      throw caml_wrap_thrown_exception(Stdlib[8]);
    }
  }
  function max_binding_opt(param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var G_ = param__0[4];
        var H_ = param__0[3];
        var I_ = param__0[2];
        if (G_) {var param__0 = G_;continue;}
        return [0,[0,I_,H_]];
      }
      return 0;
    }
  }
  function remove_min_binding(param) {
    if (param) {
      var F_ = param[1];
      if (F_) {
        var r = param[4];
        var d = param[3];
        var v = param[2];
        return bal(remove_min_binding(F_), v, d, r);
      }
      var r__0 = param[4];
      return r__0;
    }
    return call1(Stdlib[1], cst_Map_remove_min_elt);
  }
  function f_(t, match) {
    if (t) {
      if (match) {
        var match__0 = min_binding(match);
        var d = match__0[2];
        var x = match__0[1];
        return bal(t, x, d, remove_min_binding(match));
      }
      return t;
    }
    return match;
  }
  function remove(x, m) {
    if (m) {
      var r = m[4];
      var d = m[3];
      var v = m[2];
      var l = m[1];
      var c = call2(Ord[1], x, v);
      if (0 === c) {return f_(l, r);}
      if (0 <= c) {
        var rr = remove(x, r);
        return r === rr ? m : bal(l, v, d, rr);
      }
      var ll = remove(x, l);
      return l === ll ? m : bal(ll, v, d, r);
    }
    return 0;
  }
  function update(x, f, m) {
    if (m) {
      var h = m[5];
      var r = m[4];
      var d = m[3];
      var v = m[2];
      var l = m[1];
      var c = call2(Ord[1], x, v);
      if (0 === c) {
        var match = call1(f, [0,d]);
        if (match) {
          var data = match[1];
          return d === data ? m : [0,l,x,data,r,h];
        }
        return f_(l, r);
      }
      if (0 <= c) {
        var rr = update(x, f, r);
        return r === rr ? m : bal(l, v, d, rr);
      }
      var ll = update(x, f, l);
      return l === ll ? m : bal(ll, v, d, r);
    }
    var match__0 = call1(f, 0);
    if (match__0) {var data__0 = match__0[1];return [0,0,x,data__0,0,1];}
    return 0;
  }
  function iter(f, param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var param__1 = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        iter(f, l);
        call2(f, v, d);
        var param__0 = param__1;
        continue;
      }
      return 0;
    }
  }
  function map(f, param) {
    if (param) {
      var h = param[5];
      var r = param[4];
      var d = param[3];
      var v = param[2];
      var l = param[1];
      var l__0 = map(f, l);
      var d__0 = call1(f, d);
      var r__0 = map(f, r);
      return [0,l__0,v,d__0,r__0,h];
    }
    return 0;
  }
  function mapi(f, param) {
    if (param) {
      var h = param[5];
      var r = param[4];
      var d = param[3];
      var v = param[2];
      var l = param[1];
      var l__0 = mapi(f, l);
      var d__0 = call2(f, v, d);
      var r__0 = mapi(f, r);
      return [0,l__0,v,d__0,r__0,h];
    }
    return 0;
  }
  function fold(f, m, accu) {
    var m__0 = m;
    var accu__0 = accu;
    for (; ; ) {
      if (m__0) {
        var m__1 = m__0[4];
        var d = m__0[3];
        var v = m__0[2];
        var l = m__0[1];
        var accu__1 = call3(f, v, d, fold(f, l, accu__0));
        var m__0 = m__1;
        var accu__0 = accu__1;
        continue;
      }
      return accu__0;
    }
  }
  function for_all(p, param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        var C_ = call2(p, v, d);
        if (C_) {
          var D_ = for_all(p, l);
          if (D_) {var param__0 = r;continue;}
          var E_ = D_;
        }
        else var E_ = C_;
        return E_;
      }
      return 1;
    }
  }
  function exists(p, param) {
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var l = param__0[1];
        var z_ = call2(p, v, d);
        if (z_) var A_ = z_;
        else {
          var B_ = exists(p, l);
          if (! B_) {var param__0 = r;continue;}
          var A_ = B_;
        }
        return A_;
      }
      return 0;
    }
  }
  function add_min_binding(k, x, param) {
    if (param) {
      var r = param[4];
      var d = param[3];
      var v = param[2];
      var l = param[1];
      return bal(add_min_binding(k, x, l), v, d, r);
    }
    return singleton(k, x);
  }
  function add_max_binding(k, x, param) {
    if (param) {
      var r = param[4];
      var d = param[3];
      var v = param[2];
      var l = param[1];
      return bal(l, v, d, add_max_binding(k, x, r));
    }
    return singleton(k, x);
  }
  function join(l, v, d, r) {
    if (l) {
      if (r) {
        var rh = r[5];
        var rr = r[4];
        var rd = r[3];
        var rv = r[2];
        var rl = r[1];
        var lh = l[5];
        var lr = l[4];
        var ld = l[3];
        var lv = l[2];
        var ll = l[1];
        return (rh + 2 | 0) < lh ?
          bal(ll, lv, ld, join(lr, v, d, r)) :
          (lh + 2 | 0) < rh ?
           bal(join(l, v, d, rl), rv, rd, rr) :
           create(l, v, d, r);
      }
      return add_max_binding(v, d, l);
    }
    return add_min_binding(v, d, r);
  }
  function concat(t, match) {
    if (t) {
      if (match) {
        var match__0 = min_binding(match);
        var d = match__0[2];
        var x = match__0[1];
        return join(t, x, d, remove_min_binding(match));
      }
      return t;
    }
    return match;
  }
  function concat_or_join(t1, v, d, t2) {
    if (d) {var d__0 = d[1];return join(t1, v, d__0, t2);}
    return concat(t1, t2);
  }
  function split(x, param) {
    if (param) {
      var r = param[4];
      var d = param[3];
      var v = param[2];
      var l = param[1];
      var c = call2(Ord[1], x, v);
      if (0 === c) {return [0,l,[0,d],r];}
      if (0 <= c) {
        var match = split(x, r);
        var rr = match[3];
        var pres = match[2];
        var lr = match[1];
        return [0,join(l, v, d, lr),pres,rr];
      }
      var match__0 = split(x, l);
      var rl = match__0[3];
      var pres__0 = match__0[2];
      var ll = match__0[1];
      return [0,ll,pres__0,join(rl, v, d, r)];
    }
    return a_;
  }
  function merge(f, s1, s2) {
    if (s1) {
      var h1 = s1[5];
      var r1 = s1[4];
      var d1 = s1[3];
      var v1 = s1[2];
      var l1 = s1[1];
      if (height(s2) <= h1) {
        var match = split(v1, s2);
        var r2 = match[3];
        var d2 = match[2];
        var l2 = match[1];
        var v_ = merge(f, r1, r2);
        var w_ = call3(f, v1, [0,d1], d2);
        return concat_or_join(merge(f, l1, l2), v1, w_, v_);
      }
    }
    else if (! s2) {return 0;}
    if (s2) {
      var r2__0 = s2[4];
      var d2__0 = s2[3];
      var v2 = s2[2];
      var l2__0 = s2[1];
      var match__0 = split(v2, s1);
      var r1__0 = match__0[3];
      var d1__0 = match__0[2];
      var l1__0 = match__0[1];
      var x_ = merge(f, r1__0, r2__0);
      var y_ = call3(f, v2, d1__0, [0,d2__0]);
      return concat_or_join(merge(f, l1__0, l2__0), v2, y_, x_);
    }
    throw caml_wrap_thrown_exception([0,Assert_failure,b_]);
  }
  function union(f, s1, s2) {
    if (s1) {
      if (s2) {
        var h2 = s2[5];
        var r2 = s2[4];
        var d2 = s2[3];
        var v2 = s2[2];
        var l2 = s2[1];
        var h1 = s1[5];
        var r1 = s1[4];
        var d1 = s1[3];
        var v1 = s1[2];
        var l1 = s1[1];
        if (h2 <= h1) {
          var match = split(v1, s2);
          var r2__0 = match[3];
          var d2__0 = match[2];
          var l2__0 = match[1];
          var l = union(f, l1, l2__0);
          var r = union(f, r1, r2__0);
          if (d2__0) {
            var d2__1 = d2__0[1];
            return concat_or_join(l, v1, call3(f, v1, d1, d2__1), r);
          }
          return join(l, v1, d1, r);
        }
        var match__0 = split(v2, s1);
        var r1__0 = match__0[3];
        var d1__0 = match__0[2];
        var l1__0 = match__0[1];
        var l__0 = union(f, l1__0, l2);
        var r__0 = union(f, r1__0, r2);
        if (d1__0) {
          var d1__1 = d1__0[1];
          return concat_or_join(l__0, v2, call3(f, v2, d1__1, d2), r__0);
        }
        return join(l__0, v2, d2, r__0);
      }
      var s = s1;
    }
    else var s = s2;
    return s;
  }
  function filter(p, m) {
    if (m) {
      var r = m[4];
      var d = m[3];
      var v = m[2];
      var l = m[1];
      var l__0 = filter(p, l);
      var pvd = call2(p, v, d);
      var r__0 = filter(p, r);
      if (pvd) {
        if (l === l__0) {if (r === r__0) {return m;}}
        return join(l__0, v, d, r__0);
      }
      return concat(l__0, r__0);
    }
    return 0;
  }
  function partition(p, param) {
    if (param) {
      var r = param[4];
      var d = param[3];
      var v = param[2];
      var l = param[1];
      var match = partition(p, l);
      var lf = match[2];
      var lt = match[1];
      var pvd = call2(p, v, d);
      var match__0 = partition(p, r);
      var rf = match__0[2];
      var rt = match__0[1];
      if (pvd) {var t_ = concat(lf, rf);return [0,join(lt, v, d, rt),t_];}
      var u_ = join(lf, v, d, rf);
      return [0,concat(lt, rt),u_];
    }
    return c_;
  }
  function cons_enum(m, e) {
    var m__0 = m;
    var e__0 = e;
    for (; ; ) {
      if (m__0) {
        var r = m__0[4];
        var d = m__0[3];
        var v = m__0[2];
        var m__1 = m__0[1];
        var e__1 = [0,v,d,r,e__0];
        var m__0 = m__1;
        var e__0 = e__1;
        continue;
      }
      return e__0;
    }
  }
  function compare(cmp, m1, m2) {
    function compare_aux(e1, e2) {
      var e1__0 = e1;
      var e2__0 = e2;
      for (; ; ) {
        if (e1__0) {
          if (e2__0) {
            var e2__1 = e2__0[4];
            var r2 = e2__0[3];
            var d2 = e2__0[2];
            var v2 = e2__0[1];
            var e1__1 = e1__0[4];
            var r1 = e1__0[3];
            var d1 = e1__0[2];
            var v1 = e1__0[1];
            var c = call2(Ord[1], v1, v2);
            if (0 === c) {
              var c__0 = call2(cmp, d1, d2);
              if (0 === c__0) {
                var e2__2 = cons_enum(r2, e2__1);
                var e1__2 = cons_enum(r1, e1__1);
                var e1__0 = e1__2;
                var e2__0 = e2__2;
                continue;
              }
              return c__0;
            }
            return c;
          }
          return 1;
        }
        return e2__0 ? -1 : 0;
      }
    }
    var s_ = cons_enum(m2, 0);
    return compare_aux(cons_enum(m1, 0), s_);
  }
  function equal(cmp, m1, m2) {
    function equal_aux(e1, e2) {
      var e1__0 = e1;
      var e2__0 = e2;
      for (; ; ) {
        if (e1__0) {
          if (e2__0) {
            var e2__1 = e2__0[4];
            var r2 = e2__0[3];
            var d2 = e2__0[2];
            var v2 = e2__0[1];
            var e1__1 = e1__0[4];
            var r1 = e1__0[3];
            var d1 = e1__0[2];
            var v1 = e1__0[1];
            var p_ = 0 === call2(Ord[1], v1, v2) ? 1 : 0;
            if (p_) {
              var q_ = call2(cmp, d1, d2);
              if (q_) {
                var e2__2 = cons_enum(r2, e2__1);
                var e1__2 = cons_enum(r1, e1__1);
                var e1__0 = e1__2;
                var e2__0 = e2__2;
                continue;
              }
              var r_ = q_;
            }
            else var r_ = p_;
            return r_;
          }
          return 0;
        }
        return e2__0 ? 0 : 1;
      }
    }
    var o_ = cons_enum(m2, 0);
    return equal_aux(cons_enum(m1, 0), o_);
  }
  function cardinal(param) {
    if (param) {
      var r = param[4];
      var l = param[1];
      var n_ = cardinal(r);
      return (cardinal(l) + 1 | 0) + n_ | 0;
    }
    return 0;
  }
  function bindings_aux(accu, param) {
    var accu__0 = accu;
    var param__0 = param;
    for (; ; ) {
      if (param__0) {
        var r = param__0[4];
        var d = param__0[3];
        var v = param__0[2];
        var param__1 = param__0[1];
        var accu__1 = [0,[0,v,d],bindings_aux(accu__0, r)];
        var accu__0 = accu__1;
        var param__0 = param__1;
        continue;
      }
      return accu__0;
    }
  }
  function bindings(s) {return bindings_aux(0, s);}
  function add_seq(i, m) {
    function m_(m, param) {
      var v = param[2];
      var k = param[1];
      return add(k, v, m);
    }
    return call3(Stdlib_seq[7], m_, m, i);
  }
  function of_seq(i) {return add_seq(i, empty);}
  function seq_of_enum(c, param) {
    if (c) {
      var rest = c[4];
      var t = c[3];
      var v = c[2];
      var k = c[1];
      var k_ = cons_enum(t, rest);
      return [0,[0,k,v],function(l_) {return seq_of_enum(k_, l_);}];
    }
    return 0;
  }
  function to_seq(m) {
    var i_ = cons_enum(m, 0);
    return function(j_) {return seq_of_enum(i_, j_);};
  }
  function to_seq_from(low, m) {
    function aux(low, m, c) {
      var m__0 = m;
      var c__0 = c;
      for (; ; ) {
        if (m__0) {
          var r = m__0[4];
          var d = m__0[3];
          var v = m__0[2];
          var l = m__0[1];
          var n = call2(Ord[1], v, low);
          if (0 === n) {return [0,v,d,r,c__0];}
          if (0 <= n) {
            var c__1 = [0,v,d,r,c__0];
            var m__0 = l;
            var c__0 = c__1;
            continue;
          }
          var m__0 = r;
          continue;
        }
        return c__0;
      }
    }
    var g_ = aux(low, m, 0);
    return function(h_) {return seq_of_enum(g_, h_);};
  }
  return [
    0,
    height,
    create,
    singleton,
    bal,
    empty,
    is_empty,
    add,
    find,
    find_first_aux,
    find_first,
    find_first_opt_aux,
    find_first_opt,
    find_last_aux,
    find_last,
    find_last_opt_aux,
    find_last_opt,
    find_opt,
    mem,
    min_binding,
    min_binding_opt,
    max_binding,
    max_binding_opt,
    remove_min_binding,
    remove,
    update,
    iter,
    map,
    mapi,
    fold,
    for_all,
    exists,
    add_min_binding,
    add_max_binding,
    join,
    concat,
    concat_or_join,
    split,
    merge,
    union,
    filter,
    partition,
    cons_enum,
    compare,
    equal,
    cardinal,
    bindings_aux,
    bindings,
    min_binding,
    min_binding_opt,
    add_seq,
    of_seq,
    seq_of_enum,
    to_seq,
    to_seq_from
  ];
}

var Stdlib_map = [
  0,
  function(d_) {
    var e_ = Make(d_);
    return [
      0,
      e_[5],
      e_[6],
      e_[18],
      e_[7],
      e_[25],
      e_[3],
      e_[24],
      e_[38],
      e_[39],
      e_[43],
      e_[44],
      e_[26],
      e_[29],
      e_[30],
      e_[31],
      e_[40],
      e_[41],
      e_[45],
      e_[47],
      e_[19],
      e_[20],
      e_[21],
      e_[22],
      e_[48],
      e_[49],
      e_[37],
      e_[8],
      e_[17],
      e_[10],
      e_[12],
      e_[14],
      e_[16],
      e_[27],
      e_[28],
      e_[53],
      e_[54],
      e_[50],
      e_[51]
    ];
  }
];

module.exports = Stdlib_map;

/*::type Exports = {
}*/
/** @type {{
}} */
module.exports = ((module.exports /*:: : any*/) /*:: :Exports */);

/* Hashing disabled */
