'use strict';
var map_to_three_multiples = function(collections){
//     var array = [];
//     for(var i = 0;i < collections.length;i++){
//             array.push(collections[i] * 3);
//     }
//     return array;
// };

var _ = require('../mylodash/array.js');
return _.map(collections,function(n) {
    return n * 3;
});
}


module.exports = map_to_three_multiples;
