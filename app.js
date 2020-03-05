$("ul").on("click","li",function(){
    $(this).toggleClass("completed");       
});

$("ul").on("click","span",function(){
    //$(this).parent().remove();
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
})

$("input[type='text']").keypress(function(e){
    if(e.which===13){
        let i = $(this).val();
        let i2 = i.charAt(0).toUpperCase() + i.slice(1);
      
        $("input[type='text']").val("")
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+i2+"</li>");    
        e.preventDefault();
       
        
    }
});
