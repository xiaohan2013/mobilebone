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
		global.mobile = factory(global,{});
	}
})(typeof window !== 'undefined' ? window : this,function(global,mobile){
	//在这里经过一系列的变化加上一些方法和数据
	//初始化:运行环境的准备

	mobile.autoInit = true;

	mobile.init = function(){
		console.log("++++++++mobile init+++++++++");
		var hash = location.href;
		console.log(hash);
	};

	//针对IE，移动浏览器,得做兼容处理,IE9+,支持该事件
	// document.addEventListener("DOMContentLoaded",function(){
	// 	if(mobile.autoInit){
	// 		mobile.init();
	// 	}
	// });
	var domReady = function(callback){
		//IE 的判断
		var isIE = navigator.userAgent.match(/MSIE (\d)/i);
		isIE = isIE ? isIE[1] : undefined;

		var len = arguments.length;
		if(isIE < 9){ //传统浏览器使用doScroll
			//反复检测DOM是否加载完毕，如果加载完毕就会执行相应的处理
			var ttl = setInterval(function(){
				try{
					// 测试doScroll的运行是否错误，如果错误则DOM还没加载完成
					document.documentElement.doScroll();
					clearInterval(ttl);
					// 加载处理
					console.log("DOM 加载完毕，开始加载其他");
					callback();
				}catch(e){}
			},1);
		}else{
			console.log("DOM has loaded!!!");
			document.addEventListener('DOMContentLoaded',callback,false);
		}
	}

	var loader = function(){
		if(mobile.autoInit){
			mobile.init();
		}
	}

	domReady(loader);


	/**
	 *	URL：URL分析器
	 *
	 */
	 var URLParser = function(url){

	 }

	 // HASH: URL地址中的hash解析器
	 var SearchParser = function(){
	 	var map = {};
	 	var query = location.search.slice(1);
	 	var parts = query.split("&");
	 	parts.foreach(function(item){
	 		// 这里的正则匹配不需要加属性：g
	 		var part = item.match(/(.*)=(.*)/);
	 		if()
	 	});
	 }

	 Array.prototype.foreach = function(callback){
	 	var len = this.length;
	 	for(var i=0;i < len; i++){
	 		callback.call(null,this[i]);
	 	}
	 };
});




