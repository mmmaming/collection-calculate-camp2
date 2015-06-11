'use strict';

function get_intersection(collection_a, collection_b) {
    var _ = require('../mylodash/object.js');
    var result = [];
    _(collection_b).each(function(n) {
       if(_(collection_a).exist(n)){
           result.push(n);
       }
    })
    return result;

  // _(collection_b).each(function(n) {
  //     _(collection_a).each(function(m) {
  //         if(n === m){
  //             result.push(n);
  //         }
  //     })
  //
  // })
  // return result;



}

module.exports = get_intersection;
