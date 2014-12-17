/*


*/
//这个处理是为了让，mobile.js符合AMD、CMD规范
(function(global,factory){
	// 根据不同的环境来进行创建对象
	//在进行处理模块化的处理时:Nodejs对象
	if(typeof define === 'function' && (define.cmd || define.amd)){
		define("mobile",function(require,exports,module){
			return factory(root,exports);
		});
	}else{
		// 在浏览器环境时:mobile其实就是一个{}空对象，
		global.mobile = factory(gloabal,{}});
	}
})(typeof window !== 'undefined' ? window : this,function(gloabal,mobile){
	//在这里经过一系列的变化加上一些方法和数据
	//初始化:运行环境的准备

	mobile.autoInit = true;

	mobile.init = function(){
		console.log("mobile加载。。。。");
	};

	//针对IE，移动浏览器,得做兼容处理
	window.addListenerEvent("DOMContentLoaded",function(){
		if(mobile.autoInit){
			mobile.init();
		}
	});

});