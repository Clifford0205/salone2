

 



$(document).ready(function() {
   var w = $(window).width();

  

      
  

   // $('.setbtn').click(function(event) {
   //    /* Act on the event */
   //    event.preventDefault();
   //    if(window.innerWidth>='768px'){
   //    $('.submenu').slideToggle();
   // }else{
   //    $('.submenu').display='block';
   // };
   



   $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });


   $('.setbtn').click(function(event) {
      /* Act on the event */
      event.preventDefault();
      $('.submenu').slideToggle()});


      $(window).resize(function() {
         wdth=$(window).width();
      
         console.log(wdth)


      if(wdth<"769"){
         $('.submenu').show();
      }else{
         $('.submenu').hide();
      };
   });

     
});