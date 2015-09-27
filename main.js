$(document).ready(function() {
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
  slideshow();
});
