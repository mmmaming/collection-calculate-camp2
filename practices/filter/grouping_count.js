'use strict';

function grouping_count(collection) {
  //
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
  var _ = require('../mylodash/array.js');
  var even_array = _.filter(collection,function(val) {
      return val % 2 == 0;
  });
  var temp = {};
  _.each(even_array,function(val) {
      var key = val;
      var count = 1;
      temp[key] = temp[key] || count;
      temp[key] = count++;

  });
  return temp;

}

module.exports = grouping_count;
