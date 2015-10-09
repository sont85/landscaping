'use strict';
var $;
function mail() {
  $('#contact_form').submit(function(e) {
    e.preventDefault();
    var email = $('#email').val();
    var name = $('#name').val();
    var msg = $('#msg').val();
    var phone = $('#phone').val();
    var date = $('#datepicker').datepicker( 'getDate' );
    var time = $('#timepicker').val();
    console.log('Phone Number: ' + phone + '\n' + 'Appointment Time' + date + '-' + time + '\n' + msg);
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
          'text': 'Phone Number: ' + phone + '\n' + 'Appointment Time' + date + ' ' + time + '\n' + msg,
          'to': [{
            'email': 'vietlyfe@gmail.com',
            'name': 'Danny Lee',
            'type': 'to'
          }]
        }
      }
    }).done(function(response) {
      console.log(response);
      $('#name').val(''); // reset field after successful submission
      $('#email').val(''); // reset field after successful submission
      $('#msg').val(''); // reset field after successful submission
      $('#phone').val(''); // reset field after successful submission
      $('#appointment').modal('hide');
      swal('Message Sent', 'Danny Lee will get back to you within 24hours', 'success');
    }).fail(function(response) {
      swal('Message Fail', 'Please try again', 'error');
    });
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
function datepicker() {
  var $timepicker = $('#timepicker');
  $timepicker.timepicker({
    minTime: '9:00am',
    maxTime: '7:00pm',
    showDuration: false
  }).on('change', function(e) {
    $('#timeText').text($(this).val());
  });
  $('#datepicker').datepicker({
    onSelect: function(date) {
      $('#dateText').text(date);
    }
  });
  $('#timeBtn').on('click', function(){
    $timepicker.timepicker('show');
  });
}

function init() {
  slideshow();
  carousel();
  scroll();
  mail();
  datepicker();
  $('a.fancybox-media').fancybox();
}
$(document).ready(init);
