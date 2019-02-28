<?hh
// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * Nativeint.php
 */

namespace Rehack;

final class Nativeint {
  <<__Memoize>>
  public static function get() {
    $global_object = \Rehack\GlobalObject::get();
    $runtime = \Rehack\Runtime::get();
    /*
     * Soon, these will replace the `global_data->ModuleName`
     * pattern in the load() function.
     */
    $Sys = Sys::get();
    $Failure = Failure::get();
    Nativeint::load($global_object);
    $memoized = $runtime->caml_get_global_data()->Nativeint;
    return $memoized;
  }

  /**
   * Performs module load operation. May have side effects.
   */
  private static function load($joo_global_object) {
    

    $runtime = $joo_global_object->jsoo_runtime;
    $left_shift_32 = $runtime["left_shift_32"];
    $caml_new_string = $runtime["caml_new_string"];
    $caml_wrap_exception = $runtime["caml_wrap_exception"];
    $global_data = $runtime["caml_get_global_data"]();
    $cst_d = $caml_new_string("%d");
    $Failure = $global_data["Failure"];
    $Sys = $global_data["Sys"];
    $zero = 0;
    $one = 1;
    $minus_one = -1;
    $succ = function($n) {return $n + 1 | 0;};
    $pred = function($n) {return $n - 1 | 0;};
    $abs = function($n) use ($runtime) {
      return $runtime["caml_greaterequal"]($n, 0) ? $n : (- $n | 0);
    };
    $size = $Sys[10];
    $min_int = $left_shift_32(1, $size + -1 | 0);
    $max_int = $min_int - 1 | 0;
    $lognot = function($n) {return $n ^ -1;};
    $to_string = function($n) use ($cst_d,$runtime) {
      return $runtime["caml_format_int"]($cst_d, $n);
    };
    $of_string_opt = function($s) use ($Failure,$caml_wrap_exception,$runtime) {
      try {$eD = V(0, $runtime["caml_int_of_string"]($s));return $eD;}
      catch(\Throwable $eE) {
        $eE = $caml_wrap_exception($eE);
        if ($eE[1] === $Failure) {return 0;}
        throw $runtime["caml_wrap_thrown_exception_reraise"]($eE);
      }
    };
    $compare = function($x, $y) use ($runtime) {
      return $runtime["caml_int_compare"]($x, $y);
    };
    $equal = function($x, $y) use ($compare) {
      return 0 === $compare($x, $y) ? 1 : (0);
    };
    $Nativeint = V(
      0,
      $zero,
      $one,
      $minus_one,
      $succ,
      $pred,
      $abs,
      $size,
      $max_int,
      $min_int,
      $lognot,
      $of_string_opt,
      $to_string,
      $compare,
      $equal
    );
    
    $runtime["caml_register_global"](12, $Nativeint, "Nativeint");

  }
}