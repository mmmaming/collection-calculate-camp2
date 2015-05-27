'use strict';

function get_intersection(collection_a, collection_b) {

  var array = [];
  for(var i = 0;i < collection_b.length;i++) {
      for(var j = 0;j < collection_a.length;j++) {
          if(collection_b[i] === collection_a[j]) {
              array.push(collection_b[i]);
          }
      }
  }
  return array;
}

module.exports = get_intersection;
