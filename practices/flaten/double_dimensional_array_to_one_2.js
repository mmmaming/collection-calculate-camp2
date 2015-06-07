'use strict';

function double_to_one(collection) {

    var _ = require('../mylodash/array.js');
    var array = [];
    _.each(collection,function(val,key) {
        if(typeof(val) == 'object') {
            _.each(val,function(n) {
                array.push(n);
            })
        }else{
            array.push(val);
        }
    })
    var no_repeat_array = [];
    _.each(array,function(n) {
        if(!_.exist(n,no_repeat_array)){
            no_repeat_array.push(n);
        }
    });
    return no_repeat_array;

    // var array = [];
    // for(var i = 0;i < collection.length;i++) {
    //     if(typeof(collection[i])=='object') {
    //         for(var j = 0;j < collection[i].length;j++) {
    //             array.push(collection[i][j])
    //        }
    //     }else{
    //         array.push(collection[i])
    //     }
    // }
    // var no_repeat_array = [];
    // var hash = {};
    // for(var i = 0;array[i] != null;i++) {
    //     if(!hash[array[i]]) {
    //         no_repeat_array.push(array[i]);
    //         hash[array[i]] = true;
    //     }
    // }
    // return no_repeat_array;
}

module.exports = double_to_one;
