'use strict';

function calculate_elements_sum(collection, element) {

    var _ = require('../mylodash/array.js');
    var k = 0;
     _.each(collection,function(val,key) {
        if(val === element){
            k = key;
        }
    })
    return k;
  //在这里写入代码
  // for(var i = collection.length;i > 0;i--) {
  //     if(collection[i] == element) {
  //         return i;
  //     }
  // }
}

module.exports = calculate_elements_sum;
