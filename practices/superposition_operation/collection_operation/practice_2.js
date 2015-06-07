'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var array = [];
  var _ = require('../../mylodash/array.js');
  var odd = _.filter(collection,function(val) {
      if(val % 2 != 0) {
          return val;
      }
  });
  return _.map(odd,function (val) {
      return val * 3 + 2;
  })
  // for(var i = 0;i < collection.length;i++) {
  //     if(collection[i] % 2 != 0) {
  //         array.push(collection[i]*3+2);
  //     }
  // }
  // return array;

}

module.exports = hybrid_operation_to_uneven;
