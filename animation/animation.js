;(function(){
	//当前版本
	var version = "1.0.0";
	var animation = function(){
		
	};

	//运动的可选项
	animation.options = {
		speed:0,
		direction:"",

	};

	//运动初始化
	animation.init = function(){

	};

	animation.alert = function(){
		alert("yese");
	}

	animation.toString = function(){
		return "你正在使用Animation:"+version;
	}

	//将动画挂载到window下
	//如果是jQuery下，就需要jQuery.fn.Aniamtion
	window.animation = animation;
})();