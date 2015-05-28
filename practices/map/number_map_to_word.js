'use strict';
var number_map_to_word = function(collection){
  // return ['a','b','c','d','e'];
  //var _ = require('../lodash');
  var array = [];
  function a(collection_a){
      for(var i=_.first(collection_a);i<=_.last(collection_a);i++) {
          array.push( (String.fromCharCode(i+96)));
      }
  return array;
  }



};

module.exports = number_map_to_word;
