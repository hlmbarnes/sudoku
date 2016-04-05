$(document).ready(function(){
    $("[id^=Row]").on("click",function(e){
        alert(e.target.id);
    });
    

});