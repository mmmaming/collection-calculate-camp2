'use strict';

function find_first_even(collection) {
  //在这里写入代码
  // for(var i = 0;i < collection.length;i++) {
  //     if(collection[i] % 2 == 0) {
  //         return collection[i];
  //     }
  // }
  var _ = require('../mylodash/array.js')
return _.first(collection,function(val) {
    return val % 2 == 0;
})

}


module.exports = find_first_even;
