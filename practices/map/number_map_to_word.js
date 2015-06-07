'use strict';
var number_map_to_word = function(collection){
    var _ = require('../mylodash/array.js');
    return _.map(collection,function(n) {
        return (String.fromCharCode(n+96))
    })
    // var map = [];
    // for(var i = 0 ;i < collection.length;i++) {
    //     map.push(String.fromCharCode(collection[i]+96));
    // }
    // return map;
};

module.exports = number_map_to_word;
