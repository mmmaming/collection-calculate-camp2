'use strict';

function get_integer_interval(number_a, number_b) {
    var _ = require('../mylodash/object.js');
    return _().range(number_a,number_b);

}


module.exports = get_integer_interval;
