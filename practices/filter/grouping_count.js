'use strict';

function grouping_count(collection) {
    var _ = require('../mylodash/array.js');
    var temp = {};

    _.each(collection,function(val) {
        temp[val] = temp[val] || 0;
        temp[val]++;
    });
    return temp;
  // //在这里写入代码
  // var _ = require('../lodash');
  // return _.countBy(collection);
  //collection.sort();
  // var temp = {};
  //
  // for(var i = 0;i < collection.length;i++) {
  //   //   temp[collection[i]]=temp[collection[i]]||0;
  //   //   temp[collection[i]]++;
  //     if(!! temp[collection[i]]) {
  //         temp[collection[i]]++;
  //     }else{
  //         temp[collection[i]]=0;
  //         temp[collection[i]]++;
  //     }
  //
  // }
  // return temp;


}

module.exports = grouping_count;
