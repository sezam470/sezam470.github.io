(function($){
	$.fn.simpleTabs = function(ind){
		return this.each(function(){
			var tabs2 = this, i = 0, index = ind;

			function showPage(i){
				$(tabs2).find(".tab").hide();
				$(tabs2).find(".tab").eq(i).show();
				$(tabs2).children("ul").children("li").removeClass("active");
				$(tabs2).children("ul").children("li").eq(i).addClass("active");
			};

			if(typeof index == "undefined"){
				index = 0;
			}

			showPage(index);

			$(tabs2).children("ul").children("li").each(function(){
				$(this).attr("data-page", i);
				i++;                        
			});

			$(tabs2).children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});	
		});
	};
}(jQuery));