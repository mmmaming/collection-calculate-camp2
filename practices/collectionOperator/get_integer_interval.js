'use strict';

function get_integer_interval(number_a, number_b) {
    var _ = require('../mylodash/array.js');
    return _.range(number_a, number_b);

   // var array = [];
   // if(number_a <= number_b) {
   //     for(var i=number_a; i<=number_b; i++) {
   //         array.push(i);
   //     }
   // }else {
   //     for(var j=number_a; j>=number_b; j--) {
   //         array.push(j);
   //     }
   // }
   // return array;

}


module.exports = get_integer_interval;
