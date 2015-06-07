'use strict';

function hybrid_operation_to_uneven(collection) {

    var _ = require('../../mylodash/array.js');
    var odd = _.filter(collection,function(val) {
        return val % 2 != 0;
    });
    var math = _.map(odd,function(val) {
        return val * 3 + 5;
    });
    return _.reduce(math,function(a, b) {
        return a + b;
    });
  //在这里写入代码
//   var sum = 0;
//   for(var i = 0;i < collection.length;i++) {
//       if(collection[i] % 2 != 0) {
//           sum += (collection[i] * 3 + 5);
//       }
//   }
//   return sum;
// }

}

module.exports = hybrid_operation_to_uneven;
