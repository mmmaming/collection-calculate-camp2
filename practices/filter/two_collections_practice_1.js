'use strict';

function choose_common_elements(collection_a, collection_b) {
    // var _ = require('../mylodash/array.js');
    // var result = [];
    // _.each(collection_a,function(n) {
    //     if(_.exist(n,collection_b)){
    //         result.push(n);
    //     }
    // })
    // return result;

  // //在这里写入代码
  // var _ = require('../lodash');
  // return _.intersection(collection_a,collection_b)
  //
    // var array = [];
    // for(var i = 0;i < collection_a.length;i++) {
    //     for(var j = 0;j < collection_b.length;j++) {
    //         if(collection_a[i] == collection_b[j]) {
    //             array.push(collection_a[i]);
    //         }
    //     }
    // }
    // return array;
    var result = [];
    _(collection_a).each(function(n) {
        if(_(collection_b).exist(n)) {
            result.push(n)
        }
    })
    return result;  
}
function _(collection) {
    if(!(this instanceof _)){
        return new _(collection);
    }
    this.collection = collection;
}

_.prototype.each = function(fun) {
    for(var i = 0;i < this.collection.length;i++) {
        fun(this.collection[i],i)
    }
}

_.prototype.exist = function(element) {
    var result = false;
    this.each(function(val) {
        if( val === element) {
            result = true;
        }
    })
    return result;
}



module.exports = choose_common_elements;
