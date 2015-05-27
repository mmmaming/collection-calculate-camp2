'use strict';

function collect_last_element(collection) {
 
  var collection_length = collection.length;
  return collection[collection_length-1];

}

module.exports = collect_last_element;
