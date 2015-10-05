// $('.fancybox-media').fancybox({
//   openEffect: 'elastic',
//   closeEffect: 'elastic',
//   helpers: {
//     title: {
//       type: 'inside'
//     }
//   }
// });
function scroll() {
$('.scroll-me a').bind('click', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top
  }, 1200, 'easeInOutExpo');
  event.preventDefault();
});
}

function carousel() {
  $('#carousel-slider').carousel({
    interval: 6000
  });
}
function slideshow() {
  $.vegas('slideshow', {
    backgrounds: [{
      src: './assets/img/landscape1.jpg',
      fade: 1000,
      delay: 9000
    }, {
      src: './assets/img/landscape2.png',
      fade: 1000,
      delay: 9000
    }, {
      src: './assets/img/landscape3.jpg',
      fade: 1000,
      delay: 9000
    }]
  })('overlay', {
    src: 'assets/js/vegas/overlays/06.png'
  });
}
function init() {
  slideshow();
  carousel();
  scroll();
}
$(document).ready(init);
