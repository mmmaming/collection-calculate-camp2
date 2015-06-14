'use strict';

function choose_no_repeat_number(collection) {
    var result = [];
    _(collection).each(function(val) {
        if(!_(result).exist(val)) {
            result.push(val)
        }
    })
    return result;
    // var _ = require('../mylodash/array.js');
    // var result = [];
    // _.each(collection,function(n) {
    //     if(!_.exist(n,result)) {
    //         result.push(n);
    //     }
    // })
    // return result;
}
function _(collection) {
    if(!(this instanceof _)){
        return new _(collection);
    }
    this.collection = collection;
}
_.prototype.each = function(fun) {
    for(var i = 0 ; i < this.collection.length; i++) {
        fun(this.collection[i] , i);
    }
}

_.prototype.exist = function(element) {
    var result = false;
    this.each(function(val , key) {
        if( val === element) {
            result = true;
        }
    })
    return result;
}


module.exports = choose_no_repeat_number;
