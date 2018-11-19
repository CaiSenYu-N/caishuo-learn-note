// var arr = [156,46,55,4,2,5,4];
//
// for(var j = 0 ; j < arr.length-1 ; j++){
// 	var minIndex = j;
// 	for(var i = j+1 ; i < arr.length ; i++){
// 		//一一比较 获取最小下标
// 		if(arr[minIndex] > arr[i]){
// 			minIndex = i;
// 		}
// 	}
// 	// [22, 30, 55, 60, 77]
// 	console.log('最小下表为===>'+minIndex);
// 	// 如果比来对比之后,自己还是最小值,那么不需要交换位置
// 	// 不写没错,但写了 会提升代码运行效率
// 	if(minIndex != j){
// 		var temp = arr[j];
// 		arr[j] = arr[minIndex];
// 		arr[minIndex] = temp;
// 		console.log('第一次交换的结果为:');
// 		console.log(arr);
// 	}
// }

// var arr = [156,16,41,5,1,5];
//
// for(var i=0; i<arr.length-1; i++){
//   var minIndex = i;
//   for(var j = i+1; j<arr.length; j++){
//     if(arr[minIndex] > arr[j]){
//       minIndex = j;
//     }
//   }
//   console.log('最小下标为==>'+minIndex);
//   if(minIndex != i){
//     var temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//     console.log('两次交换结果为：');
//     console.log(arr);
//   }
// }




























var arr = [156,16,41,5,1,5];

for(var i=0; i<arr.length-1; i++){
  var minIndex = i;
  for(var j=i+1; j<length; i++){
    if(arr[minIndex]>arr[j]){
      minIndex = j;
    }
  }
  console.log('最小下标为==>'+minIndex);
  if(minIndex != i){
    var temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    console.log('两次交换结果为：');
    console.log(arr);
    }
}
