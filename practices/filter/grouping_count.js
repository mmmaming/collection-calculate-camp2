'use strict';

function grouping_count(collection) {
  //
  // //在这里写入代码
  // var _ = require('../lodash');
  // return _.countBy(collection);
  //collection.sort();
  var temp = {};

  for(var i = 0;i < collection.length;i++) {
      if(!! temp[collection[i]]) {
          temp[collection[i]]++;
      }else{
          temp[collection[i]]=0;
          temp[collection[i]]++;
      }

  }
  return temp;
}

module.exports = grouping_count;
