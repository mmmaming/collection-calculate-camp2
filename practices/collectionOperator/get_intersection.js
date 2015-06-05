'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  
  var _ = require('../mylodash/array.js');
  var result = [];
  _.each(collection_b,function(n) {
      if(_.exist(n,collection_a)){
          result.push(n);
      }
  })
  return result;

  // var _ = require('../lodash/array');
  // return _.intersection(collection_b,collection_a);
  //=================================
  // var intersection_1 = _.difference(collection_b,collection_a);
  // var intersection_2 = _.difference(collection_b,intersection_1);
  // return intersection_2;
  // var array = [];
  // for(var i = 0;i < collection_b.length;i++) {
  //     for(var j = 0;j < collection_a.length;j++) {
  //         if(collection_b[i] === collection_a[j]) {
  //             array.push(collection_b[i]);
  //         }
  //     }
  // }
  // return array;
}

module.exports = get_intersection;
