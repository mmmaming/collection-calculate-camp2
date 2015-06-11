function each(array,fun){
   for(var i = 0;i < array.length;i++) {
       fun(array[i],i);
   }
}
//倒序遍历数组
function reach(array,fun) {
    for(var i = array.length-1;i >= 0; i--) {
        fun(array[i],i);
    }
}

function filter(collection,fun) {
    var result = [];
    each(collection,function(q,i) {
            if(fun(q,i)){
                result.push(q);
            }
    });
    return result;
}


function remove(collection,fun) {
     var result = [];
     each(collection,function(q,i) {
             if(!fun(q,i)){
                 result.push(q);
             }
     });
     return result;
 }

 function reduce(collection,fun) {
     var result = collection[0];
     each(collection,function(n,i){
         if(i === 0) {
             result = collection[i];
         }else{
             result = fun(result,n);
         }
     });
     return result;
 }

 function map(array,fun){
     var result = [];
     each(array,function(val,key) {
         result.push(fun(val));
     })
     return result;
 }

 // function last(array,fun){//不适用于只有一个元素且不符合条件的要求
 //     var result = [];
 //     if(fun != undefined) {
 //         each(array,function(val, key) {
 //             if(fun(val,key)) {
 //                 result.push(val);
 //             }
 //         });
 //     }
 //     return result.length == 0 ? array[array.length-1] : result[result.length-1] ;
 // }
 // 此方法采用倒序的方法，从数组最后一个元素开始判断，如果符合条件，直接返回。
 // function last1(array,fun) {
 //     for(var i = array.length-1;i >= 0; i--) {
 //         if(fun(array[i])){
 //             return array[i];
 //         }
 //     }
 // }

 function last(array,fun) {
     if(fun != undefined) {
         array = filter(array,fun);
     }
     return reduce(array,function(a, b) {
         return b;
     })
 }

 function first(array,fun) {
     if(fun != undefined) {
         array = filter(array,fun);
     }
     return reduce(array,function(a, b) {
         return a;
     })
 }

 function sort(array,fun) {
     if(array.length === 1) {
         return array;
     }else{
         for(var i = 0; i < array.length; i++) {
             var temp ;
             for(var j = i + 1; j < array.length; j++) {
                 if(fun(array[i], array[j])) {
                     temp = array[j];
                     array[j] = array[i];
                     array[i] = temp;
                 }
             }
         }
         return array;
     }
 }


 function median(array) {
     var map = sort(array,function(a, b) {
         return a > b;
     });
     if(map.length % 2 == 0) {
         return (map[map.length/2] + map[map.length/2-1])/2;
     }else {
         return map[parseInt(map.length/2)];
     }
 }

 function exist(val,array){
     var result = false;
     each(array,function(n) {
         if(val === n) {
         result =  true;

         }
     })
    return result;
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



 module.exports ={
     'filter'  : filter,
     'each'    : each,
     'remove'  : remove,
     'reduce'  : reduce,
     'map'     : map,
     'last'    : last,
     'first'   : first,
     'sort'    : sort,
     'median'  : median,
     'exist'   : exist,
     'range'   : range,
     'reach'   : reach


 };
