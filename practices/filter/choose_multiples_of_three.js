'use strict';

function choose_multiples_of_three(collection) {
    return _(collection).filter(function(val, key) {
        return val % 3 === 0;
    }).value();

}

function _(collection) {
    if(!( this  instanceof _)){
        return new _(collection);
    }
    this.collection = collection;
}

_.prototype.each = function(fun){
    for(var i = 0; i < this.collection.length; i++) {
        fun(this.collection[i],i)
    }
}
_.prototype.filter = function(fun) {
    var result = [];
    this.each(function(val, key){
        if(fun(val, key)) {
            result.push(val);
        }
    })
    this.collection = result;
    return this;
}
_.prototype.value = function(){
    return this.collection;
}




module.exports = choose_multiples_of_three;
