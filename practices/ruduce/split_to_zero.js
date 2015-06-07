'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  result.push(number);
  for(var i = 0;i < result.length;i++) {
      result.push(parseFloat((result[i]-interval).toFixed(1)));
      if(result[i+1] <=0){
          break;
      }
  }
  return result;
}

module.exports = spilt_to_zero;
