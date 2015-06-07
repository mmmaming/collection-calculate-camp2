'use strict';

function collect_min_number(collection) {
    var _ = require('../mylodash/array.js');
    return _.reduce(collection,function (a, b) {
        if(a>b) {
            return b;
        }else {
            return a;
        }
    });
  //在这里写入代码
  // var min = 0;
  // for(var i = 0;i < collection.length;i++) {
  //     if(collection[min] > collection[i]) {
  //         min = i;
  //     }
  // }
  // return collection[min];
  // // var _ = require('../mylodash/array.js');
  // return _.min(collection);
  //


}

module.exports = collect_min_number;
