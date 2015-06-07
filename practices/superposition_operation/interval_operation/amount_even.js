'use strict';

function amount_even(collection) {
    var _ = require('../../mylodash/array.js');
    var even = _.filter(collection,function(n) {
        return n % 2 === 0;
    });
    return _.reduce(even,function(a, b) {
        return a + b;
    })
  //在这里写入代码
  // var sum = 0;
  // for(var i = 0;i < collection.length;i++) {
  //     if(collection[i] % 2 == 0) {
  //         sum += collection[i];
  //     }
  // }
  // return sum;

}

module.exports = amount_even;
