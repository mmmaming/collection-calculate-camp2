'use strict';
var number_map_to_word_over_26 = function(collection){
    var map = [];
    var tag = 26;
    var special_num = 0;
    for(var i = 0;i < collection.length;i++) {
        if(collection[i] > tag) {
            special_num = parseInt(collection[i] / tag);
            map.push(String.fromCharCode(special_num+96)+String.fromCharCode(collection[i]+96-tag));
        }else {
            map.push(String.fromCharCode(collection[i]+96));
        }
    }
    return map;
}

module.exports = number_map_to_word_over_26;
