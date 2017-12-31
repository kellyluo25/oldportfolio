$(window).scroll(function() {
      if ($(this).scrollTop() > 20){
      $('.header').addClass('sticky-top smallheader');
      $('.header').removeClass('fullheader');
      } else {
      $('.header').removeClass('sticky-top smallheader');
      $('.header').addClass('fullheader');
      }
});