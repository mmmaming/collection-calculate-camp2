'use strict';

function choose_even(collection) {
    // var array = [];
    // function even(){
    //     for(var i = 0;i < collection.length;i++) {
    //         if(collection[i] % 2 == 0) {
    //             array.push(collection[i]);
    //         }
    //     }
    // }
    // even();
    // return array;
    // ----=-=-=-=================================
    // function foreach(array,fun){
    //     for(var i = 0;i < array.length;i++) {
    //         fun(array[i],i);
    //     }
    // }
    // function filter(collection,fun) {
    //     var result = [];
    //     foreach(collection,function(q) {
    //             if(fun(q)){
    //                 result.push(q);
    //             }
    //     });
    //     return result;
    // }
    //
    // return filter(collection,function(n) {
    //
    //     return n % 2 == 0;
    // });
  //------------------------------------------
  //   function foreach(array,fun){
  //      for(var i = 0;i < array.length;i++) {
  //          fun(array[i],i);
  //      }
  //  }
  //  function remove(collection,fun) {
  //      var result = [];
  //      foreach(collection,function(q) {
  //              if(!fun(q)){
  //                  result.push(q);
  //              }
  //      });
  //      return result;
  //  }
  //
  //  return remove(collection,function(n) {
  //     if (n % 2 == 0) {
  //         return true;
  //     }
  // });

  var _ = require('../mylodash/array.js');
  return _.filter(collection, function(n) {
      return n % 2 === 0;
  });




}


module.exports = choose_even;
