'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    var _ = require('../mylodash/array.js');
    var result = [];
    _.each(collection_a,function(n) {
        _.each(collection_b,function(m) {
            if(n % m == 0){
                result.push(n);
            }
        })
    })
    return result;c

  // var array = [];
  // for (var i = 0; i < collection_a.length; i++) {
  //     for(var j = 0;j < collection_b.length; j++) {
  //         if(collection_a[i] % collection_b[j] == 0){
  //             array.push(collection_a[i])
  //         }
  //     }
  // }
  // return array;
}

module.exports = choose_divisible_integer;
