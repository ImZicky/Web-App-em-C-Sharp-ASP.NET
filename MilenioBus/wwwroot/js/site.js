$('document').ready(function(){
  var janela = $(window).width();

  var cont = 1;

  if (janela< 992) {
    $('.quad4').css('display','none');

  }

setInterval(function(){
   if (cont < 0) {
     janela = $(window).width();
     if (janela < 992) {
         $('.quad4').css('display', 'none');
         $('#navbarTogglerDemo03').addClass("pt-3");
     } else {
         $('.quad').css({ 'background-color':'#202020dd','transition-duration':'1000ms'});
         $('.quad4').css({ 'background-color':'#202020dd','transition-duration':'1000ms'});
         $('#navbarTogglerDemo03').removeClass("pt-3");
         $('.quad4').css('display', 'block');
     }
     cont = 1;
   }
   cont--;

 }, 10);

  $('.quad').css('top','0px');

  $('#prod').mouseenter(function(){
    $('.quad4').css('top','0px');
  });
  $('.quad4').mouseleave(function(){
    $(this).css('top','-1000px');
  });

    $('.quad').css({ 'background-color':'#202020dd','transition-duration':'1000ms'});
    $('.quad4').css({ 'background-color':'#202020dd','transition-duration':'1000ms'});
    $('#navbarTogglerDemo03').css({ 'background-color':'#2e2b30dd','transition-duration':'1000ms'});
    $('.nav-link').css({ 'color':'#ffa238', 'transition-duration':'1000ms'});
    $('a').css({ 'color':'#ffa238', 'transition-duration':'1000ms'});
    $('h1.navbar-brand').css({ 'color':'#ffa238', 'transition-duration':'1000ms'});




});
