<?hh // strict
// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * @generated
 *
 */
namespace Rehack;

final class Stdlib__buffer {
  <<__Override, __Memoize>>
  public static function get() : Vector<dynamic> {
    
    $runtime = (\Rehack\GlobalObject::get() as dynamic)->jsoo_runtime;
    $caml_bswap16 = $runtime["caml_bswap16"];
    $caml_bytes_get = $runtime["caml_bytes_get"];
    $caml_bytes_unsafe_set = $runtime["caml_bytes_unsafe_set"];
    $call1 = $runtime["caml_call1"];
    $call2 = $runtime["caml_call2"];
    $call3 = $runtime["caml_call3"];
    $call4 = $runtime["caml_call4"];
    $call5 = $runtime["caml_call5"];
    $caml_create_bytes = $runtime["caml_create_bytes"];
    $caml_int32_bswap = $runtime["caml_int32_bswap"];
    $caml_int64_bswap = $runtime["caml_int64_bswap"];
    $caml_ml_bytes_length = $runtime["caml_ml_bytes_length"];
    $caml_ml_string_length = $runtime["caml_ml_string_length"];
    $string = $runtime["caml_new_string"];
    $caml_string_get = $runtime["caml_string_get"];
    $caml_wrap_thrown_exception = $runtime["caml_wrap_thrown_exception"];
    $unsigned_right_shift_32 = $runtime["unsigned_right_shift_32"];
    $cst_Buffer_truncate = $string("Buffer.truncate");
    $cst_Buffer_add_channel = $string("Buffer.add_channel");
    $cst_Buffer_add_substring_add_subbytes = $string(
      "Buffer.add_substring/add_subbytes"
    );
    $cst_Buffer_add_cannot_grow_buffer = $string(
      "Buffer.add: cannot grow buffer"
    );
    $cst_Buffer_nth = $string("Buffer.nth");
    $cst_Buffer_blit = $string("Buffer.blit");
    $cst_Buffer_sub = $string("Buffer.sub");
    $Stdlib = Stdlib::get();
    $Stdlib_sys = Stdlib__sys::get();
    $Stdlib_seq = Stdlib__seq::get();
    $Stdlib_string = Stdlib__string::get();
    $Assert_failure = Assert_failure::get();
    $Stdlib_bytes = Stdlib__bytes::get();
    $Stdlib_uchar = Stdlib__uchar::get();
    $g_ = Vector{0, $string("buffer.ml"), 205, 9} as dynamic;
    $f_ = Vector{0, $string("buffer.ml"), 141, 19} as dynamic;
    $e_ = Vector{0, $string("buffer.ml"), 159, 8} as dynamic;
    $d_ = Vector{0, $string("buffer.ml"), 120, 19} as dynamic;
    $c_ = Vector{0, $string("buffer.ml"), 138, 8} as dynamic;
    $b_ = Vector{0, $string("buffer.ml"), 84, 19} as dynamic;
    $a_ = Vector{0, $string("buffer.ml"), 117, 8} as dynamic;
    $create = (dynamic $n) : dynamic ==> {
      $n__0 = 1 <= $n ? $n : (1);
      $n__1 = $Stdlib_sys[13] < $n__0 ? $Stdlib_sys[13] : ($n__0);
      $s = $caml_create_bytes($n__1);
      return Vector{0, $s, 0, $n__1, $s};
    };
    $contents = (dynamic $b) : dynamic ==> {
      return $call3($Stdlib_bytes[8], $b[1], 0, $b[2]);
    };
    $to_bytes = (dynamic $b) : dynamic ==> {
      return $call3($Stdlib_bytes[7], $b[1], 0, $b[2]);
    };
    $sub = (dynamic $b, dynamic $ofs, dynamic $len) : dynamic ==> {
      if (0 <= $ofs) {
        if (0 <= $len) {
          if (! ((int) ($b[2] - $len) < $ofs)) {
            return $call3($Stdlib_bytes[8], $b[1], $ofs, $len);
          }
        }
      }
      return $call1($Stdlib[1], $cst_Buffer_sub);
    };
    $blit = 
    (dynamic $src, dynamic $srcoff, dynamic $dst, dynamic $dstoff, dynamic $len) : dynamic ==> {
      if (0 <= $len) {
        if (0 <= $srcoff) {
          if (! ((int) ($src[2] - $len) < $srcoff)) {
            if (0 <= $dstoff) {
              if (! ((int) ($caml_ml_bytes_length($dst) - $len) < $dstoff)) {
                return $runtime["caml_blit_bytes"](
                  $src[1],
                  $srcoff,
                  $dst,
                  $dstoff,
                  $len
                );
              }
            }
          }
        }
      }
      return $call1($Stdlib[1], $cst_Buffer_blit);
    };
    $nth = (dynamic $b, dynamic $ofs) : dynamic ==> {
      if (0 <= $ofs) {
        if (! ($b[2] <= $ofs)) {
          return $runtime["caml_bytes_unsafe_get"]($b[1], $ofs);
        }
      }
      return $call1($Stdlib[1], $cst_Buffer_nth);
    };
    $length = (dynamic $b) : dynamic ==> {return $b[2];};
    $clear = (dynamic $b) : dynamic ==> {$b[2] = 0;return 0;};
    $reset = (dynamic $b) : dynamic ==> {
      $b[2] = 0;
      $b[1] = $b[4];
      $b[3] = $caml_ml_bytes_length($b[1]);
      return 0;
    };
    $resize = (dynamic $b, dynamic $more) : dynamic ==> {
      $new_buffer = null as dynamic;
      $len = $b[3];
      $new_len = Vector{0, $len} as dynamic;
      for (;;) {
        if ($new_len[1] < (int) ($b[2] + $more)) {
          $new_len[1] = (int) (2 * $new_len[1]);
          continue;
        }
        if ($Stdlib_sys[13] < $new_len[1]) {
          if ((int) ($b[2] + $more) <= $Stdlib_sys[13]) {$new_len[1] = $Stdlib_sys[13];}
          else {$call1($Stdlib[2], $cst_Buffer_add_cannot_grow_buffer);}
        }
        $new_buffer = $caml_create_bytes($new_len[1]);
        $call5($Stdlib_bytes[11], $b[1], 0, $new_buffer, 0, $b[2]);
        $b[1] = $new_buffer;
        $b[3] = $new_len[1];
        return 0;
      }
    };
    $add_char = (dynamic $b, dynamic $c) : dynamic ==> {
      $pos = $b[2];
      if ($b[3] <= $pos) {$resize($b, 1);}
      $caml_bytes_unsafe_set($b[1], $pos, $c);
      $b[2] = (int) ($pos + 1);
      return 0;
    };
    $add_utf_8_uchar = (dynamic $b, dynamic $u) : dynamic ==> {
      $pos = null as dynamic;
      $pos__0 = null as dynamic;
      $pos__1 = null as dynamic;
      $u__0 = $call1($Stdlib_uchar[10], $u);
      if (0 <= $u__0) {
        if (127 < $u__0) {
          if (2047 < $u__0) {
            if (65535 < $u__0) {
              if (1114111 < $u__0) {
                throw $caml_wrap_thrown_exception(
                        Vector{0, $Assert_failure, $a_}
                      ) as \Throwable;
              }
              $pos = $b[2];
              if ($b[3] < (int) ($pos + 4)) {$resize($b, 4);}
              $caml_bytes_unsafe_set(
                $b[1],
                $pos,
                240 | (int) $unsigned_right_shift_32($u__0, 18)
              );
              $caml_bytes_unsafe_set(
                $b[1],
                (int)
                ($pos + 1),
                128 | (int) $unsigned_right_shift_32($u__0, 12) & 63
              );
              $caml_bytes_unsafe_set(
                $b[1],
                (int)
                ($pos + 2),
                128 | (int) $unsigned_right_shift_32($u__0, 6) & 63
              );
              $caml_bytes_unsafe_set($b[1], (int) ($pos + 3), 128 | $u__0 & 63
              );
              $b[2] = (int) ($pos + 4);
              return 0;
            }
            $pos__0 = $b[2];
            if ($b[3] < (int) ($pos__0 + 3)) {$resize($b, 3);}
            $caml_bytes_unsafe_set(
              $b[1],
              $pos__0,
              224 | (int) $unsigned_right_shift_32($u__0, 12)
            );
            $caml_bytes_unsafe_set(
              $b[1],
              (int)
              ($pos__0 + 1),
              128 | (int) $unsigned_right_shift_32($u__0, 6) & 63
            );
            $caml_bytes_unsafe_set(
              $b[1],
              (int)
              ($pos__0 + 2),
              128 | $u__0 & 63
            );
            $b[2] = (int) ($pos__0 + 3);
            return 0;
          }
          $pos__1 = $b[2];
          if ($b[3] < (int) ($pos__1 + 2)) {$resize($b, 2);}
          $caml_bytes_unsafe_set(
            $b[1],
            $pos__1,
            192 | (int) $unsigned_right_shift_32($u__0, 6)
          );
          $caml_bytes_unsafe_set($b[1], (int) ($pos__1 + 1), 128 | $u__0 & 63);
          $b[2] = (int) ($pos__1 + 2);
          return 0;
        }
        return $add_char($b, $u__0);
      }
      throw $caml_wrap_thrown_exception(Vector{0, $Assert_failure, $b_}) as \Throwable;
    };
    $add_utf_16be_uchar = (dynamic $b, dynamic $u) : dynamic ==> {
      $u__1 = null as dynamic;
      $hi = null as dynamic;
      $lo = null as dynamic;
      $pos = null as dynamic;
      $pos__0 = null as dynamic;
      $u__0 = $call1($Stdlib_uchar[10], $u);
      if (0 <= $u__0) {
        if (65535 < $u__0) {
          if (1114111 < $u__0) {
            throw $caml_wrap_thrown_exception(Vector{0, $Assert_failure, $c_}) as \Throwable;
          }
          $u__1 = (int) ($u__0 + -65536) as dynamic;
          $hi = 55296 | (int) $unsigned_right_shift_32($u__1, 10);
          $lo = 56320 | $u__1 & 1023;
          $pos = $b[2];
          if ($b[3] < (int) ($pos + 4)) {$resize($b, 4);}
          $caml_bytes_unsafe_set(
            $b[1],
            $pos,
            (int)
            $unsigned_right_shift_32($hi, 8)
          );
          $caml_bytes_unsafe_set($b[1], (int) ($pos + 1), $hi & 255);
          $caml_bytes_unsafe_set(
            $b[1],
            (int)
            ($pos + 2),
            (int)
            $unsigned_right_shift_32($lo, 8)
          );
          $caml_bytes_unsafe_set($b[1], (int) ($pos + 3), $lo & 255);
          $b[2] = (int) ($pos + 4);
          return 0;
        }
        $pos__0 = $b[2];
        if ($b[3] < (int) ($pos__0 + 2)) {$resize($b, 2);}
        $caml_bytes_unsafe_set(
          $b[1],
          $pos__0,
          (int)
          $unsigned_right_shift_32($u__0, 8)
        );
        $caml_bytes_unsafe_set($b[1], (int) ($pos__0 + 1), $u__0 & 255);
        $b[2] = (int) ($pos__0 + 2);
        return 0;
      }
      throw $caml_wrap_thrown_exception(Vector{0, $Assert_failure, $d_}) as \Throwable;
    };
    $add_utf_16le_uchar = (dynamic $b, dynamic $u) : dynamic ==> {
      $u__1 = null as dynamic;
      $hi = null as dynamic;
      $lo = null as dynamic;
      $pos = null as dynamic;
      $pos__0 = null as dynamic;
      $u__0 = $call1($Stdlib_uchar[10], $u);
      if (0 <= $u__0) {
        if (65535 < $u__0) {
          if (1114111 < $u__0) {
            throw $caml_wrap_thrown_exception(Vector{0, $Assert_failure, $e_}) as \Throwable;
          }
          $u__1 = (int) ($u__0 + -65536) as dynamic;
          $hi = 55296 | (int) $unsigned_right_shift_32($u__1, 10);
          $lo = 56320 | $u__1 & 1023;
          $pos = $b[2];
          if ($b[3] < (int) ($pos + 4)) {$resize($b, 4);}
          $caml_bytes_unsafe_set($b[1], $pos, $hi & 255);
          $caml_bytes_unsafe_set(
            $b[1],
            (int)
            ($pos + 1),
            (int)
            $unsigned_right_shift_32($hi, 8)
          );
          $caml_bytes_unsafe_set($b[1], (int) ($pos + 2), $lo & 255);
          $caml_bytes_unsafe_set(
            $b[1],
            (int)
            ($pos + 3),
            (int)
            $unsigned_right_shift_32($lo, 8)
          );
          $b[2] = (int) ($pos + 4);
          return 0;
        }
        $pos__0 = $b[2];
        if ($b[3] < (int) ($pos__0 + 2)) {$resize($b, 2);}
        $caml_bytes_unsafe_set($b[1], $pos__0, $u__0 & 255);
        $caml_bytes_unsafe_set(
          $b[1],
          (int)
          ($pos__0 + 1),
          (int)
          $unsigned_right_shift_32($u__0, 8)
        );
        $b[2] = (int) ($pos__0 + 2);
        return 0;
      }
      throw $caml_wrap_thrown_exception(Vector{0, $Assert_failure, $f_}) as \Throwable;
    };
    $add_substring = (dynamic $b, dynamic $s, dynamic $offset, dynamic $len) : dynamic ==> {
      $z_ = null as dynamic;
      $A_ = null as dynamic;
      $y_ = $offset < 0 ? 1 : (0);
      if ($y_) {
        $z_ = $y_;
      }
      else {
        $A_ = $len < 0 ? 1 : (0);
        $z_ =
          $A_
            ? $A_
            : ((int) ($caml_ml_string_length($s) - $len) < $offset ? 1 : (0));
      }
      if ($z_) {$call1($Stdlib[1], $cst_Buffer_add_substring_add_subbytes);}
      $new_position = (int) ($b[2] + $len) as dynamic;
      if ($b[3] < $new_position) {$resize($b, $len);}
      $call5($Stdlib_bytes[12], $s, $offset, $b[1], $b[2], $len);
      $b[2] = $new_position;
      return 0;
    };
    $add_subbytes = (dynamic $b, dynamic $s, dynamic $offset, dynamic $len) : dynamic ==> {
      return $add_substring($b, $call1($Stdlib_bytes[42], $s), $offset, $len);
    };
    $add_string = (dynamic $b, dynamic $s) : dynamic ==> {
      $len = $caml_ml_string_length($s);
      $new_position = (int) ($b[2] + $len) as dynamic;
      if ($b[3] < $new_position) {$resize($b, $len);}
      $call5($Stdlib_bytes[12], $s, 0, $b[1], $b[2], $len);
      $b[2] = $new_position;
      return 0;
    };
    $add_bytes = (dynamic $b, dynamic $s) : dynamic ==> {
      return $add_string($b, $call1($Stdlib_bytes[42], $s));
    };
    $add_buffer = (dynamic $b, dynamic $bs) : dynamic ==> {
      return $add_subbytes($b, $bs[1], 0, $bs[2]);
    };
    $add_channel_rec = (dynamic $b, dynamic $ic, dynamic $len) : dynamic ==> {
      $x_ = null as dynamic;
      $n = null as dynamic;
      $len__1 = null as dynamic;
      $len__0 = $len;
      for (;;) {
        $x_ = 0 < $len__0 ? 1 : (0);
        if ($x_) {
          $n = $call4($Stdlib[84], $ic, $b[1], $b[2], $len__0);
          $b[2] = (int) ($b[2] + $n);
          if (0 === $n) {
            throw $caml_wrap_thrown_exception($Stdlib[12]) as \Throwable;
          }
          $len__1 = (int) ($len__0 - $n) as dynamic;
          $len__0 = $len__1;
          continue;
        }
        return $x_;
      }
    };
    $add_channel = (dynamic $b, dynamic $ic, dynamic $len) : dynamic ==> {
      $v_ = $len < 0 ? 1 : (0);
      $w_ = $v_ ? $v_ : ($Stdlib_sys[13] < $len ? 1 : (0));
      if ($w_) {$call1($Stdlib[1], $cst_Buffer_add_channel);}
      if ($b[3] < (int) ($b[2] + $len)) {$resize($b, $len);}
      return $add_channel_rec($b, $ic, $len);
    };
    $output_buffer = (dynamic $oc, dynamic $b) : dynamic ==> {
      return $call4($Stdlib[68], $oc, $b[1], 0, $b[2]);
    };
    $closing = (dynamic $param) : dynamic ==> {
      if (40 === $param) {return 41;}
      if (123 === $param) {return 125;}
      throw $caml_wrap_thrown_exception(Vector{0, $Assert_failure, $g_}) as \Throwable;
    };
    $advance_to_closing = 
    (dynamic $opening, dynamic $closing, dynamic $k, dynamic $s, dynamic $start) : dynamic ==> {
      $advance = (dynamic $k, dynamic $i, dynamic $lim) : dynamic ==> {
        $i__1 = null as dynamic;
        $k__1 = null as dynamic;
        $i__2 = null as dynamic;
        $k__2 = null as dynamic;
        $i__3 = null as dynamic;
        $k__0 = $k;
        $i__0 = $i;
        for (;;) {
          if ($lim <= $i__0) {
            throw $caml_wrap_thrown_exception($Stdlib[8]) as \Throwable;
          }
          if ($caml_string_get($s, $i__0) === $opening) {
            $i__1 = (int) ($i__0 + 1) as dynamic;
            $k__1 = (int) ($k__0 + 1) as dynamic;
            $k__0 = $k__1;
            $i__0 = $i__1;
            continue;
          }
          if ($caml_string_get($s, $i__0) === $closing) {
            if (0 === $k__0) {return $i__0;}
            $i__2 = (int) ($i__0 + 1) as dynamic;
            $k__2 = (int) ($k__0 + -1) as dynamic;
            $k__0 = $k__2;
            $i__0 = $i__2;
            continue;
          }
          $i__3 = (int) ($i__0 + 1) as dynamic;
          $i__0 = $i__3;
          continue;
        }
      };
      return $advance($k, $start, $caml_ml_string_length($s));
    };
    $advance_to_non_alpha = (dynamic $s, dynamic $start) : dynamic ==> {
      $advance = (dynamic $i, dynamic $lim) : dynamic ==> {
        $match = null as dynamic;
        $i__1 = null as dynamic;
        $switch__0 = null as dynamic;
        $i__0 = $i;
        for (;;) {
          if ($lim <= $i__0) {return $lim;}
          $match = $caml_string_get($s, $i__0);
          $switch__0 =
            91 <= $match
              ? 97 <= $match
               ? 123 <= $match ? 0 : (1)
               : (95 === $match ? 1 : (0))
              : (58 <= $match
               ? 65 <= $match ? 1 : (0)
               : (48 <= $match ? 1 : (0)));
          if ($switch__0) {
            $i__1 = (int) ($i__0 + 1) as dynamic;
            $i__0 = $i__1;
            continue;
          }
          return $i__0;
        }
      };
      return $advance($start, $caml_ml_string_length($s));
    };
    $find_ident = (dynamic $s, dynamic $start, dynamic $lim) : dynamic ==> {
      $stop__0 = null as dynamic;
      if ($lim <= $start) {
        throw $caml_wrap_thrown_exception($Stdlib[8]) as \Throwable;
      }
      $c = $caml_string_get($s, $start);
      if (40 !== $c) {
        if (123 !== $c) {
          $stop__0 = $advance_to_non_alpha($s, (int) ($start + 1));
          return Vector{
            0,
            $call3($Stdlib_string[4], $s, $start, (int) ($stop__0 - $start)),
            $stop__0
          };
        }
      }
      $new_start = (int) ($start + 1) as dynamic;
      $stop = $advance_to_closing($c, $closing($c), 0, $s, $new_start);
      return Vector{
        0,
        $call3(
          $Stdlib_string[4],
          $s,
          $new_start,
          (int)
          ((int) ($stop - $start) + -1)
        ),
        (int)
        ($stop + 1)
      };
    };
    $add_substitute = (dynamic $b, dynamic $f, dynamic $s) : dynamic ==> {
      $lim = $caml_ml_string_length($s);
      $subst = (dynamic $previous, dynamic $i) : dynamic ==> {
        $current = null as dynamic;
        $i__1 = null as dynamic;
        $j = null as dynamic;
        $match = null as dynamic;
        $i__2 = null as dynamic;
        $ident = null as dynamic;
        $i__3 = null as dynamic;
        $i__4 = null as dynamic;
        $i__5 = null as dynamic;
        $u_ = null as dynamic;
        $previous__0 = $previous;
        $i__0 = $i;
        for (;;) {
          if ($i__0 < $lim) {
            $current = $caml_string_get($s, $i__0);
            if (36 === $current) {
              if (92 === $previous__0) {
                $add_char($b, $current);
                $i__1 = (int) ($i__0 + 1) as dynamic;
                $previous__0 = 32 as dynamic;
                $i__0 = $i__1;
                continue;
              }
              $j = (int) ($i__0 + 1) as dynamic;
              $match = $find_ident($s, $j, $lim);
              $i__2 = $match[2];
              $ident = $match[1];
              $add_string($b, $call1($f, $ident));
              $previous__0 = 32 as dynamic;
              $i__0 = $i__2;
              continue;
            }
            if (92 === $previous__0) {
              $add_char($b, 92);
              $add_char($b, $current);
              $i__3 = (int) ($i__0 + 1) as dynamic;
              $previous__0 = 32 as dynamic;
              $i__0 = $i__3;
              continue;
            }
            if (92 === $current) {
              $i__4 = (int) ($i__0 + 1) as dynamic;
              $previous__0 = $current;
              $i__0 = $i__4;
              continue;
            }
            $add_char($b, $current);
            $i__5 = (int) ($i__0 + 1) as dynamic;
            $previous__0 = $current;
            $i__0 = $i__5;
            continue;
          }
          $u_ = 92 === $previous__0 ? 1 : (0);
          return $u_ ? $add_char($b, $previous__0) : ($u_);
        }
      };
      return $subst(32, 0);
    };
    $truncate = (dynamic $b, dynamic $len) : dynamic ==> {
      if (0 <= $len) {if (! ($length($b) < $len)) {$b[2] = $len;return 0;}}
      return $call1($Stdlib[1], $cst_Buffer_truncate);
    };
    $to_seq = (dynamic $b) : dynamic ==> {
      $aux = new Ref();
      $aux->contents = (dynamic $i, dynamic $param) : dynamic ==> {
        if ($b[2] <= $i) {return 0;}
        $x = $caml_bytes_get($b[1], $i);
        $s_ = (int) ($i + 1) as dynamic;
        return Vector{
          0,
          $x,
          (dynamic $t_) : dynamic ==> {return $aux->contents($s_, $t_);}
        };
      };
      $q_ = 0 as dynamic;
      return (dynamic $r_) : dynamic ==> {return $aux->contents($q_, $r_);};
    };
    $to_seqi = (dynamic $b) : dynamic ==> {
      $aux = new Ref();
      $aux->contents = (dynamic $i, dynamic $param) : dynamic ==> {
        if ($b[2] <= $i) {return 0;}
        $x = $caml_bytes_get($b[1], $i);
        $o_ = (int) ($i + 1) as dynamic;
        return Vector{
          0,
          Vector{0, $i, $x},
          (dynamic $p_) : dynamic ==> {return $aux->contents($o_, $p_);}
        };
      };
      $m_ = 0 as dynamic;
      return (dynamic $n_) : dynamic ==> {return $aux->contents($m_, $n_);};
    };
    $add_seq = (dynamic $b, dynamic $seq) : dynamic ==> {
      $k_ = (dynamic $l_) : dynamic ==> {return $add_char($b, $l_);};
      return $call2($Stdlib_seq[8], $k_, $seq);
    };
    $of_seq = (dynamic $i) : dynamic ==> {
      $b = $create(32);
      $add_seq($b, $i);
      return $b;
    };
    $add_int8 = (dynamic $b, dynamic $x) : dynamic ==> {
      $new_position = (int) ($b[2] + 1) as dynamic;
      if ($b[3] < $new_position) {$resize($b, 1);}
      $caml_bytes_unsafe_set($b[1], $b[2], $x);
      $b[2] = $new_position;
      return 0;
    };
    $add_int16_ne = (dynamic $b, dynamic $x) : dynamic ==> {
      $new_position = (int) ($b[2] + 2) as dynamic;
      if ($b[3] < $new_position) {$resize($b, 2);}
      $runtime["caml_bytes_set16"]($b[1], $b[2], $x);
      $b[2] = $new_position;
      return 0;
    };
    $add_int32_ne = (dynamic $b, dynamic $x) : dynamic ==> {
      $new_position = (int) ($b[2] + 4) as dynamic;
      if ($b[3] < $new_position) {$resize($b, 4);}
      $runtime["caml_bytes_set32"]($b[1], $b[2], $x);
      $b[2] = $new_position;
      return 0;
    };
    $add_int64_ne = (dynamic $b, dynamic $x) : dynamic ==> {
      $new_position = (int) ($b[2] + 8) as dynamic;
      if ($b[3] < $new_position) {$resize($b, 8);}
      $runtime["caml_bytes_set64"]($b[1], $b[2], $x);
      $b[2] = $new_position;
      return 0;
    };
    $add_int16_le = (dynamic $b, dynamic $x) : dynamic ==> {
      $j_ = $Stdlib_sys[12] ? $caml_bswap16($x) : ($x);
      return $add_int16_ne($b, $j_);
    };
    $add_int16_be = (dynamic $b, dynamic $x) : dynamic ==> {
      $x__0 = $Stdlib_sys[12] ? $x : ($caml_bswap16($x));
      return $add_int16_ne($b, $x__0);
    };
    $add_int32_le = (dynamic $b, dynamic $x) : dynamic ==> {
      $i_ = $Stdlib_sys[12] ? $caml_int32_bswap($x) : ($x);
      return $add_int32_ne($b, $i_);
    };
    $add_int32_be = (dynamic $b, dynamic $x) : dynamic ==> {
      $x__0 = $Stdlib_sys[12] ? $x : ($caml_int32_bswap($x));
      return $add_int32_ne($b, $x__0);
    };
    $add_int64_le = (dynamic $b, dynamic $x) : dynamic ==> {
      $h_ = $Stdlib_sys[12] ? $caml_int64_bswap($x) : ($x);
      return $add_int64_ne($b, $h_);
    };
    $add_int64_be = (dynamic $b, dynamic $x) : dynamic ==> {
      $x__0 = $Stdlib_sys[12] ? $x : ($caml_int64_bswap($x));
      return $add_int64_ne($b, $x__0);
    };
    $Stdlib_buffer = Vector{
      0,
      $create,
      $contents,
      $to_bytes,
      $sub,
      $blit,
      $nth,
      $length,
      $clear,
      $reset,
      $add_char,
      $add_utf_8_uchar,
      $add_utf_16le_uchar,
      $add_utf_16be_uchar,
      $add_string,
      $add_bytes,
      $add_substring,
      $add_subbytes,
      $add_substitute,
      $add_buffer,
      $add_channel,
      $output_buffer,
      $truncate,
      $to_seq,
      $to_seqi,
      $add_seq,
      $of_seq,
      $add_int8,
      $add_int8,
      $add_int16_ne,
      $add_int16_be,
      $add_int16_le,
      $add_int16_ne,
      $add_int16_be,
      $add_int16_le,
      $add_int32_ne,
      $add_int32_be,
      $add_int32_le,
      $add_int64_ne,
      $add_int64_be,
      $add_int64_le
    } as dynamic;
    
    return($Stdlib_buffer);

  }
  public static function create(dynamic $n): dynamic {
    return static::syncCall(__FUNCTION__, 1, $n);
  }
  public static function contents(dynamic $b): dynamic {
    return static::syncCall(__FUNCTION__, 2, $b);
  }
  public static function to_bytes(dynamic $b): dynamic {
    return static::syncCall(__FUNCTION__, 3, $b);
  }
  public static function sub(dynamic $b, dynamic $ofs, dynamic $len): dynamic {
    return static::syncCall(__FUNCTION__, 4, $b, $ofs, $len);
  }
  public static function blit(dynamic $src, dynamic $srcoff, dynamic $dst, dynamic $dstoff, dynamic $len): dynamic {
    return static::syncCall(__FUNCTION__, 5, $src, $srcoff, $dst, $dstoff, $len);
  }
  public static function nth(dynamic $b, dynamic $ofs): dynamic {
    return static::syncCall(__FUNCTION__, 6, $b, $ofs);
  }
  public static function length(dynamic $b): dynamic {
    return static::syncCall(__FUNCTION__, 7, $b);
  }
  public static function clear(dynamic $b): dynamic {
    return static::syncCall(__FUNCTION__, 8, $b);
  }
  public static function reset(dynamic $b): dynamic {
    return static::syncCall(__FUNCTION__, 9, $b);
  }
  public static function add_char(dynamic $b, dynamic $c): dynamic {
    return static::syncCall(__FUNCTION__, 10, $b, $c);
  }
  public static function add_utf_8_uchar(dynamic $b, dynamic $u): dynamic {
    return static::syncCall(__FUNCTION__, 11, $b, $u);
  }
  public static function add_utf_16le_uchar(dynamic $b, dynamic $u): dynamic {
    return static::syncCall(__FUNCTION__, 12, $b, $u);
  }
  public static function add_utf_16be_uchar(dynamic $b, dynamic $u): dynamic {
    return static::syncCall(__FUNCTION__, 13, $b, $u);
  }
  public static function add_string(dynamic $b, dynamic $s): dynamic {
    return static::syncCall(__FUNCTION__, 14, $b, $s);
  }
  public static function add_bytes(dynamic $b, dynamic $s): dynamic {
    return static::syncCall(__FUNCTION__, 15, $b, $s);
  }
  public static function add_substring(dynamic $b, dynamic $s, dynamic $offset, dynamic $len): dynamic {
    return static::syncCall(__FUNCTION__, 16, $b, $s, $offset, $len);
  }
  public static function add_subbytes(dynamic $b, dynamic $s, dynamic $offset, dynamic $len): dynamic {
    return static::syncCall(__FUNCTION__, 17, $b, $s, $offset, $len);
  }
  public static function add_substitute(dynamic $b, dynamic $f, dynamic $s): dynamic {
    return static::syncCall(__FUNCTION__, 18, $b, $f, $s);
  }
  public static function add_buffer(dynamic $b, dynamic $bs): dynamic {
    return static::syncCall(__FUNCTION__, 19, $b, $bs);
  }
  public static function add_channel(dynamic $b, dynamic $ic, dynamic $len): dynamic {
    return static::syncCall(__FUNCTION__, 20, $b, $ic, $len);
  }
  public static function output_buffer(dynamic $oc, dynamic $b): dynamic {
    return static::syncCall(__FUNCTION__, 21, $oc, $b);
  }
  public static function truncate(dynamic $b, dynamic $len): dynamic {
    return static::syncCall(__FUNCTION__, 22, $b, $len);
  }
  public static function to_seq(dynamic $b): dynamic {
    return static::syncCall(__FUNCTION__, 23, $b);
  }
  public static function to_seqi(dynamic $b): dynamic {
    return static::syncCall(__FUNCTION__, 24, $b);
  }
  public static function add_seq(dynamic $b, dynamic $seq): dynamic {
    return static::syncCall(__FUNCTION__, 25, $b, $seq);
  }
  public static function of_seq(dynamic $i): dynamic {
    return static::syncCall(__FUNCTION__, 26, $i);
  }
  public static function add_int8(dynamic $b, dynamic $x): dynamic {
    return static::syncCall(__FUNCTION__, 27, $b, $x);
  }
  public static function add_int16_ne(dynamic $b, dynamic $x): dynamic {
    return static::syncCall(__FUNCTION__, 29, $b, $x);
  }
  public static function add_int16_be(dynamic $b, dynamic $x): dynamic {
    return static::syncCall(__FUNCTION__, 30, $b, $x);
  }
  public static function add_int16_le(dynamic $b, dynamic $x): dynamic {
    return static::syncCall(__FUNCTION__, 31, $b, $x);
  }
  public static function add_int32_ne(dynamic $b, dynamic $x): dynamic {
    return static::syncCall(__FUNCTION__, 35, $b, $x);
  }
  public static function add_int32_be(dynamic $b, dynamic $x): dynamic {
    return static::syncCall(__FUNCTION__, 36, $b, $x);
  }
  public static function add_int32_le(dynamic $b, dynamic $x): dynamic {
    return static::syncCall(__FUNCTION__, 37, $b, $x);
  }
  public static function add_int64_ne(dynamic $b, dynamic $x): dynamic {
    return static::syncCall(__FUNCTION__, 38, $b, $x);
  }
  public static function add_int64_be(dynamic $b, dynamic $x): dynamic {
    return static::syncCall(__FUNCTION__, 39, $b, $x);
  }
  public static function add_int64_le(dynamic $b, dynamic $x): dynamic {
    return static::syncCall(__FUNCTION__, 40, $b, $x);
  }

}
/* Hashing disabled */
