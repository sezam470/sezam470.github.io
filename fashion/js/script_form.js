(function($){
    $.fn.validate = function(){
        return this.each(function(){
            var form = this;
 
            function validation(form){
                var error = 0;
                $(form).find("input[type=text].validate").each(function(){
                    if($(this).val() == ""){
                        $(this).addClass("error");
                        error++;
                    } else {
                        $(this).removeClass("error");
                    }
                });
                $(form).find("input[type=checkbox].validate").each(function(){
                    if(!$(this).prop("checked")){
                        $(this).addClass("error");
                        error++;
                    } else {
                        $(this).removeClass("error");
                    }
                });
 
                if(error){
                    return false;
                } else {
                    return true;
                }
            }
 
            $(form).on("submit", function(){
                if(validation(form)){
                    return true;
                } else {
                    return false;
                }
            });
            $(form).find("input.validate").on("keyup change paste", function(){
                validation(form);
            });
        });
    };
}(jQuery));
$(function(){
    $(".form").validate();
});