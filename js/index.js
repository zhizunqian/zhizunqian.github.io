$(function(){
	// ------------------------------侧导航
	$(".button-collapse").bind("tap",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"0%"});
	})
	$(".side-nav").bind("tap",function(e){
		e.stopPropagation();
	})
	$(document).bind("tap swipeLeft",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"-105%"});
	})
	$(document).bind("swipeRight",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"0%"});
	})
	// -------------------------------技能
	$(".ch-img-1").bind("mouseover",function(){
		move(".ch-info >.ch-img-1").set("transform","scale(0)").end();
		move(".ch-info .ch-img-1+.ch-info-back").set("opacity",0.2).then().set("transform","scale(1)").set("opacity",1).pop().end();
	})
	$(".ch-img-1").bind("mouseout",function(){
		move(".ch-info >.ch-img-1").set("transform","scale(1)").end();
		move(".ch-info .ch-img-1+.ch-info-back").set("opacity",0).then().set("transform","scale(1.5)").set("opacity",0).pop().end();
	})
	$(".ch-img-2").bind("mouseover",function(){
		move(".ch-info > .ch-img-2").set("transform","scale(0)").end();
		move(".ch-info .ch-img-2+.ch-info-back").set("opacity",0.2).then().set("transform","scale(1)").set("opacity",1).pop().end();
	})
	$(".ch-img-2").bind("mouseout",function(){
		move(".ch-info > .ch-img-2").set("transform","scale(1)").end();
		move(".ch-info .ch-img-2+.ch-info-back").set("opacity",0).then().set("transform","scale(1.5)").set("opacity",0).pop().end();
	})
	$(".ch-img-3").bind("mouseover",function(){
		move(".ch-info >.ch-img-3").set("transform","scale(0)").end();
		move(".ch-info .ch-img-3+.ch-info-back").set("opacity",0.2).then().set("transform","scale(1)").set("opacity",1).pop().end();
	})
	$(".ch-img-3").bind("mouseout",function(){
		move(".ch-info >.ch-img-3").set("transform","scale(1)").end();
		move(".ch-info .ch-img-3+.ch-info-back").set("opacity",0).then().set("transform","scale(1.5)").set("opacity",0).pop().end();
	})
	$(".ch-img-4").bind("mouseover",function(){
		move(".ch-info >.ch-img-4").set("transform","scale(0)").end();
		move(".ch-info .ch-img-4+.ch-info-back").set("opacity",0.2).then().set("transform","scale(1)").set("opacity",1).pop().end();
	})
	$(".ch-img-4").bind("mouseout",function(){
		move(".ch-info >.ch-img-4").set("transform","scale(1)").end();
		move(".ch-info .ch-img-4+.ch-info-back").set("opacity",0).then().set("transform","scale(1.5)").set("opacity",0).pop().end();
	})
	// -----------------------------------------------product
	$("#products .portfolio-item .portfolio-link .caption").hover(function(){
		$(this).css("opacity",1);
	},function(){
		$(this).css("opacity",0);
	})
})