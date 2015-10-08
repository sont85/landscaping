// $('.fancybox-media').fancybox({
//   openEffect: 'elastic',
//   closeEffect: 'elastic',
//   helpers: {
//     title: {
//       type: 'inside'
//     }
//   }
// });
function mail() {
  $('#contact_form').submit(function() {
    var email = $('#email').val(); // get email field value
    var name = $('#name').val(); // get name field value
    var msg = $('#msg').val(); // get message field value
    var phone = $('#phone').val(); // get message field value
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': '7WmAYyvrBPxYbj6OUcGv_Q',
        'message': {
          'from_email': email,
          'from_name': name,
          'headers': {
            'Reply-To': email
          },
          'subject': 'Website Contact Form Submission',
          'text': 'Phone Number: ' + phone + '\n' + msg,
          'to': [{
            'email': 'vietlyfe@gmail.com',
            'name': 'Danny Lee',
            'type': 'to'
          }]
        }
      }
    }).done(function(response) {
      console.log(response)
      $('#name').val(''); // reset field after successful submission
      $('#email').val(''); // reset field after successful submission
      $('#msg').val(''); // reset field after successful submission
      $('#phone').val(''); // reset field after successful submission
      $('#appointment').modal('hide');
      swal("Message Sent", "Danny Lee will get back to you within 24hours", "success")
    }).fail(function(response) {
      swal("Message Fail", "Please try again", "error")
    });
    return false; // prevent page refresh
  });
}

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
  mail();
}
$(document).ready(init);
