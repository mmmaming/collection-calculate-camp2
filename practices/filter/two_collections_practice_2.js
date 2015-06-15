'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    var result = [];
    _(collection_a).each(function(val) {
        if(!_(collection_b).exist(val)) {
            result.push(val);
        }
    });
    return result;
}

function _(collection) {
    if(!(this instanceof _)) {
        return  new _(collection);
    }
    this.collection = collection;
}

_.prototype.each = function(func) {
    for(var i = 0; i < this.collection.length; i++) {
        func(this.collection[i], i);
    }
    return this;
}

_.prototype.exist = function(element) {
    var result = false;
    this.each(function(val, key) {
        if(val === element) {
            result = true;
        }
    })
    return result;
}

module.exports = choose_no_common_elements;
