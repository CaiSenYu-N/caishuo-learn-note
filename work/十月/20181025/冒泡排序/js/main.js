var arr = [51,45,4,45,11,2];

for (var i=0; i<arr.length-1; i++) {
  for (var j=0; j<arr.length-1-i; j++) {
    if (arr[j]>arr[j+1]) {
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
  console.log(arr);
}

console.log(arr);




























var arr = [51,42,41,5,56,1,5];

for(var i=0; i<arr.length-1; i++){
  for(var j=0; j<arr.length-1-i; j++){
    if(arr[j]>arr[j+1]){
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

console.log(arr);

























var arr = [45,4,55,45,45,4,85];

for(var i=0; i<arr.length; i++){
  for(var j=0; j<arr.length-1-i; j++){
    if(arr[j]>arr[j+1]){
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

console.log(arr);









var arr = [4,5,4,85,1,5,45];

for(var i=0; i<arr.length; i++){
  for(var j=0; j<arr.length-1-i; j++){
    if(arr[j]>arr[j+1]){
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

console.log(arr);
