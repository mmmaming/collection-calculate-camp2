'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    var _ = require('../mylodash/array.js');
    var result = [];
    _.each(collection_a,function(n) {
        if(!_.exist(n,collection_b)){
            result.push(n);
        }
    })
    return result;



//   //在这里写入代码
//   var _ = require('../lodash');
// return _.xor(collection_a,collection_b)

}

module.exports = choose_no_common_elements;
