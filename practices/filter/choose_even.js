'use strict';

function choose_even(collection) {
    var array = [];
    function even(){
        for(var i = 0;i < collection.length;i++) {
            if(collection[i] % 2 == 0) {
                array.push(collection[i]);
            }
        }
    }
    even();
    return array;
}

module.exports = choose_even;
