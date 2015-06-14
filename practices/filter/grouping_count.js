'use strict';

function grouping_count(collection) {
    var temp = {};
    _(collection).each(function(n) {
        temp[n] = temp[n] || 0;
        temp[n]++;
    })
    return temp;

}
function _(collection) {
    if(!(this instanceof _)){
        return new _(collection);
    }
    this.collection = collection;
}
_.prototype.each = function(fun) {
    for(var i = 0; i < this.collection.length; i ++) {
        fun(this.collection[i] ,i)
    }
};


module.exports = grouping_count;
