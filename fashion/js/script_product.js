$(function(){
	//Табы
	$(".tabs").simpleTabs(1);
	
	
	//Меняем количество звезд в рейтингах при нажатии на звезды
	$(".star").simpleStars();
	
	
	//Слайдер Related Product
	var owner = $('.slider_related');
	var arrowLeft = $('.slide_prod1');
	var arrowRight = $('.slide_prod2');
	var i = 0;
	
	owner.find('a').each(function(){
		$(this).attr('data', i);
		i++;
	});
	
	arrowLeft.on('click',function(){
		var firsts = owner.find('.slides_related').find('.firsts');
		
		firsts.hide();
		owner.find('a').each(function(){
			$(this).removeClass('firsts');
		});
		
		if(firsts.attr('data') == 0){
			owner.find('a').last().addClass('firsts').show();
		}else{
			firsts.prev().addClass('firsts').show();
		};
	});
	
	arrowRight.on('click',function(){
		var firsts = owner.find('.slides_related').find('.firsts');
		
		firsts.hide();
		owner.find('a').each(function(){
			$(this).removeClass('firsts');
		});
		
		if(firsts.attr('data') == i-1){
			owner.find('a').first().addClass('firsts').show();
		}else{
			firsts.next().addClass('firsts').show();
		};
	});
	
	
	//Меняем на 1 число в окне ввода при нажатии на минус и плюс
	$(".minus").on("click",function(){
		var value = parseInt($("input.amount").val());
		if(value>1){
			$("input.amount").val(value-1);
		};
	});
	
	$(".plus").on("click",function(){
		var value = parseInt($("input.amount").val());
		if(!$(this).hasClass("plus_done")){
			if(value<99){
				$("input.amount").val(value+1);
			};
		};
	});
	
	
	// Меняем число в корзине при добавлении в корзину
	$(".add_to_cart").on("click",function(){
		if(!$(this).hasClass("add_to_cart_done")){
			var value = parseInt($(".zeroicon").text());
			var amount = parseInt($("input.amount").val());
			if (amount>=0 & amount<100){
				$(".zeroicon").text(value+amount);
				parseInt($("input.amount").val(0));
				$(this).addClass("add_to_cart_done");
			};
			$(".plus").addClass("plus_done");
			$(".minus").addClass("minus_done");
		};
	});
	
	
	//Меняем цвет блока при нажатии на Compare
	$(".addblock.compare").on("click",function(){
		$(this).toggleClass("addblock_enter");
		$(this).find(".addblock_text").toggleClass("addblock_text_click");
		$(this).find(".add_addbl").find("div").toggleClass("compare_done");
	});
	
	
	
	// Меняем число в Watchlist при нажатии на Wish
	$(".addblock.wish").on("click",function(){
		if(!$(this).hasClass("addblock_enter")){
			$(this).toggleClass("addblock_enter");
			$(this).find(".addblock_text").toggleClass("addblock_text_click");
			$(this).find(".add_addbl").find("div").toggleClass("wish_done");
			var value = parseInt($(".watch_zeroicon").text());
			$(".watch_zeroicon").text(value+1);
		}else{
			$(this).toggleClass("addblock_enter");
			$(this).find(".addblock_text").toggleClass("addblock_text_click");
			$(this).find(".add_addbl").find("div").toggleClass("wish_done");
			var value = parseInt($(".watch_zeroicon").text());
			$(".watch_zeroicon").text(value-1);
		}
	});
	
	
	//Скроллирование вниз при нажатии на Add your Review и 1 Review
	$(".add_rev").on("click",function(){
		$(".tabs").simpleTabs(1);
		
		$("html, body").animate({
				scrollTop: $( ".rev_prod" ).offset().top
			}, 1000);
	});
	
	
	$(".sum_rev").on("click",function(){
		$(".tabs").simpleTabs(1);
		
		$("html, body").animate({
			scrollTop: $( ".rev_prod" ).offset().top
		}, 1000);
	});
});


/*
star.each(function(){
		$(this).attr("data", i);
		i++;
	});
*/

	
