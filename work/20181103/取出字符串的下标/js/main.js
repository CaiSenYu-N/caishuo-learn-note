// var arr = ['a','d','a','c','b','c','a'];
//
// var abc = getIndex(arr,'a');
// console.log('所有符合a的下标共有==>'+abc.length+'个');
// console.log(abc.length);
//
// function getIndex(arr,text){
//   var rs = [];
//   for(var i=0; i<arr.length; i++){
//     if(arr[i] == text){
//       rs.push(i);
//     }
//   }
//   return rs;
// }
//



























var arr = ['a','d','a','c','b','c','a'];
var abc = getIndex(arr,'c');
console.log(abc.length);

function getIndex(arr,text){
  var rs = [];
  for(var i=0; i<arr.length; i++){
    if(arr[i]==text){
      rs.push(i);
    }
  }
  return rs;
}
