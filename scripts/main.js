$('.hero-filters').on('click', '.btn', function(){
  var $el = $(this);
  if ($el.hasClass('active')) {
    $el.find('i').removeClass('fa-times').addClass('fa-plus');
  } else {
    $el.find('i').removeClass('fa-plus').addClass('fa-times');
  }
  $el.toggleClass('active');
});

$('#filter').on('click', function(){
   $('.rm').css('display', 'none');
   $('.filtered').css('display', 'block');
});

$('.fa.two').on('click', function(){
  $('.hero-feature').css('display', 'block');
});
