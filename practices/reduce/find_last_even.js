'use strict';

function find_last_even(collection) {
  //在这里写入代码
  //=========方法1============
  // for(var i = collection.length-1; i>= 0;i--) {
  //     if(collection[i] % 2 == 0) {
  //         return collection[i];
  //     }
  // }
  //=========方法2===========
  // var array = [];
  // for(var i = 0;i< collection.length;i++) {
  //     if(collection[i] % 2 == 0) {
  //         array.push(collection[i]);
  //
  //     }
  // }
  // return array[array.length-1];
  var _ = require('../mylodash/array.js');
  return _.last(collection,function(val) {
      return val % 2 == 0;
  })
}


module.exports = find_last_even;
