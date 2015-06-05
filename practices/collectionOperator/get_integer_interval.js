'use strict';

function get_integer_interval(number_a, number_b) {
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
   return range(number_a, number_b);
}

function range(a, b) {
    var step = Math.abs(b - a) / (b - a);
    var count = (b - a) / step;
    var result = [];
    if(a === b) {
         result.push(a);
    }else{
        for (var i = 0; i <= count; i++) {
            var item = a + i * step;
            result.push(item);
        }
    }
    return result;
}

module.exports = get_integer_interval;
