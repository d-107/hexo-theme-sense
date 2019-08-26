$('.nav-toggle-btn').click(() => {
  if ($('.site-nav').hasClass('show-nav')) {
    $('.nav-toggle-btn').children('i').html('&#xe600;');
    $('.site-nav').removeClass('show-nav');
  } else {
    $('.nav-toggle-btn').children('i').html('&#xe77c;');
    $('.site-nav').addClass('show-nav');
  }
});

$('#go-top').click(() => {
  $('body,html').animate({ scrollTop: 0 }, 700);
});

function scrollBar() {
  document.body.clientWidth > 860 && $(window).scroll(() => {
    let e = $(window).scrollTop();
    let t = $(document).height();
    let o = $(window).height();
    let a = parseInt(e / (t - o) * 100);
    $('#bar').css('width', `${a}%`);
  });
}
function goTop() {
  let e = $('#go-top');
  $(window).scroll(function () {
    $(this).scrollTop() > 200
      ? (e.addClass('go-top-is-visible'),
          $('.header').css({ 'box-shadow': '0 1px 40px -8px rgba(0, 0, 0, .5)' }),
          $(window).height() > 950
            ? $('.go-top.go-top-is-visible').css('top', '0')
            : $('.go-top.go-top-is-visible').css('top', `${$(window).height() - 950}px`))
      : ($('.go-top.go-top-is-visible').css('top', '-900px'),
        e.removeClass('go-top-is-visible go-top-fade-out'),
        $('.header').css({ 'box-shadow': 'none' }));
    $(this).scrollTop() > 1200 && e.addClass('go-top-fade-out');
  });
}

scrollBar();
goTop();
