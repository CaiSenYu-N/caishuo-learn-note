// 递归算法通常用于遍历文件夹，或用于树状结构的遍历
function jc(n){
  if(n==1){
    return 1;
  }
  // 递归算法 自己调用自己 递归算法，自己调用自己 递归算法，自己调用自己 递归算法，自己调用自己
			// 2* jc(1) = 2*1;
			// 3*jc(2) = 3* 2*1;
			// 4*jc(3) = 4*3*2*1
  return n*jc(n-1);
}
// 递归算法，自己调用自己！！！
