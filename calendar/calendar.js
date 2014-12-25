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



       <div class="portfolio-wrapper">

          <div class="cover_image" style="height: 483px;">
            <a href="#!/article/269">
              <img alt="Nike Air Max 2015 飞越更远征程" src="http://cdn.aiispo.com.cn/image/article/cover_img/20141210/1418182429409909.jpg"> 
              <div class="cover" style="height: 483px;"></div>
            </a>
          </div>
          <div class="article_body">
            <div class="article_meta">
              <div class="title-container">
                <a href="#!/article/269">  
                  <span class="title"><!--ms-html--></span>  <!-- 注意这里这里这里，明显还没加载 -->
                </a>
              </div>

              <div class="tags">
                <!--ms-repeat--><a class="tag tag-0" href="#!/tag/运动玩家">运动玩家</a><a class="tag tag-1" href="#!/tag/时尚流行">时尚流行</a><a class="tag tag-2" href="#!/tag/鞋子">鞋子</a><a class="tag tag-3" href="#!/tag/Nike">Nike</a><a class="tag tag-4" href="#!/tag/系列">系列</a><!--ms-repeat-end-->
              </div>
            </div>
          </div>
        </div>