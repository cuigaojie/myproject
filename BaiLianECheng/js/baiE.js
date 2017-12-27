$(function(){
	//首页头部的小tab切换
	$(".list-w").hover(function(){
		$(this).css("background","#fff");
		$(".tab-t").css({"display":"block","border":"2px solid #eee"});
	},
	function(){
		$(".tab-t").css("display","none");
		$(this).css("background","");
				
	})
	
	$(".tip-show").mouseover(function(){
		$(this).find(".tipcon").animate({"width":86+"px"},400);
		$(this).find(".tipcon").css({"display":'block'});
		$(this).find(".appshe").animate({"width":130+"px"},400);
		$(this).find("span").removeClass("dou doudou ");
		$(this).css("background","#e6133c").siblings().css("background","")
	}).mouseout(function(){
		$(this).find(".mytip").animate({"width":0},400).stop(true,true);
		$(this).find(".mytip").css({"display":"none","overflow":'hidden'});
		$(this).find(".appshe").animate({"width":0},400);
		$(this).find(".appshe").css({"display":"none","overflow":'hidden'}).stop(true,true);	
	})

	
	
	
	//首部导航栏切换
	$(".shownav li").mouseover(function(){
		var index=$(this).index();
		$(this).css("background","#3C3C3C").siblings("li").css("background","");		
		$(".menu-list .beauty").eq(index).css({"display":"block","z-index":"9999"}).siblings(".menu-list .beauty").css("display","none");
		$(".menu-list .beauty").mouseover(function(){
		$(".menu-list .beauty").eq(index).css({"display":"block","z-index":"9999"}).siblings(".menu-list .beauty").css("display","none");
			
		}).mouseout(function(){
			$(".menu-list .beauty").css("display","none");
		})
	}).mouseout(function(){
		$(".menu-list .beauty").css("display","none")
	})
	//首页导航 小图标 出现
		
		$("ul.nava li").hover(function(){
			$(this).children("b").animate({"top":"-15px"},100);
			$(this).children("a").css({"color":"red"});
		},function(){
			$(this).children("b").animate({"top":"10px"},100);
			$(this).children("a").css({"color":"#000"});
		
		})
	//首页卷曲的距离
		$(window).scroll(function(){
			if($(window).scrollTop()>400){
				$(".scroll-top").slideDown(1000);
			}else{
				$(".scroll-top").slideUp(1000);
			}	
				
	//首页楼层/详情页头部出现
			if($(window).scrollTop()>1230){
				$(".navigation").css("display","block");
			}else{
				$(".navigation").fadeOut(500);
			}
		})
		
	//右侧消息无缝滚动
		setInterval(function(){
		move();
		},1000);
		function move(){
			$(".tit-txt1").animate({"margin-top":"0"},2000,function(){
				$(".tit-txt1 li").first().appendTo($(".tit-txt1"));
				$(".tit-txt1").css("margin-left","30");
			})
		}			
	move();
		
		$(window).scroll(function(){
			var $sT=$(document).scrollTop();
			var $vW=$(window).height();
			$(".floor .wid100,.right .tab").each(function(i,val){
				var $offT=$(val).offset().top;
//				console.log($offT);
				if($sT+$vW/3>$offT){
					$(".navigation li:not(:last)").eq(i).css({"background-color":"#ff6f6f","color":"#fff"}).siblings("li").css({"background-color":"","color":"#333"});
					$(".dec-f li:not(:last)").eq(i).css({"background-color":"#ccc"}).siblings("li").css({"background-color":"","color":"#333"});

				}	
			})
//回到顶部
//			$(".totop").click(function(){
//			   	$("html,body").animate({
//			   		scrollTop:0
//			   	},1000);
//			   	return false;
//		   });
		})
		$(".navigation li:not(:last)").click(function(){
			var $index=$(this).index();
			var $oT=$(".floor .wid100").eq($index).offset().top;
				$("html,body").animate({
			   		scrollTop:$oT
			   	},1000);
		})	
	//.new-tm-r .tm-right图片动画
	$(".animate1 img").mouseover(function(){
		$(this).animate({
			"width":"300px",
			"height":"200px",
			"margin-left":"-10px",
			"margin-top":"-10px"
			})
	}).mouseout(function(){
		$(this).animate({
		"position":"relative",
		"width":"280px",
		"height":"180px",
		"margin-left":"0px",
		"margin-top":"0px"
		})
	})
	$(".conn img").hover(
		function(){$(this).animate({"margin-left":"10px"})},
		function(){$(this).animate({"margin-left":"0"})})
	$(".floor-maint	 img").hover(
		function(){$(this).animate({"margin-left":"4px"})},
		function(){$(this).animate({"margin-left":"0"})}) 
//轮播左右按钮出现 
	$(function(){	
		  $(".area").hover(function(){		
			  $(this).find(".qq").show(100);}	
			  ,function(){		
				$(this).find(".qq").hide(100);		
			})
		})
//轮播左右按钮效果
	$(function(){	
		  $(".prevBtn").hover(function(){		
			 if($(this).css("background-position-y")=="0px"){
			  $(this).animate({"background-position-y":"-60px"},50).fadeIn("normal");
			 }
			 },function(){		
			  $(this).css("background-position","0px 0px ")				
			})
	})
	
	

})

//购物车页面
$(function(){
	//  购物车页
	//加运算
	$(".number .add").click(function(){
		
		var $cal=$(this).parent(".calculate");
		var numres=$cal.find($(".num")).val()*1+1;	
		var unitprice=$(this).parents(".wares").find(".unitprice").html()*1;
		var totalnum=(numres*unitprice).toFixed(2);
		$(this).parents(".wares").find($(".sum")).html(totalnum);		
		if(numres>1){
			$cal.find($(".num")).val(numres);	
			$cal.find($(".sub")).css({"cursor": "default","background":" #fff"});
			$cal.find($(".sub")).attr("disabled",false);
		} 
		setTotal();	
	})
	//	减运算
	$(".number .sub").click(function(){
		var $cal=$(this).parent(".calculate");
		var numres=$cal.find($(".num")).val()*1-1;
		
		var unitprice=($(this).parents(".wares").find(".unitprice").html()*1).toFixed(2);
		var totalnum=(numres*unitprice).toFixed(2);
		$(this).parents(".wares").find($(".sum")).html(totalnum);	
		if($cal.find($(".num")).val()<=1){
			$cal.find($(".sub")).css({"cursor": "not-allowed","background":" #ccc"});
			$cal.find($(".sub")).attr("disabled",true);
			$(this).parents(".wares").find($(".sum")).html(unitprice);				
			$cal.find($(".num")).val(1);
			}else{		
			$cal.find($(".num")).val(numres);	
			$cal.find($(".sub")).css({"cursor": "default","background":" #fff"});		
			$cal.find($(".sub")).attr("disabled",false)
		}	
		setTotal()
	})

//	//购物车加减运算计算总价
	function setTotal(){
		var result=0,goodsnumber=0;
		$.each($(".oneshop"),function(){
			$.each($(this).find(".goodsCheck"),function(){
				if($(this).is(":checked")){
				var $one=$(this).parents(".wares").find(".unitprice").html()*1;
				var $two=$(this).parents(".wares").find(".num").val()*1;		
				result+=$one*$two;


				goodsnumber+=$two;
				}		
			})		
		})
		$(".zongjia").html(result.toFixed(2));	
		$(".item-num").html(goodsnumber);	
		
	}
		
	//全选按钮
	$(".allcheck").click(function(){
		if($(this).prop("checked")==true){
			$(".ck-all").prop("checked",true);	
			setTotal();	
		}else{
			$(".ck-all").prop("checked",false);
			setTotal()
		}
		setTotal()
	
	})
//点击商品按钮
	$(".goodsCheck").click(function(){
		var goods=$(this).closest(".oneshop").find(".goodsCheck");
		var goodsC=$(this).closest(".oneshop").find(".goodsCheck:checked");
		var shopC=$(this).closest(".oneshop").find(".ShopCheck")
			if(goods.length==goodsC.length){
				shopC.prop("checked",true);
				setTotal();
					if($(".ShopCheck").length==$(".ShopCheck:checked").length){
						$(".allcheck").prop("checked",true);
		//				console.log($(".ShopCheck:checked").length);
						setTotal();
					}else{
						$(".allcheck").prop("checked",false);
						setTotal();	
					}
			}else{
				shopC.prop("checked",false);
				$(".allcheck").prop("checked",false);				
				setTotal();					
			}
			if($(this).prop("checked")==true){
				var $n=$(this).parents(".account-d").find(".num").val();
				var $p=$(this).parents(".account-d").find(".unitprice").html();
				$(this).parents(".account-d").find($(".sum")).html($n*$p);
			}
	})
	//点击店铺按钮
	$(".ShopCheck").click(function(){
		if($(this).prop("checked")==true){
			$(this).parents(".oneshop").find(".goods-check").prop("checked",true);
			setTotal();
			if($(".ShopCheck").length==$(".ShopCheck:checked").length){
				$(".allcheck").prop("checked",true);
				setTotal();
			}
		}else{
			$(this).parents(".oneshop").find(".goods-check").prop("checked",false);
			$(".allcheck").prop("checked",false);m
			setTotal();
			
		}
	})
	
//商品删除按钮	
	$(".oneshop .delete").on("click",function(){
		if($(".account-d").length==1){
			$(".contair .center").remove();
			$(".nogoods").css("display","block");	
		}
		var $acclen=$(this).parents(".oneshop").find(".account-d");
		if($acclen.length==1){
		$(this).parents(".oneshop").remove();
		setTotal();
		}
		$(this).parents(".account-d").remove();
		setTotal();
		
	})	
	//选中进行商品删除按钮	
	$(".payForm .alldel").on("click",function(){
		if($(".ck-all:checked").length>=1){			
			$(this).parents(".contair").find(".bg").fadeIn("fast");
			$(this).parents(".contair").find(".modelcon").fadeIn("fast");			
			setTotal();
			showMod();
		}				
	})
		$(window).resize(function(){
		showMod();							
	})
	$(".close,.cancle").click(function(){
		$(this).parents(".model").find(".bg").fadeOut("fast");
		$(this).parents(".modelcon").fadeOut("fast")
		
	})
	$(document).keydown(function(e){				
				if(e.keyCode==27){
				$(".bg").fadeOut("normal");
				$(".modelcon").fadeOut("normal");
				}
	})		
	$(".verify").on("click",function(){
		if($(".allcheck").prop("checked")==true){
			$(".contair .center").remove();
			$(".modelcon").fadeOut("normal");
			$(".bg").fadeOut("normal");
			
			$(".nogoods").fadeIn(1000);			
		}
	$.each($(".goods-check"),function(){
		if($(this).prop("checked")==true){
			var $acclen=$(this).parents(".oneshop").find(".account-d");
			if($acclen.length==1){
			$(this).parents(".oneshop").remove();
			setTotal();
			$(".modelcon").fadeOut("normal");
			$(".bg").fadeOut("normal");
			}
			$(this).parents(".account-d").remove();
			setTotal();
		
			$(".modelcon").fadeOut("normal");
			$(".bg").fadeOut("normal");		
		}
	})	
	setTotal();
	})
	//去结算按钮
	$(".topay").bind("click mouseover",function(){
		if($(".ck-all:checked").length>=1){
			$(".topay").css("cursor","pointer");
		}else{
			$(".topay").css("cursor","not-allowed")
		}
		
	})	
	
})
	function showMod(){
		var $left=(($(window).width()-$(".modelcon").outerWidth())/2);
		var $top=(($(window).height()-$(".modelcon").outerHeight())/2);
		$(".modelcon").css({"left":$left+"px","top":$top+"px"})
	}
//闪购页面/详情页吸顶
$(function(){
	$(window).on("scroll",function(){
		var $offT=$(".tit").outerHeight()+$(".detail-index").outerHeight()+$(".nav-detail").outerHeight();
		var $detaolOT=$(".product-tab").offset().top;
		var $sP=$(window).scrollTop();
		if($sP>=$offT||$sP>=$detaolOT){
			$(".brandonly").addClass("fixedtop");
			$(".product-tab").addClass("fixedtop");
		}else{
			$(".brandonly").removeClass("fixedtop");
			$(".product-tab").removeClass("fixedtop");
			
		}
	})
})


//注册页面
$(function(){
	//短信倒计时	
	var countdown = 60;	
	$("#getCode").click(function(){
		if (countdown == 0) { 
			$(this).removeAttr("disabled"); 
			$(this).val("免费获取"); 
			countdown = 60; 
			return;
		}else{
			$(this).attr("disabled", true); 
			$(this).val("重新发送(" + countdown + ")"); 
			countdown--; 
		    }
		setTimeout(function(){
		$("#getCode").trigger("click")
	
		},1000)
				
	})
	
	
//注册页验证
	var $name=$("#register .name input");
	var $passwprd1=$("#register .pwd input");
	var $passwprd2=$("#register .pwd-c input");
	var $email=$("#register .email input");
	var $phone=$("#register .phone input");
	var $vercode=$("#register .ver-code input");
	//用户名
		$name.focus(function(){
			$(this).parents(".name").find(".vicon1").css("display","block").siblings().css("display","none");
		})
		//
		$name.blur(function(){	
			var reg=/^[a-zA-Z0-9]\w{5,17}$/;
			if(reg.test($(this).val())){
				$(this).parents(".name").find(".vicon3").css("display","block").siblings().css("display","none");
				return true;

			}else{
				$(this).parents(".name").find(".vicon2").css("display","block").siblings().css("display","none");
				return false;
			}
		})
	//密码
		$passwprd1.focus(function(){
			$(this).parents(".pwd").find(".vicon1").css("display","block").siblings().css("display","none");
		})
		function checkStrong(val){
			var result=0;
			if(val.length<6){return 0;}
			if(/\d/.test(val)){result++;}
			if(/[a-z]/.test(val)){result++;}
			if(/[A-Z]/.test(val)){result++;}
			if(val.length>20){return 3;}
			return result;			
		}
		$passwprd1.bind("keyup",function(){
			$(this).parents(".pwd").find(".vicon1").css("display","block").siblings().css("display","none");
			var val=$(this).val();
			var num=checkStrong(val);			
			switch (num){
				case 0: break;
				case 1: $(this).parents(".pwd").find(".weak").css("background","red");
				break;
				case 2: $(this).parents(".pwd").find(".mid").css("background","orange");
				break;
				case 3: $(this).parents(".pwd").find(".strong").css("background","green");
				break;
				default: break;
			}	
		})
		$passwprd1.blur(function(){
			if($(this).val().length<6||$(this).val().length>20){
				$(this).parents(".pwd").find(".vicon2").css("display","block").siblings().css("display","none");
				return false;
			}else{
				$(this).parents(".pwd").find(".vicon3").css("display","block").siblings().css("display","none");					
				return true;
				
			}
			
		})
		
		
	//确认密码
	
	$passwprd2.focus(function(){
			$(this).parents(".pwd-c").find(".vicon1").css("display","block").siblings().css("display","none");
		
	})
	$passwprd2.blur(function(){
		var $pwd1=$("#register .pwd-c input").val();
		var $pwd2=$("#register .pwd input").val();
		if($pwd1==$pwd2&&$pwd1!=""){
			$(this).parents(".pwd-c").find(".vicon3").css("display","block").siblings().css("display","none");
			return true;
		}else{
			$(this).parents(".pwd-c").find(".vicon2").css("display","block").siblings().css("display","none");
			return false;
		}	

	})
	//手机号码phone
	$phone.focus(function(){
			$(this).parents(".phone").find(".vicon1").css("display","block").siblings().css("display","none");
		
	})
	$phone.blur(function(){
		var $reg=/(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/;
		if($reg.test($(this).val())){
			$(this).parents(".phone").find(".vicon3").css("display","block").siblings().css("display","none");
			return true;
		}else{
			$(this).parents(".phone").find(".vicon2").css("display","block").siblings().css("display","none");	
			return false;
		}	
	})
	//验证码
	$vercode.on("blur",function(){
		var iptver=$(this).val().toLowerCase();
		var showver=$("#inputver").html().toLowerCase();
		console.log(iptver);console.log(showver);
		if(iptver == showver){
			$(this).parents(".ver-code").find(".vicon3").css("display","block").siblings().css("display","none");			
		}
		else{
			$(this).parents(".ver-code").find(".vicon2").css("display","block").siblings().css("display","none");						
		}
		
	})
		
	//邮箱
	$email.focus(function(){
			$(this).parents(".email").find(".vicon1").css("display","block").siblings().css("display","none");
		
	})
	$email.blur(function(){
		var $reg=/^\w+@\w+\.([a-zA-z]{2,3}){1,2}$/;
		if($reg.test($(this).val())){
			$(this).parents(".email").find(".vicon3").css("display","block").siblings().css("display","none");
			return true;
		}else{
			$(this).parents(".email").find(".vicon2").css("display","block").siblings().css("display","none");
			return false;
		}	
	})
	//同意注册
	var flag=true;
	$(".click").click(function(){
		
		if(flag==true){
			$(this).addClass("bgimg");
			flag=false;
		}else if(flag==false){
			$(this).removeClass("bgimg");
			flag=true;
		}
	})

	function check(){		
		if(!$name.blur()||!$passwprd1.blur()){
			return false;
		}else{			
			return true;
		}		
	}
	$(".bind").click(function(){
			var $name=$(".name #name").val();
			var $pwd=$(".pwd #pwd").val();
			$.post("http://datainfo.duapp.com/shopdata/userinfo.php",{"userID":$name,"password":$pwd,"status":"register"},
			function(res,s,xhr){
				console.log(res);
				if(res==1){
					window.location.href="login.html";
				}
				if(res==0){//重名
					$(".vicon4").css("display","block").siblings().css("display","none");
				}
			})
		})	
})
//登录页面
$(function(){
	$(".login").click(function(){
		var $name=$("#username").val();
		var $pwd=$("#pwd").val();
		if($name==""&&$pwd==""||$name==""){
			
			$(".smallTip1").css("display","block").siblings().css("display","none");
			window.location.href="login.html";
		}
		$.post("http://datainfo.duapp.com/shopdata/userinfo.php",{"userID":$name,"password":$pwd,"status":"login"},
		function(res,s,xhr){
			if(res==2){
			$(".smallTip4").css("display","block").siblings().css("display","none");
			}else if(res==0){
			$(".smallTip3").css("display","block").siblings().css("display","none");
			}else{
				window.location.href="index.html";
				$(".pleaselogin").empty();
				$(".pleaselogin").html("欢迎"+$name+"登陆")
			}	
		})
	})
			
})


//详情页放大镜
$(function(){	
		//	活动倒计时
	function move1(){
		var pre=new Date();
		var fur=new Date("2018/1/1");
		var time=fur-pre;
		var day=parseInt(time/1000/60/60/24);
		var hour=parseInt(time/1000/60/60%24);
		var sec=parseInt(time/1000%60);
	    var min = parseInt(time / 1000 / 60 % 60);
		$(".day").html(day);
		$(".hour").html(hour);
		$(".min").html(min);
		$(".sec").html(sec);
	}	
	move1();
	setInterval(move1,1000);	   
	$(".sizelist li,.color-list li").click(function(){
		$(this).addClass("select-c").siblings("li").removeClass("select-c")
	})	   
	  	   
	$(".good").mousemove(function(e){
		$(".slider-b").css("display","block");
		$(".bigimg").css("display","block");
		var x=e.pageX-$(".smallimg").offset().left-$(".slider-b").outerWidth()/2;//
		var y=e.pageY-$(".smallimg").offset().top-$(".slider-b").outerHeight()/2;
		var maxX=$(".smallimg").width()-$(".slider-b").width();
		var maxY=$(".smallimg").height()-$(".slider-b").height();
		var multipx=x/maxX;//放大
		var multipy=y/maxY;//放大
		x=x>0? x:0;
		x=x<maxX? x:maxX;
		y=y<maxY? y:maxY;
		y=y>0? y:0;
		$(".slider-b").css({"top":y+"px","left":x+"px"});
		$(".bigimg").scrollLeft(x*multipx);
		$(".bigimg").scrollTop(y*multipy);		
	}).mouseleave(function(){
			$(".slider-b").css("display","none");
			$(".bigimg").css("display","none");
		})

})
//详情页购买
$(function(){
	$(".topurchase").on("click",function(){
		$(".model2 .bg").fadeIn("fast")
		$(".model2 .modelcon").fadeIn("fast");
		showMod();
		$(".goodnum").html($(".numDress").val());
		$(".goodcolor").html($(".color-list .select-c").html());
		$(".goodsize").html($(".sizelist .select-c").html());		
		$(".goodsname").html($(".mark").html());
	})
	$(".toSure1").click(function(){
		window.location.href="shoppngcart.html";
	})
	$(".toCancle1").click(function(){
		$(".modelcon").fadeOut("normal");
		$(".bg").fadeOut("normal");	
	})

})
////加入购物车
//$(".buy .addTo").on("click",function(){
//		var	startX=$(".li-active img").offset().left;
//		var	startY=$(".li-active img").offset().top;
//		var	endX=$("#cartnum").offset().left;
//		var	endY=$("#cartnum").offset().top;
//		var imgclone=$(".li-active img").clone();
//		imgclone.css({"opacity":"0.7","z-index":999,"position":"absolute","left":"0","top":"0"});
//		imgclone.appendTo($(".li-active"));
//		var a=0.001,c=0;
//		var b=(endY-a*endX*endX)/endX;
//		var speed=0;
//		var timer=setInterval(function(){
//			var resL=startX+speed+"px";
//			var resT=a*resL*resL+b*resL+"px";
//			imgclone.css({"left":resL,"top":resT});
//			speed+=10;		
//			if(resL>endX){
//				clearInterval(timer);
//			}			
//		},10)
//	})


//详情页 tab切换
$(function(){
	//	详情页
	$(".product-tab li").bind("click",function(){
		$(this).css({"background":"#fff","border-bottom":"2px solid #fff"}).siblings("li").css({"background":"#eaeaea", "border-bottom":"1px solid #ccc"});
   		return false;
   		$(this).parent("ul")
   		
	})
	 $(".cla").mouseover(function(){
	 	 $(this).find(".show").css("display","block");

	 }).mouseout(function(){
	 	 $(this).find(".show").css("display","none");	 	
	 })
})
//点击图片进行切换
$(function(){
			
		$(".jqzoom").on("click mouseover",".dec-i li img",function(){
			var nowSrc=$(this).attr("src");
			$(".good img").attr("src",nowSrc);
       		$(this).parent().addClass('li-active').siblings().removeClass('li-active');  
		
		})
		$(".jqzoom").on("click",".spec-scroll .prev",function(){		
			$(".dec-i").css("margin-left","0px");
		})
		$(".jqzoom").on("click",".spec-scroll .next",function(){
			$(".dec-i").css("margin-left","-90px");
		})
		$(".select-black").on("click",function(){
			$(".jqzoom").empty();
			$(".jqzoom").load("js/black.html");
		})
		$(".select-red").on("click",function(){
			$(".jqzoom").empty();
			$(".jqzoom").load("js/red.html")
		})	
		
		
		
		$(".addNum").click(function(){		
	var $cal=$(this).parent(".calculate");
	var numres=$cal.find($(".numDress")).val()*1+1;			
	if(numres>1){
		$cal.find($(".numDress")).val(numres);	
		$cal.find($(".subNum")).css({"cursor": "default","background":" #fff"});
		$cal.find($(".subNum")).attr("disabled",false);
	} 
})
//	减运算
$(".subNum").click(function(){
	var $cal=$(this).parent(".calculate");
	var numres=$cal.find($(".numDress")).val()*1-1;
	if($cal.find($(".numDress")).val()<=1){
		$cal.find($(".subNum")).css({"cursor": "not-allowed","background":" #ccc"});
		$cal.find($(".subNum")).attr("disabled",true);	
		$cal.find($(".numDress")).val(1);
		}else{		
		$cal.find($(".numDress")).val(numres);	
		$cal.find($(".subNum")).css({"cursor": "default","background":" #fff"});		
		$cal.find($(".subNum")).attr("disabled",false)
	}	
})
	
})


////评论接口
$(function(){	
	$.ajax({
		type:"get",
		url:"https://club.jd.com/discussion/getProductPageImageCommentList.action?productId=1085328",
		async:true,
		dataType:"jsonP",
		success:function(res){	
			$.each(res.imgComments.imgList, function(i,v) {	
				var $uname=$("<span class='usename'></span>")
				var $userimg=$("<img class='userimg'/>");
				var $headimg=$("<a href='' class='headimg'></a>");
				var $userinfo=$("<div class='userinfo fl'></div>");
				var $li=$("<li class='comlist'></li>");
				$li.appendTo($(".commentlist"));
				$userinfo.appendTo($li);
				$headimg.appendTo($userinfo);
				$userimg.appendTo($headimg);
				$uname.appendTo($userinfo);
				$userimg.attr("src","//"+v.commentVo.userImageUrl);
				$uname.html(v.commentVo.nickname);
				var $ping=$("<div class='userchat fl'></div>");
				var $star=$("<div class='five'><span class='fr zan'>0</span><i></i><i></i><i></i><i></i><i></i></div>");
				var $ver=$("<div class='userrev'></div>")
				var $tm=$("<span class='tm fr'></span>")
				var $com=$("<span class='com-res'></span>");						
				$ping.appendTo($li);
				$star.appendTo($ping);
				$ver.appendTo($ping);
				$tm.appendTo($ver);
				$com.appendTo($ver);				
				$tm.html(v.commentVo.referenceTime);
				$com.html(v.commentVo.content);
				var $rev=$("<div class='recovery-user'></div>");
				var $imgU=$("<div class='covimg'></div>");
				var $imgUrl=$("<img	class='defimg'/>")
				$rev.appendTo($ping);
				$imgU.appendTo($rev);
				$imgUrl.appendTo($imgU);
				$imgUrl.attr("src",v.imageUrl);
				$(".recovery-user").css({"width":"400px","height":"80px","padding-top":"20px"});
				$(".defimg").css({"width":"40px","height":"50px"});
				$(".com-res").css({"width":"515px","height":"50px","display":"block"})
			})	
		}
		
	})
})