$(document).ready(function() {

  /*Put your Javascript code here*/

  $('.fancybox').fancybox();
  
  $('.carousel').carousel({
    interval: 10000
  })
  
  $(".carousel-inner").mouseenter(function() { 
                $('.carousel').carousel('pause'); 
        }).mouseleave(function() { 
                $('.carousel').carousel('cycle'); 
        }); 
    
    
});



    