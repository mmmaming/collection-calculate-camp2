'use strict';

function get_letter_interval(number_a, number_b) {
    var _ = require('../mylodash/object.js');
    var result = [];

    var temp = _().range(number_a, number_b);
    _(temp).each(function(n){
        result.push(String.fromCharCode(n+96));
    });
    return result;
    // var _ = require('../mylodash/array.js');
    // var temp = _.range(number_a,number_b);
    // var result = [];
    // _.each(temp,function(n) {
    //     result.push(String.fromCharCode(n+96));
    // })
    // return result;
    //









  //在这里写入代码
  // var array = [];
  // if(number_a <= number_b) {
  //     for(var i=number_a; i<=number_b; i++) {
  //         array.push(String.fromCharCode(i+96));
  //     }
  // }else {
  //     for(var j=number_a; j>=number_b; j--) {
  //         array.push(String.fromCharCode(j+96));
  //     }
  // }
  // return array;
}

module.exports = get_letter_interval;
