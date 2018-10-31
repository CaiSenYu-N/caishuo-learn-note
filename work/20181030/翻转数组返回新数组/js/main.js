var arr = ['a','b','c','d','e'];

function reverse(arr){
  for(var i=0; i<Math.floor(arr.length/2); i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
}

reverse(arr);
console.log(arr);
