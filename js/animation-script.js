$(function(){
        new WOW().init();
});

$(document).ready(function(){
    
          
    $(function() {
          $(".navbar").click(function() {
            $(".slideicon").addClass("animated slideInRight").one('animationend',function(){
                $(this).removeClass("animated slideInRight");
            });
          });
        });
        
     $(function() {
          $('.navbar').click(function() {
            $(".zoomin").addClass("animated zoomIn").one('animationend',function(){
                $(this).removeClass("animated zoomIn");
            });
          });
        });
    
    $(function() {
          $('.sidebar').click(function() {
            $("#about-cont").addClass("animated slideInRight").one('animationend',function(){
                $(this).removeClass("animated slideInRight");
            });
          });
        });
    


});