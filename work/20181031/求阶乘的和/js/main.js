  // var n = prompt('请输入数字：')；
// console.log('您输入的数字为'+n+'该数字的阶乘为'+total(n));
//
// function total(num){
//   var sum = 0;
//   for(var i=1; i<=num; i++){
//     sum += jc(i);
//   }
//   return sum;
// }
//
// function jc(n){
//   if(n==1){
//     return 1;
//   }
//   return n*jc(n-1);
// }

// var n = prompt('请输入数字：');
// console.log('您输入的数字为'+n+'该数字的阶乘为'+total(n));
//
// function total(num){
//   var sum = 0;
//   for(var i=1; i<=num; i++){
//     sum += jc(i);
//   }
//   return sum;
// }
//
// function jc(n){
//   if(n==1){
//     return 1;
//   }
//   return n*jc(n-1);
// }


var n = prompt('请输入：');
console.log('您输入的数字为：'+ n + '该数字的阶乘为' + total(n));

function total(num){
  var sum = 0;
  for(var i=1; i<=num; i++){
    sum += jc(i);
  }
  return sum;
}

function jc(n){
  if(n==1){
    return 1;
  }
  return n*jc(n-1);
}
