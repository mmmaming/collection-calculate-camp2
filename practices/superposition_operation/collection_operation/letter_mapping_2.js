'use strict';

function average_to_letter(collection) {

    var _ = require('../../mylodash/array.js');
    var sum = _.reduce(collection,function(a, b) {
        return a + b;
    });
    var avg = Math.ceil(sum/collection.length);
    return String.fromCharCode(avg + 96);
  //在这里计算，它返回的是大于或等于函数参数，并且与之最接近的整数。写入代码
  // var sum_avg = 0;
  // for(var i = 0;i < collection.length;i++) {
  //     sum_avg += collection[i];
  // }
  // return String.fromCharCode(Math.ceil(sum_avg/collection.length)+96);
}

module.exports = average_to_letter;
