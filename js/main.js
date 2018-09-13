$(window).scroll(function() {
      if ($(this).scrollTop() >= 1){
      $('.header').addClass('sticky-top smallheader');
      $('.header').removeClass('fullheader');
      } else {
      $('.header').removeClass('sticky-top smallheader');
      $('.header').addClass('fullheader');
      }
});

function checkOffset() {
    if($('.page-info').offset().top + $('.page-info').height() >= $('.page-footer').offset().top - 10)
        $('.page-info').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('.page-footer').offset().top)
        $('.page-info').css('position', 'fixed'); // restore when you scroll up
    $('.page-info').text($(document).scrollTop() + window.innerHeight);
}
$(document).scroll(function() {
    checkOffset();
});



//$('.entry').height(function(){
//    return $(this).width();
//});
