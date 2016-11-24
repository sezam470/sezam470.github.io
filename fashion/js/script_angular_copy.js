$(function(){
	$(".load_more").on("click",function(){
		$.ajax({
			url: "http://quest.pa.infobox.ru/index_copy1.html",
			dataType: "html",
			data: $.param({
		
			}),
			type: "GET",
			cashe: false,
			success: function(data){
				$(".newBoxes").append(data);
			},
			error: function(XHR, textStatus, errorThrown){
				alert("???-?? ????? ?? ???...");
			}
		});
	});
});