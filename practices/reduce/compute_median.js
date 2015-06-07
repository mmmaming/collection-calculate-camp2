'use strict';

function compute_median(collection) {
    var _ = require('../mylodash/array.js');
    return _.median(collection);

  // 在这里写入代码
  // for (var i = 0; i < collection.length; i ++) {
  //     var temp = 0;
  //     for(var j = i + 1; j < collection.length; j ++) {
  //         if (collection[i] < collection[j]) {
  //             temp = collection[j];
  //             collection[j] = collection[i];
  //             collection[i] = temp;
  //         }
  //     }
  // }
  //
  // if(collection.length % 2 != 0) {
  //     var i = collection.length/2;
  //     return collection[parseInt(i)];
  // }else{
  //     var j = collection.length/2;
  //     var k = collection.length/2 -1;
  //     return (collection[j]+collection[k])/2;
  // }
}

module.exports = compute_median;
