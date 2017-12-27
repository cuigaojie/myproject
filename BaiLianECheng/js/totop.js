;(function(){
	$.fn.extend({
		totop:function(opt){
			var that=$(this);
			var DEFAULT={
				scrollHeight:200,speed:1000
			}
			var settings=$.extend(DEFAULT,opt||{});
			$(window).scroll(function(){
				var $st=$(this).scrollTop();
				if($st>=settings.scrollHeight){
					that.fadeIn(500)
				}else{
					that.fadeOut(500)
				}
				
			})
			that.click(function(){
				$("html,body").animate({scrollTop:0},settings.speed)
			})
		}
	})
})(jQuery)
