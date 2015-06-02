'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  // var _ = require('../lodash/array');
  // var last = _.last(collection);
  // return last;


  // var collection_length = collection.length;
  // return collection[collection_length-1];
  var _ = require('../mylodash/array.js');
  return _.reduce(collection,function(a,b) {
      return b;
  })

}

module.exports = collect_last_element;
