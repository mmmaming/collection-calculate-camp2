'use strict';

function get_integer_interval_2(number_a, number_b) {
    var _ = require('../mylodash/object.js');
    return _().range(number_a, number_b).filter(function(n) {
        return n % 2 === 0;
    })
  // var _ = require('../mylodash/array.js');
  // var even = _.range(number_a,number_b);
  // return _.filter(even,function(n) {
  //     return n % 2 === 0;
  // });

    // var array = [];
    // if(number_a < number_b) {
    //     for(var i = 0;i < number_b;i++){
    //         if(number_a % 2 == 0){
    //             array.push(number_a);
    //         }
    //     number_a++;
    //     }
    // }else if(number_a > number_b) {
    //     for(var i = number_a;i > 0; i--){
    //         if(number_a % 2 == 0) {
    //             array.push(number_a)
    //         }
    //         number_a--;
    //     }
    // }else {
    //     if(number_a % 2 == 0) {
    //         array.push(number_a);
    //     }
    // }
    // return array;
}

module.exports = get_integer_interval_2;
