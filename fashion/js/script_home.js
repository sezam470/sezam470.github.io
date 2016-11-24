$(function(){
	//Слайдер
	var arrowLeft = $(".slider_butt_1.left");
	var arrowRight = $(".slider_butt_1.right");
	var timer = setInterval(banerNum, 4000);
	var i = 0;
	
	var owner = $('.slider');
	
	owner.find('.slide').each(function(){
		$(this).attr('data', i);
		i++;
	});
	
	function banerNum() {

		var firsts = owner.find('.slide.first_slide');
		
		firsts.hide();
		owner.find('.slide').each(function(){
			$(this).removeClass('first_slide')
		});
		if(firsts.attr('data') == i-1){
			owner.find('.slide').first().addClass('first_slide').show();
		} 
		else{
			firsts.next().addClass('first_slide').show();
		};
	};
	
	function slideLef() {
		
		var firsts = owner.find('.slide.first_slide');
		
		firsts.hide();
		owner.find('.slide').each(function(){
			$(this).removeClass('first_slide')
		});
		if(firsts.attr('data') == 0){
			owner.find('.slide').last().addClass('first_slide').show();
		} 
		else{
			firsts.prev().addClass('first_slide').show();
		};
	};
	
	arrowLeft.click(function(){
		clearInterval(timer);
		slideLef();
		timer = setInterval(banerNum, 4000);
	});
	
	arrowRight.click(function(){
		clearInterval(timer);
		banerNum();
		timer = setInterval(banerNum, 4000);
	});
	
	
	//Посвечиваем картинку при наведении на единицу товара
	$(".tab").on("mouseenter",".img",function(){
		$(this).find(".box_hover").show();
	}).on("mouseleave",".img",function(){
		$(this).find(".box_hover").hide();
		console.log($(this));
	});
	
	
	//Посвечиваем картинку при наведении на единицу товара
	$(".newBoxes").on("mouseenter",".boxes .img",function(){
		$(this).find(".box_hover2").show();
	}).on("mouseleave",".boxes .img",function(){
		$(this).find(".box_hover2").hide();
		console.log($(this));
	});
	
	
	$(".slider_arrow").on("mouseenter",function(){
		$(this).find(".list").stop(0).show();
	}).on("mouseleave",function(){
		$(this).find(".list").stop(0).hide();
	});
	
	
	
	//Меняем число в корзине при нажатии на иконку
	$(".product").on("click",".square.add",function(){
		if(!$(this).hasClass("done")){
			var value = parseInt($(".zeroicon").text());
			var count = $(".zeroicon").text(value+1);
			$(this).addClass("square_click");
			$(this).addClass("done");
		}
	});
	
	//Добавляем в Мои желания
	$(".product").on("click",".square.favor",function(){
		if(!$(this).hasClass("done")){
			var value = parseInt($(".watch_zeroicon").text());
			var count = $(".watch_zeroicon").text(value+1);
			$(this).addClass("square_click");
			$(this).addClass("done");
		}
	});
	
	
	//Меняем количество звезд в рейтингах при нажатии на звезды
	$(".star").simpleStars();
	
	
	//Табы
	$(".tabs2").simpleTabs(0);
	
});

$(function(){
	//Выводим товары динамически из массива(Latest и Best seller)
			$(".latest_list").on("click",function(){
				$.ajax({
					url: "http://zlydnev.ru/fashion/js/index_back1.js",
					dataType: "script",
					data: $.param({
					}),
					type: "GET",
					cashe: false,
					success: function(data){
						for(i=0;i<=8;i++){
							var newDiv1 = $("<div>").attr({"class":loadBoxes[i].class});
							var newDiv2 = $("<div>").attr({"class":"img"});
							var newDiv3 = $("<img>").attr("src",loadBoxes[i].img);
							var newDiv4 = $("<div>").attr({"class":"box_hover"});
							var newDiv5 = $("<div>").attr({"class":"addlayer"});
							var newDiv6 = $("<a>").attr({"class":"square add"});
							var newDiv17 = $("<div>").attr({"class":"add_cart_layer"});
							var newDiv7 = $("<a>").attr({"class":"square favor"});
							var newDiv18 = $("<div>").attr({"class":"add_favor"});
							var newDiv8 = $("<div>").attr({"class":"sale"});
							var newDiv9 = $("<div>").attr({"class":"new"});
							var newDiv10 = $("<div>");
							var newDiv11 = $("<div>").attr({"class":"slider_arrow right"});
							var newDiv12 = $("<div>").attr({"class":"text"});
							var newDiv13 = $("<a>").attr({"class":"title"}).attr({"href":loadBoxes[i].href});
							var newDiv14 = $("<div>").attr({"class":"price"});
							var newDiv15 = $("<div>").attr({"class":"clear"});
							var newDiv16 = $("<div>").attr({"class":"stars"});
							var newDiv19 = $("<div>").attr({"class":"star star_yes"});
							var newDiv20 = $("<div>").attr({"class":"star star_yes"});
							var newDiv21 = $("<div>").attr({"class":"star star_yes"});
							var newDiv22 = $("<div>").attr({"class":"star star_yes"});
							var newDiv23 = $("<div>").attr({"class":"star star_yes"});
						
							$(".tab.latest").append(newDiv1);
							newDiv1.prepend(newDiv2);
							newDiv2.prepend(newDiv3);
							newDiv2.append(newDiv4);
							newDiv4.prepend(newDiv5);
							newDiv5.after(newDiv6);
							newDiv6.prepend(newDiv17);
							newDiv6.after(newDiv7);
							newDiv7.prepend(newDiv18);
							newDiv2.after(newDiv8);
							newDiv8.prepend("SALE");
							newDiv8.after(newDiv9);
							newDiv9.prepend("NEW");
							newDiv9.after(newDiv10);
							if(loadBoxes[i].slider){
								newDiv10.attr({"class":loadBoxes[i].slider});
								newDiv10.prepend(newDiv11);
							};
							newDiv10.after(newDiv12);
							newDiv12.prepend(newDiv13);
							if(loadBoxes[i].name){
								newDiv13.prepend(loadBoxes[i].name);
							};
							newDiv13.after(newDiv14);
							if(loadBoxes[i].price){
								newDiv14.prepend(loadBoxes[i].price);
							};
							newDiv14.after(newDiv15);
							newDiv15.after(newDiv16);
							newDiv16.append(newDiv19);
							newDiv19.after(newDiv20);
							newDiv20.after(newDiv21);
							newDiv21.after(newDiv22);
							newDiv22.after(newDiv23);
						};
					},
					error: function(XHR, textStatus, errorThrown){
						alert("Что-то пошло не так...");
					}
				});		
			});



			$(".bestseller_list").on("click",function(){
				$.ajax({
					url: "http://zlydnev.ru/fashion/js/index_back1.js",
					dataType: "script",
					data: $.param({
					}),
					type: "GET",
					cashe: false,
					success: function(data){
						for(i=9;i<=17;i++){
						var newDiv1 = $("<div>").attr({"class":loadBoxes[i].class});
						var newDiv2 = $("<div>").attr({"class":"img"});
						var newDiv3 = $("<img>").attr("src",loadBoxes[i].img);
						var newDiv4 = $("<div>").attr({"class":"box_hover"});
						var newDiv5 = $("<div>").attr({"class":"addlayer"});
						var newDiv6 = $("<a>").attr({"class":"square add"});
						var newDiv17 = $("<div>").attr({"class":"add_cart_layer"});
						var newDiv7 = $("<a>").attr({"class":"square favor"});
						var newDiv18 = $("<div>").attr({"class":"add_favor"});
						var newDiv8 = $("<div>").attr({"class":"sale"});
						var newDiv9 = $("<div>").attr({"class":"new"});
						var newDiv10 = $("<div>");
						var newDiv11 = $("<div>").attr({"class":"slider_arrow right"});
						var newDiv12 = $("<div>").attr({"class":"text"});
						var newDiv13 = $("<a>").attr({"class":"title"}).attr({"href":loadBoxes[i].href});
						var newDiv14 = $("<div>").attr({"class":"price"});
						var newDiv15 = $("<div>").attr({"class":"clear"});
						var newDiv16 = $("<div>").attr({"class":"stars"});
						var newDiv19 = $("<div>").attr({"class":"star star_yes"});
						var newDiv20 = $("<div>").attr({"class":"star star_yes"});
						var newDiv21 = $("<div>").attr({"class":"star star_yes"});
						var newDiv22 = $("<div>").attr({"class":"star star_yes"});
						var newDiv23 = $("<div>").attr({"class":"star star_yes"});
						
						$(".tab.bestseller").append(newDiv1);
						newDiv1.prepend(newDiv2);
						newDiv2.prepend(newDiv3);
						newDiv2.append(newDiv4);
						newDiv4.prepend(newDiv5);
						newDiv5.after(newDiv6);
						newDiv6.prepend(newDiv17);
						newDiv6.after(newDiv7);
						newDiv7.prepend(newDiv18);
						newDiv2.after(newDiv8);
						newDiv8.prepend("SALE");
						newDiv8.after(newDiv9);
						newDiv9.prepend("NEW");
						newDiv9.after(newDiv10);
						if(loadBoxes[i].slider){
							newDiv10.attr({"class":loadBoxes[i].slider});
							newDiv10.prepend(newDiv11);
						};
						newDiv10.after(newDiv12);
						newDiv12.prepend(newDiv13);
						if(loadBoxes[i].name){
							newDiv13.prepend(loadBoxes[i].name);
						};
						newDiv13.after(newDiv14);
						if(loadBoxes[i].price){
							newDiv14.prepend(loadBoxes[i].price);
						};
						newDiv14.after(newDiv15);
						newDiv15.after(newDiv16);
						newDiv16.append(newDiv19);
						newDiv19.after(newDiv20);
						newDiv20.after(newDiv21);
						newDiv21.after(newDiv22);
						newDiv22.after(newDiv23);
						};
					},
					error: function(XHR, textStatus, errorThrown){
						alert("Что-то пошло не так...");
					}
				});
			});
});




/*
function callscore(){
	$(".block").text(count);
}
*/


/*//Выводим товары динамически из массива(в нижнем блоке страницы)
$(function(){
			$(".load_more").on("click",function(){
				$.get("http://quest.pa.infobox.ru/index_back2.js", function(){
					if(!$(".load_more").hasClass("done")){
						for(i=0; i<=3; i++){
							var newDiv1 = $("<div>").attr({"class":"boxes"});
							var newDiv2 = $("<div>").attr({"class":"img"});
							var newDiv3 = $("<img>").attr("src",loadBoxes[i].img);
							var newDiv4 = $("<div>").attr({"class":"box_hover2"});
							var newDiv5 = $("<div>").attr({"class":"addlayer addlayer2"});
							var newDiv6 = $("<div>").attr({"class":"square add"});
							var newDiv15 = $("<a>").attr({"class":"add_cart_layer"});
							var newDiv7 = $("<div>").attr({"class":"square favor"});
							var newDiv14 = $("<a>").attr({"class":"add_favor"});
							var newDiv8 = $("<div>").attr({"class":"sale sale_bottom"});
							var newDiv9 = $("<div>").attr({"class":"new new_bottom"});
							var newDiv10 = $("<a>").attr({"class":"title_good"}).attr({"href":loadBoxes[i].href});
							var newDiv11 = $("<div>").attr({"class":"price_good"});
							var newDiv12 = $("<div>").attr({"class":"clear"});
							var newDiv13 = $("<div>").attr({"class":"stars stars_bottom"});
							$(".newBoxes").append(newDiv1);
							newDiv1.prepend(newDiv2);
							newDiv2.prepend(newDiv3);
							newDiv2.append(newDiv4);
							newDiv4.prepend(newDiv5);
							newDiv5.after(newDiv6);
							newDiv6.prepend(newDiv15);
							newDiv6.after(newDiv7);
							newDiv7.prepend(newDiv14);
							newDiv2.after(newDiv8);
							newDiv8.prepend("SALE");
							newDiv8.after(newDiv9);
							newDiv9.prepend("NEW");
							newDiv9.after(newDiv10);
							if(loadBoxes[i].name){
								newDiv10.prepend(loadBoxes[i].name);
							};
							newDiv10.after(newDiv11);
							if(loadBoxes[i].price){
								newDiv11.prepend(loadBoxes[i].price);
							};
							newDiv11.after(newDiv12);
							newDiv12.after(newDiv13);
							$(".load_more").addClass("done");
						};
					}else if(!$(".load_more").hasClass("done2")){
						for(i=4; i<=7; i++){
							var newDiv1 = $("<div>").attr({"class":"boxes"});
							var newDiv2 = $("<div>").attr({"class":"img"});
							var newDiv3 = $("<img>").attr("src",loadBoxes[i].img);
							var newDiv4 = $("<div>").attr({"class":"box_hover2"});
							var newDiv5 = $("<div>").attr({"class":"addlayer addlayer2"});
							var newDiv6 = $("<div>").attr({"class":"square add"});
							var newDiv15 = $("<a>").attr({"class":"add_cart_layer"});
							var newDiv7 = $("<div>").attr({"class":"square favor"});
							var newDiv14 = $("<a>").attr({"class":"add_favor"});
							var newDiv8 = $("<div>").attr({"class":"sale sale_bottom"});
							var newDiv9 = $("<div>").attr({"class":"new new_bottom"});
							var newDiv10 = $("<a>").attr({"class":"title_good"}).attr({"href":loadBoxes[i].href});
							var newDiv11 = $("<div>").attr({"class":"price_good"});
							var newDiv12 = $("<div>").attr({"class":"clear"});
							var newDiv13 = $("<div>").attr({"class":"stars stars_bottom"});
							$(".newBoxes").append(newDiv1);
							newDiv1.prepend(newDiv2);
							newDiv2.prepend(newDiv3);
							newDiv2.append(newDiv4);
							newDiv4.prepend(newDiv5);
							newDiv5.after(newDiv6);
							newDiv6.prepend(newDiv15);
							newDiv6.after(newDiv7);
							newDiv7.prepend(newDiv14);
							newDiv2.after(newDiv8);
							newDiv8.prepend("SALE");
							newDiv8.after(newDiv9);
							newDiv9.prepend("NEW");
							newDiv9.after(newDiv10);
							if(loadBoxes[i].name){
								newDiv10.prepend(loadBoxes[i].name);
							};
							newDiv10.after(newDiv11);
							if(loadBoxes[i].price){
								newDiv11.prepend(loadBoxes[i].price);
							};
							newDiv11.after(newDiv12);
							newDiv12.after(newDiv13);
							$(".load_more").addClass("done2").addClass("none");
						};
					};
				});
			});
});
*/

/*$(function cartShow(){	
	$(".buy_cart").on("mouseenter", function(){
		$(this).find(".cart_hidden").stop(0).slideDown();
	}).on("mouseleave", function(){
		$(this).find(".cart_hidden").stop(0).slideUp();
	});
	
*/
