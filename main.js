$( document ).ready(function() {
    $("#image_slider > div:gt(0)").hide();

setInterval( ()=> { 
  $('#image_slider > div:first')
  .fadeOut(500)
  .next()
  .fadeIn(500)
  .end()
  .appendTo('#image_slider');
}, 3000);

$('.services_column').css('display', 'none').fadeIn(2000);



  });