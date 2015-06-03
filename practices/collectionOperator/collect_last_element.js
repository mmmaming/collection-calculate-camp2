'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  // var _ = require('../lodash/array');
  // var last = _.last(collection);
  // return last;

  // var collection_length = collection.length;
  // return collection[collection_length-1];
  // var _ = require('../mylodash/array.js');
  // return _.reduce(collection,function(a,b) {
  //     return b;
  // });
  //

  // var _ = require('../mylodash/array.js')
  // return _.last(collection);
  var a = last1(collection,function(n) {
      return n % 2 ==0;
  });
  return a;

}

function last(array,fun) {
    if(fun != undefined) {
        array = filter(array,fun);
    }
    return reduce(array,function(a, b) {
        return b;
    })
}

function last1(array,fun) {
    for(var i = array.length-1;i >= 0; i--) {
        if(fun(array[i])){
            return array[i];
        }
    }
}




module.exports = collect_last_element;
