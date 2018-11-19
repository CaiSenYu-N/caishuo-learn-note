function jc(n){
  if(n==1){
    return 1;
  }
  return n*jc(n-1);
}
