$(function(){
//Вываливающийся список из-под черной стрелки
	$(".black_arrow").on("mouseenter", function(){
		$(this).find(".nav_show").stop(0).slideDown();
		}).on("mouseleave",function(){
		$(this).find(".nav_show").stop(0).slideUp();
		});
		
	
//Вываливающийся список из-под серой стрелки
	$(".small_arrow_menu").on("mouseenter", function(){
		$(this).find(".showCurrency").stop(0).slideDown();
		}).on("mouseleave",function(){
		$(this).find(".showCurrency").stop(0).slideUp();
		});
		
//Выдвигающееся меню поиска
	$(".search").on("click",function(){
		if(!$(this).hasClass("block_")){
			$(".header-2").find(".inputSearch").show();
			$(this).toggleClass("block_");
		} else{
			$(".header-2").find(".inputSearch").hide();
			$(this).toggleClass("block_");
		};	
	});
});
