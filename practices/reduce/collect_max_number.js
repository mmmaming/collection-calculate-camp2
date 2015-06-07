'use strict';

function collect_max_number(collection) {
    var _ = require('../mylodash/array.js');
    return _.reduce(collection,function (a, b) {
        if(a>b) {
            return a;
        }else {
            return b;
        }
    });

  //在这里写入代码
  // var max = 0;
  // for(var i = 0;i < collection.length;i++) {
  //     if(collection[max] < collection[i]) {
  //         max = i;
  //     }
  // }
  // return collection[max];

  // function foreach(array,fun){
  //     for(var i = 0;i < array.length;i++) {
  //         fun(array[i],i);
  //     }
  // }
  // function reduce(collection,fun) {
  //     var result = collection[0];
  //     foreach(collection,function(n,i){
  //         if(i === 0) {
  //             result = collection[i];
  //         }else{
  //             result = fun(result,n);
  //         }
  //     });
  //     return result;
  // }
  //
  // function max(a,b) {
  //     if(a>b) {
  //         return a;
  //     }else{
  //         return b;
  //     }
  // }
  //
  // return reduce(collection,max);

}

module.exports = collect_max_number;
