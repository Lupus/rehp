<?hh // strict
// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * @generated
 *
 */
namespace Rehack;

final class ArrayLabels {
  <<__Override, __Memoize>>
  public static function requireModule() : Vector<dynamic> {
    $joo_global_object = \Rehack\GlobalObject::get() as dynamic;
    
    $runtime = $joo_global_object->jsoo_runtime;
    $Array =  Array_::requireModule ();
    $make_float = $Array[1];
    $init = $Array[2];
    $make_matrix = $Array[3];
    $create_matrix = $Array[4];
    $append = $Array[5];
    $concat = $Array[6];
    $sub = $Array[7];
    $copy = $Array[8];
    $fill = $Array[9];
    $blit = $Array[10];
    $to_list = $Array[11];
    $of_list = $Array[12];
    $iter = $Array[13];
    $iteri = $Array[14];
    $map = $Array[15];
    $mapi = $Array[16];
    $fold_left = $Array[17];
    $fold_right = $Array[18];
    $iter2 = $Array[19];
    $map2 = $Array[20];
    $for_all = $Array[21];
    $exists = $Array[22];
    $mem = $Array[23];
    $memq = $Array[24];
    $sort = $Array[25];
    $stable_sort = $Array[26];
    $fast_sort = $Array[27];
    $Floatarray = $Array[28];
    $ArrayLabels = Vector{
      0,
      $init,
      $make_matrix,
      $create_matrix,
      $append,
      $concat,
      $sub,
      $copy,
      $fill,
      $blit,
      $to_list,
      $of_list,
      $iter,
      $map,
      $iteri,
      $mapi,
      $fold_left,
      $fold_right,
      $iter2,
      $map2,
      $exists,
      $for_all,
      $mem,
      $memq,
      $make_float,
      $sort,
      $stable_sort,
      $fast_sort,
      $Floatarray
    };
    
     return ($ArrayLabels);

  }
  public static function init(): dynamic {
    return static::callRehackFunction(static::requireModule()[1], varray[]);
  }
  public static function make_matrix(): dynamic {
    return static::callRehackFunction(static::requireModule()[2], varray[]);
  }
  public static function create_matrix(): dynamic {
    return static::callRehackFunction(static::requireModule()[3], varray[]);
  }
  public static function append(): dynamic {
    return static::callRehackFunction(static::requireModule()[4], varray[]);
  }
  public static function concat(): dynamic {
    return static::callRehackFunction(static::requireModule()[5], varray[]);
  }
  public static function sub(): dynamic {
    return static::callRehackFunction(static::requireModule()[6], varray[]);
  }
  public static function copy(): dynamic {
    return static::callRehackFunction(static::requireModule()[7], varray[]);
  }
  public static function fill(): dynamic {
    return static::callRehackFunction(static::requireModule()[8], varray[]);
  }
  public static function blit(): dynamic {
    return static::callRehackFunction(static::requireModule()[9], varray[]);
  }
  public static function to_list(): dynamic {
    return static::callRehackFunction(static::requireModule()[10], varray[]);
  }
  public static function of_list(): dynamic {
    return static::callRehackFunction(static::requireModule()[11], varray[]);
  }
  public static function iter(): dynamic {
    return static::callRehackFunction(static::requireModule()[12], varray[]);
  }
  public static function map(): dynamic {
    return static::callRehackFunction(static::requireModule()[13], varray[]);
  }
  public static function iteri(): dynamic {
    return static::callRehackFunction(static::requireModule()[14], varray[]);
  }
  public static function mapi(): dynamic {
    return static::callRehackFunction(static::requireModule()[15], varray[]);
  }
  public static function fold_left(): dynamic {
    return static::callRehackFunction(static::requireModule()[16], varray[]);
  }
  public static function fold_right(): dynamic {
    return static::callRehackFunction(static::requireModule()[17], varray[]);
  }
  public static function iter2(): dynamic {
    return static::callRehackFunction(static::requireModule()[18], varray[]);
  }
  public static function map2(): dynamic {
    return static::callRehackFunction(static::requireModule()[19], varray[]);
  }
  public static function exists(): dynamic {
    return static::callRehackFunction(static::requireModule()[20], varray[]);
  }
  public static function for_all(): dynamic {
    return static::callRehackFunction(static::requireModule()[21], varray[]);
  }
  public static function mem(): dynamic {
    return static::callRehackFunction(static::requireModule()[22], varray[]);
  }
  public static function memq(): dynamic {
    return static::callRehackFunction(static::requireModule()[23], varray[]);
  }
  public static function _make_float_(): dynamic {
    return static::callRehackFunction(static::requireModule()[24], varray[]);
  }
  public static function sort(): dynamic {
    return static::callRehackFunction(static::requireModule()[25], varray[]);
  }
  public static function stable_sort(): dynamic {
    return static::callRehackFunction(static::requireModule()[26], varray[]);
  }
  public static function fast_sort(): dynamic {
    return static::callRehackFunction(static::requireModule()[27], varray[]);
  }
  public static function Floatarray(): dynamic {
    return static::callRehackFunction(static::requireModule()[28], varray[]);
  }

}
/* Hashing disabled */
