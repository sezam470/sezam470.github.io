$(function(){
	$(".work1").on("click", ".workshow", function(){
		if(!$(".work1").find(".tasks").hasClass("tasks_shown")){
			$(".work1").find(".tasks").show();
			$(".work1").find(".tasks").addClass("tasks_shown");
		} else {
			$(".work1").find(".tasks").hide();
			$(".work1").find(".tasks").removeClass("tasks_shown");
		};
	});
	
	$(".work2").on("click", ".workshow", function(){
		if(!$(".work2").find(".tasks").hasClass("tasks_shown")){
			$(".work2").find(".tasks").show();
			$(".work2").find(".tasks").addClass("tasks_shown");
		} else {
			$(".work2").find(".tasks").hide();
			$(".work2").find(".tasks").removeClass("tasks_shown");
		};
	});
});