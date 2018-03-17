$(window).scroll(function() {
      if ($(this).scrollTop() >= 1){
      $('.header').addClass('sticky-top smallheader');
      $('.header').removeClass('fullheader');
      } else {
      $('.header').removeClass('sticky-top smallheader');
      $('.header').addClass('fullheader');
      }
});

//$('.entry').height(function(){
//    return $(this).width();
//});
