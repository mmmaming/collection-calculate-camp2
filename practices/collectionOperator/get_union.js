'use strict';

function get_union(collection_a, collection_b) {

  var array = [];

  for(var i = 0;i < collection_a.length;i++) {
      array.push(collection_a[i]);
  }
      var exist;
  for(var i = 0;i < collection_b.length;i++) {
     exist = false;
      for(var j = 0;j < collection_a.length;j++) {
          if(collection_b[i] == collection_a[j]) {
              exist = true;
              break;
          }
      }
      if(!exist) {
          array.push(collection_b[i])
      }
  }




  return array;
}

module.exports = get_union;
