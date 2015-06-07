'use strict';
var number_map_to_word_over_26 = function(collection){
    var _ = require('../mylodash/array.js');

    return _.map(collection,function(n) {
        var tag = 26;
        var special_num = 0;
        if(n > tag) {
            special_num = parseInt(n / tag);
            return (String.fromCharCode(special_num+96) + String.fromCharCode(n + 96 - tag));
        }else{
            return (String.fromCharCode(n+96));
        }
    })
    // var map = [];
    // var tag = 26;
    // var special_num = 0;
    // for(var i = 0;i < collection.length;i++) {
    //     if(collection[i] > tag) {
    //         special_num = parseInt(collection[i] / tag);
    //         map.push(String.fromCharCode(special_num+96)+String.fromCharCode(collection[i]+96-tag));
    //     }else {
    //         map.push(String.fromCharCode(collection[i]+96));
    //     }
    // }
    // return map;
}

module.exports = number_map_to_word_over_26;
