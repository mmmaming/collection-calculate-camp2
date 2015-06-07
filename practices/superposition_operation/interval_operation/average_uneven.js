'use strict';

function average_uneven(collection) {
    var _ = require('../../mylodash/array.js');
    var odd = _.filter(collection,function(n) {
        return n % 2 != 0;
    });
     var sum = _.reduce(odd,function(a, b) {
        return a + b;
    })
    return sum/odd.length;
  //在这里写入代码
  // var avg = 0;
  // var count = 0;
  // for(var i = 0;i < collection.length;i++) {
  //     if(collection[i] % 2 != 0) {
  //         avg += collection[i];
  //         count++;
  //     }
  // }
  // return avg/count;
}

module.exports = average_uneven;
