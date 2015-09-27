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
      src: 'http://jimesperlandscaping.com/wp-content/uploads/2013/05/image9.jpg',
      fade: 1000,
      delay: 9000
    }, {
      src: 'http://dtelga.com/wp-content/uploads/2014/03/Landscaping-1.png',
      fade: 1000,
      delay: 9000
    }, {
      src: 'http://www.arborlawnandtree.com/images/154099460.jpg',
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
