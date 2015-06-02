'use strict';

function choose_multiples_of_three(collection) {
    var _ = require('../mylodash/array.js');
    return _.filter(collection,function(n) {
        return n % 3 == 0;
    })
}

module.exports = choose_multiples_of_three;
