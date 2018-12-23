//发布订阅模式
var ob = {};
ob.list = [];

ob.add = function(key,fn){
	if(!ob.list[key]){
		ob.list[key] = [];
	}
	ob.list[key].push(fn);
}

ob.trigger = function(){
	var key = Array.prototype.shift.call(arguments);
	var fns = this.list[key];
	if(!fns || fns.length ==0){
		return false;
	}
	for(var i = 0 ; i < fns.length ; i++){
		fns[i].apply(this,arguments);
	}
	
}

// 一次订阅
ob.add('1',function(name,color){
	console.log('name==>'+name);
	console.log('color==>'+color);
})

ob.add('2',function(name,age){
	console.log('name==>'+name);
	console.log('age==>'+age);
})

ob.trigger('2','张三','red');
// ob.trigger('2','李四',30);