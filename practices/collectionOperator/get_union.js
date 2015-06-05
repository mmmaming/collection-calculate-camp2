'use strict';

function get_union(collection_a, collection_b) {

    var _ = require('../mylodash/array.js');
     _.each(collection_b,function(n) {
        if(!_.exist(n,collection_a)){
            collection_a.push(n);
        }

    })
    return collection_a;

  //在这里写入代码
  // var _ = require('../lodash/array');
  //
  // return _.union(collection_a,collection_b);

  // var array = [];
  //
  // for(var i = 0;i < collection_a.length;i++) {
  //     array.push(collection_a[i]);
  // }
  //     var exist;
  // for(var i = 0;i < collection_b.length;i++) {
  //    exist = false;
  //     for(var j = 0;j < collection_a.length;j++) {
  //         if(collection_b[i] == collection_a[j]) {
  //             exist = true;
  //             break;
  //         }
  //     }
  //     if(!exist) {
  //         array.push(collection_b[i])
  //     }
  // }
  //
  //
  //
  //
  // return array;
}

module.exports = get_union;
