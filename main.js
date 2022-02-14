$( document ).ready(function() {
    $("#image_slider > div:gt(0)").hide();

setInterval(function() { 
  $('#image_slider > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#image_slider');
}, 3000);

  $('.services_container').css('display', 'none');
  $('.services_container').fadeIn(1000);


  });