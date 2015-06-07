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
    return array;
    // var array = [];
    // for(var i = 0;i < collection.length;i++) {
    // //  分别用长度和类型两种方法进行判断
    // //  if(collection[i].length!=undefined) {
    //     if(typeof(collection[i])=='object') {
    //         for(var j = 0;j < collection[i].length;j++) {
    //             array.push(collection[i][j])
    //        }
    //     }else{
    //         array.push(collection[i])
    //     }
    // }
    // return array;

}

module.exports = double_to_one;
