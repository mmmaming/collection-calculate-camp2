'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
    var array = [];
    if(number_a < number_b) {
        for(var i = 0;i < number_b;i++){
            if(number_a % 2 == 0){
                array.push(number_a);
            }
        number_a++;
        }
    }else if(number_a > number_b) {
        for(var i = number_a;i > 0; i--){
            if(number_a % 2 == 0) {
                array.push(number_a)
            }
            number_a--;
        }
    }else {
        if(number_a % 2 == 0) {
            array.push(number_a);
        }
    }
    return array;
}

module.exports = get_integer_interval_2;
