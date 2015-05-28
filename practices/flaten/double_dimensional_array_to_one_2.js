'use strict';

function double_to_one(collection) {
    var array = [];
    for(var i = 0;i < collection.length;i++) {
        if(typeof(collection[i])=='object') {
            for(var j = 0;j < collection[i].length;j++) {
                array.push(collection[i][j])
           }
        }else{
            array.push(collection[i])
        }
    }
    var no_repeat_array = [];
    var hash = {};
    for(var i = 0;array[i] != null;i++) {
        if(!hash[array[i]]) {
            no_repeat_array.push(array[i]);
            hash[array[i]] = true;
        }
    }
    return no_repeat_array;
}

module.exports = double_to_one;
