'use strict';
function rank_asc(collection){
    
    var _ = require('../mylodash/array.js');
    return _.sort(collection,function(a,b) {
        return a < b;
    });

 // if(collection.length === 1) {
 //      return collection[0];
 //  } else {
 //  for (var i = 0; i < collection.length; i ++) {
 //      var temp = 0;
 //
 //      for(var j = i + 1; j < collection.length; j ++) {
 //          if (collection[i] < collection[j]) {
 //              temp = collection[j];
 //              collection[j] = collection[i];
 //              collection[i] = temp;
 //              }
 //          }
 //      }
 //  }
 // return collection;
  // //第二种方法
  // var map = [];
  // for(var i =0;collection[i]!=null;i++) {
  //     var exist = false;
  //     for(var j = 0;j < map.length;j++) {
  //         if(collection[i] > map[j]){
  //             map.splice(j,0,collection[i]);
  //             exist = true;
  //             break;
  //         }
  //     }
  //     if(!exist) {
  //         map.push(collection[i]);
  //     }
  // }
  // return map;


}






module.exports = rank_asc;
