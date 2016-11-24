(function($){
	$.fn.simpleStars = function(){
		return this.each(function(){
			$(".plugin_stars").on("click",".star",function(){
				$(this).nextAll().removeClass("star_yes").addClass("star_no");
				$(this).removeClass("star_no").addClass("star_yes");
				$(this).prevAll().removeClass("star_no").addClass("star_yes");
			});
		});
	};
}(jQuery));

