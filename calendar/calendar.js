(function(root,undefined){
	var Calendar = {};

	Calendar.VERSION = "1.0.0";


	var init = function(){

	};

	var timer = function(){
		// 当天的日期
		var currentDate = new Date();
		// 当前时间
		var currDay = currentDate.getDate();
		// 当前月份
		var currMonth = currentDate.getMonth()+1;
		// 当前年份
		var currYear = currentDate.getFullYear();
		// 当前星期
		var currWeek = currentDate.getDay();

		//时间
		var Hour = currentDate.getHours(),
			Minute = currentDate.getMinutes(),
			Second = currentDate.getSeconds();

		return {
			second:Second,
			minute:Minute,
			hour:Hour,
			week:currWeek,
			day:currDay,
			month:currMonth,
			year:currYear
		};
	}

	var getCurrentDate = function(){

	};	

	var getCurrentTime = function(){

	};

	var getStyle = function(elem,attr){
		//样式对象
		var oStyle = elem.currrentStyle ? elem.currrentStyle : window.getComputedStyle(this, null);

		//获取属性值
		if(oStyle.getPropertyValue){
			return oStyle.getPropertyValue(attr);
		}else{
			return oStyle.getAttribute(attr);
		}

		//IE
		if(elem.currentStyle){
			return elem.currentSytle[attr];
		}else if(elem.getComputedStyle){//W3C、Firefox返回的是一个CSS样式声明对象([object CSSStyleDeclaration])，只读
			//返回的是最后的计算值，如果是相对值（em,百分数）.2em --->24px，将变成绝对值
			return window.getComputedStyle(obj,null)[attr]; 
		}else{
			//内联样式
			return elem.style.attr;
		}
	};

	//字符串驼峰转换
	String.prototype.toCamelCase = function(){
		//中杠线隔开单词
		var r = /[-|_](\w)/g;
		return this.replace(r,function(m,n){
			return m[1].toUpperCase();
		});
	};

	var toCapitalizeCamelCase = function(str){

	};

	var toUnderScoreCase = function(str){

	};

	Calendar.timer = timer;

	//将该对象挂载到window全局变量上
	window.Calendar = window.C = Calendar;
})(window);