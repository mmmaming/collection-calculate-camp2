'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  if(collection.length /2 == 0) {
    //  var a = collection[collection.length/2] + collection[collection.length/2+1];
    //  String.fromCharCode(collection[collection.length/2]);
      return String.fromCharCode(collection[collection.length/2])+String.fromCharCode(collection[collection.length/2+1]);
  }else{
      var a = collection[parseInt(collection.length/2)];
      return String.fromCharCode(Math.ceil(a));
  }
  return String.fromCharCode(Math.ceil(a));
}

module.exports = median_to_letter;
