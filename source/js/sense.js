$('.nav-toggle-btn').click(() => {
  if ($('.site-nav').hasClass('hide-nav')) {
    $('.nav-toggle-btn').children('i').html('&#xe77c;');
    $('.site-nav').removeClass('hide-nav');
  } else {
    $('.nav-toggle-btn').children('i').html('&#xe600;');
    $('.site-nav').addClass('hide-nav');
  }
});
