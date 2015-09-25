$(document).ready(function() {
  function slideshow() {
    $.vegas('slideshow', {
      backgrounds: [{
        src: 'assets/img/1.jpg',
        fade: 1000,
        delay: 9000
      }, {
        src: 'assets/img/2.jpg',
        fade: 1000,
        delay: 9000
      }, ]
    })('overlay', {
      /** SLIDESHOW OVERLAY IMAGE **/
      src: 'assets/js/vegas/overlays/06.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
    });
  }
  slideshow();
});
