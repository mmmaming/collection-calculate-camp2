function map(collection,fun){
    var a =[];
    for(var i = 0;i < collection.length;i++) {
           if (fun(collection[i])) {
               a.push(collection[i]);
	       }
    }
    return a;
}

function foreach(collection,fun) {
    for(var i = 0;i < collection.length;i++) {
        fun(collection[i]);
    }
}
//------------------------------------
// function reduce(collection,fun) {
//     for(var i = 0;i < collection.length;i++) {
//         fun(collection[i]);
//     }
// }

function reduce(collection,fun) {
    foreach(collection,fun);
}



function last(array) {
    var last = [];
    reduce(array,function(n){
        last =  array[array.length-1];
    });

    return last;
}

function first(array,fun) {
    var first = [];
    reduce(array,function(n) {
        first = array[0];
    });
    return fun(first);
}


function max(array) {
    var max = 0;
    reduce(array,function(n) {
        for(var i = 0;i < array.length;i++) {
            if(array[max] < array[i]) {
                max = i;
            }
        }
    });
    return array[max];
}

function min(collection) {
    var min = 0;
    for(var i = 0;i < collection.length;i++) {
        if(collection[min] > collection[i]) {
            min = i;
        }
    }
    return collection[min];
}


function sum(collection) {
    var sum = 0;
    reduce(collection,function(n) {
        sum += n;
    })
    return sum;
}





_each(collection,function(item) {
    for(var i = 0;i < collection.length;i++) {
        item = collection[i];
    }
})








module.exports ={
    'map'     : map,
    'foreach' : foreach,
    'sum'     : sum,
    'reduce'  : reduce,
    'last'    : last,
    'first'   : first,
    'max'     : max,
    'min'     : min

};
