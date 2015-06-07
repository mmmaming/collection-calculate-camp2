'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var _ = require('../mylodash/array.js');
  var k = 0;
   _.reach(collection,function(val,key) {
      if(val === element){
          k = key;

      }

  })
  return k;
  // for(var i = 0;i <collection.length;i++) {
  //     if(collection[i] == element) {
  //         return i;
  //     }
  // }
}

module.exports = calculate_elements_sum;
