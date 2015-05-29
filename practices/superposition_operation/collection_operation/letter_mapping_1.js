'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var map = [];
  for(var i = 0;i < collection.length;i++) {
      if(collection[i] % 2 == 0) {
          map.push(String.fromCharCode(collection[i]+96));
      }
  }
  return map;
}

module.exports = even_to_letter;
