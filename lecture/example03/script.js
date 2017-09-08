$(document).ready(function(){
  $('.hidden').hide();
  $('button').hover(function(){
    $('.hidden').fadeIn(500);
  }, function(){
    $('.hidden').fadeOut(500);
  })
});
