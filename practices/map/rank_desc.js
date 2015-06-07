'use strict';
var rank_desc = function(collection){
    var _ = require('../mylodash/array.js');
    return _.sort(collection,function(a,b) {
        return a > b;
    });
    
    // var map = [];
    // for(var i =0;collection[i]!=null;i++) {
    //     var exist = false;
    //     for(var j = 0;j < map.length;j++) {
    //         if(collection[i] < map[j]){
    //             map.splice(j,0,collection[i]);
    //             exist = true;
    //             break;
    //         }
    //     }
    //     if(!exist) {
    //         map.push(collection[i]);
    //     }
    // }
    // return map;
};

module.exports = rank_desc;
