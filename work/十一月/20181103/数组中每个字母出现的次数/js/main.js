// var arr = ["c","b","a","c","b","z","a","a"];
//
// var wordArr = [];
// var countArr = [];
//
// for(var i=0; i<arr.length; i++){
//   if(wordArr.indexOf(arr[i])==-1){
//     wordArr.push(arr[i]);
//     countArr.push(1);
//   }else{
//     var index = wordArr.indexOf(arr[i]);
//     countArr[index]++;
//   }
// }
//
// console.log(wordArr);
// console.log(countArr);













var arr = ["c","b","a","c","b","z","a","a"];

var wordArr = [];
var countArr = [];

for(var i=0; i<arr.length; i++){
  if(wordArr.indexOf(arr[i])==-1){
    wordArr.push(arr[i]);
    countArr.push(1);
  }else{
    var index = wordArr.indexOf(arr[i]);
    countArr[index]++;
  }
}

console.log(wordArr);
console.log(countArr);
