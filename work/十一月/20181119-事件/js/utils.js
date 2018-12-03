function  animate(el,params,fn) {
	// var leader = leader + (target-leader)/10;
	clearInterval(el.timer);
	el.timer = setInterval(function(){
		var flag = true;
		//遍历params对象
		// {left:400,top:600}
		for(var key in params){
			//怎么计算leader?
			// offsetxx都是整数
			var leader = getStyle(el,key);

			var step = (params[key]-leader)/10;
			//修正step
			if(Math.abs(step)<1){
				step = step>0?Math.ceil(step):Math.floor(step);
			}

			//计算当前位置
			el.style[key] = (leader+step)+'px';
			//相等的时候清除
			if(leader != params[key]){
				flag = false;
			}
		}

		if(flag){
			clearInterval(el.timer);
			//当动画执行完毕后调用fn
			if(fn){
				fn();
			}
		}

	},17)

}

/**
* 根据class属性获取值
**/
function getStyle (el,attr) {
	//获取元素el的attr的class属性
	var rs = window.getComputedStyle(el,null)[attr];
	//把px去掉 返回number   20px
	if(rs.indexOf('px')!=-1){
		//字符串截取
		rs = rs.substr(0,rs.length-2);
		//变为number
		rs = parseInt(rs);
	}
	return rs;
}
