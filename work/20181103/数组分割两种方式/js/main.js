// var arr = ['张飞','刘备','关羽'];
// console.log(split1(arr));
// console.log(split2(arr));
//
// function split1(arr){
//   return arr.join('|');
// }
//
// function split2(arr){
//   var str = '';
//   for(var i=0; i<arr.length; i++){
//     str += '|'+arr[i];
//   }
//   str = str.substr(1);
//   return str;
// }
//




















var arr = ['张飞','刘备','关羽'];
console.log(split1(arr));
console.log(split2(arr));

function split1(arr){
  return arr.join('|');
}

function split2(arr){
  var str = '';
  for(var i=0; i<arr.length; i++){
    str += '|'+arr[i];
  }
  str = str.substr(1);
  return str;
}
