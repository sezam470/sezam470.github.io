$(function(){
//Адаптив: при нажатии на кнопку вываливается скрытое меню
	$(".arrow_header").on("click",function(){
		$(".menu_hidden").addClass("visible");
		$(".arrow_header").hide();
		$(".content").addClass("hidden");
		$(".header").addClass("hidden");
		$(".footer").addClass("hidden");
		$("body").css({"overflow":"hidden"});
		
	});
	
	
	//Исчезает скрытое меню
	$("#arrow_menu").on("click",function(){
		$(".menu_hidden").removeClass("visible");
		$(".arrow_header").show();
		$(".content").removeClass("hidden");
		$(".header").removeClass("hidden");
		$(".footer").removeClass("hidden");
		$("body").css({"overflow":"visible"});
		
	});
	
	$(".currency").on("click", function(){
		if(!$(this).hasClass("currency_done")){
			$(this).find(".showCurrency").show();
			$(this).addClass("currency_done");
		}else{
			$(this).find(".showCurrency").hide();
			$(this).removeClass("currency_done");
		};
	});
	
});