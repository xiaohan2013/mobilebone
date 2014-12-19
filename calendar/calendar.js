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
			Minute = currrentDate.getMinutes(),
			Second = currrentDate.getSeconds();

		

		console.log(currMonth);
	}

	Calendar.timer = timer;


	//将该对象挂载到window全局变量上
	window.Calendar = window.C = Calendar;
})(window);