'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  // var _ = require('../lodash/array');
  // var last = _.last(collection);
  // return last;
  var collection_length = collection.length;
  return collection[collection_length-1];

}

module.exports = collect_last_element;
