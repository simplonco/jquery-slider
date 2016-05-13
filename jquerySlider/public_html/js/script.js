$(document).ready(function(){
   var currentSlide= 1 ;
   setInterval(function(){
     $('#slider .slides').animate({'margin-left': '-=700px'},1000,function(){
     
     currentSlide ++;
     if(currentSlide === 3 ){
         currentSlide = 1;
         $('#slider .slides').css('margin-left' , 0);
    }
 });
       
 },2000  );
 

    


});