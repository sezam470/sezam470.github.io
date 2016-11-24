(function($){
	$.fn.simpleTasks = function(){
		return this.each(function(){
			$(".plugin_tasks").on("click", ".workshow", function(){
				if(!$(".tasks").hasClass("tasks_shown")){
					$(".tasks").show();
					$(".tasks").addClass("tasks_shown");
				} else {
					$(this).find(".tasks").hide();
					$(this).find(".tasks").removeClass("tasks_shown");
				};
			});
		});
	};
}(jQuery));