'use strict';

function even_to_letter(collection) {

    var _ = require('../../mylodash/array.js');
    var result =  _.filter(collection,function(n) {
        return n % 2 == 0;
    });
    return _.map(result,function(n) {
        return String.fromCharCode(n+96);
    })

  //在这里写入代码
  // var map = [];
  // for(var i = 0;i < collection.length;i++) {
  //     if(collection[i] % 2 == 0) {
  //         map.push(String.fromCharCode(collection[i]+96));
  //     }
  // }
  // return map;
}

module.exports = even_to_letter;
