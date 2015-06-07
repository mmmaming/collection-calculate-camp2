'use strict';

function calculate_elements_sum(collection) {


      var _ = require('../mylodash/array.js');
      return _.reduce(collection,function(a ,b) {
          return a + b;
      })
//在这里写入代码
  // var sum = 0;
  // for(var i = 0;i < collection.length;i++) {
  //     sum+=collection[i];
  // }
  // return sum;



}

module.exports = calculate_elements_sum;
