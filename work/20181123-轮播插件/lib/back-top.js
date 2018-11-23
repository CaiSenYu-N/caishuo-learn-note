function animate(el,target){
  window.onscroll = function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollTop>300){
      el.css('display','block');
    }else{
      el.css('display','none');
    }
  }
  clearInterval(el.timer);
  el.timer = setInterval(function(){
    var leader = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var step = (target - leader )/10;
    if(step<1&&step>0){
      step = 1;
    }else if(step>-1&&step<0){
      step = -1;
    }
    window.scrollTo(0,leader+step);
    if(target==leader){
      window.scrollTo(0,target);
      clearInterval(el.timer);
    }
  },17);
}
