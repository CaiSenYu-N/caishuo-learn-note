// var arr2 = [4,9];
// var arr3 = [1,3,6];
//
// select(arr2);
// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr2[arr2.length-1]);
//
// select(arr3);
// console.log(arr3);
// console.log(arr3[0]);
// console.log(arr3[arr3.length-1]);
//
// function select(arr){
//   for(var i=0; i<arr.length-1; i++){
//     for(var j=0; j<arr.length-1-i; j++){
//       if(arr[i]>arr[i+1]){
// 					var temp = arr[i];
// 					arr[i] = arr[i+1];
// 					arr[i+1] = temp;
//       }
//     }
//   }
//   return arr;
// }


var arr = [5,6,2,9,1];
var arr1 = [5,78,1,5,4];

function getMax(arr){
  var maxIndex = 0;
  for(var i=1; i<arr.length; i++){
    if(arr[maxIndex]<arr[i]){
      maxIndex = i;
    }
  }
  console.log('最大值的下标为'+maxIndex+'最大值为'+arr[maxIndex]);
}

getMax(arr);
getMax(arr1);
