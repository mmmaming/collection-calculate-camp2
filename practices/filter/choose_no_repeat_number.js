'use strict';

function choose_no_repeat_number(collection) {
    var _ = require('../mylodash/array.js');
    var result = [];
    _.each(collection,function(n) {
        if(!_.exist(n,result)) {
            result.push(n);
        }
    })
    return result;

  //在这里写入代码
  // var _ = require('../lodash');
  // return _.uniq(collection,true);
  //========方法1==========
  // var array = [];
  // for(var i = 0;i < collection.length;i++) {
  //     var exist = false;
  //     for(var j = 0;j < array.length;j++) {
  //         if(collection[i] == array[j]){
  //             exist = true;
  //             break;
  //         }
  //     }
  //     if(!exist) {
  //         array.push(collection[i]);
  //     }
  // }
  // return array;
  //==========方法2=================
//   collection.sort();
//   var array = [];
//   for(var i = 0;i < collection.length;i++){
//       if(collection[i] == collection[i+1]){
//           continue;
//       }
//       array.push(collection[i]);
//   }
//   return array;
// }
//=======方法3============
    // var array = [];
    // var hash = {};
    // for(var i = 0;collection[i] != null;i++) {
    //     if(!hash[collection[i]]) {
    //         array.push(collection[i]);
    //         hash[collection[i]] = true;
    //     }
    // }
    // return array;



}
module.exports = choose_no_repeat_number;
