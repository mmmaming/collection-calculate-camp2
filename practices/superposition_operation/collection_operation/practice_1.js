'use strict';

function hybrid_operation(collection) {
    var _ = require('../../mylodash/array.js');
    var temp = _.map(collection,function(n) {
        return n * 3 + 2;
    });
    return _.reduce(temp,function(a, b) {
        return a + b;
    })

  //在这里写入代码
  // var sum = 0;
  // for(var i = 0;i < collection.length;i++) {
  //     sum += (collection[i] * 3 + 2);
  // }
  // return sum;
  //
  // var _ = require('../mylodash/array.js');
  // var math = _.map(collection,function(n) {
  //     return n * 3 + 2;
  // });
  // return _reduce(math,function(a,b) {
  //     return a + b;
  // })
}

module.exports = hybrid_operation;
