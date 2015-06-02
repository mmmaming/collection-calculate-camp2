'use strict';

function compute_average(collection) {
  //在这里写入代码
  // var sum = 0;
  // for(var i = 0;i < collection.length;i++) {
  //     sum += collection[i];
  // }
  // return sum/collection.length;
  var _ = require('../mylodash/array.js');
  var avg =  _.reduce(collection,function(a, b) {
      return a + b;
  });
  return avg/collection.length;
}

module.exports = compute_average;
