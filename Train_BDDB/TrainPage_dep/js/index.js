function resonsiveWidth() {
  let ww = $(window).width();
  let timer = null;
  let sec = 300;
  $(window).on('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      ww = $(window).width();
      if (ww < 600) {
        mobileBox();
      } else {
        pcBox();
      }
    }, sec);
  });
}

function mobileBox() {
  let $box3 = $('.box3');
  $('.box1').before($box3);
}

function pcBox() {
  let $box3 = $('.box3');
  $('.box2').after($box3);
}