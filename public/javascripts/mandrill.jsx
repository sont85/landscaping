var Mandrill = React.createClass({
  componentDidMount: function() {
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
        $('#name').val('');
        $('#email').val('');
        $('#msg').val('');
        $('#phone').val('');
        $('#appointment').modal('hide');
        swal('Message Sent', 'Danny Lee will get back to you within 24hours', 'success');
      }).fail(function(response) {
        swal('Message Fail', 'Please try again', 'error');
      });
    });


    //timepicker
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
  },
  render: function() {
    return <div aria-labelledby='myModalLabel' className='modal fade' id='appointment' role='dialog' tabIndex='-1'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button aria-label='Close' className='close' data-dismiss='modal' type='button'>
                <span aria-hidden='true'>&times;</span>
              </button>
              <h4 className='modal-title' id='myModalLabel'>Book Appointment</h4>
            </div>
            <form className='' id='contact_form'>
              <div className='modal-body'>
                <label htmlFor='name'>Name</label>
                <input className='form-control' id='name' name='name' placeholder='ex. John Smith' required type='text'/>
                <label htmlFor='email'>Phone Number</label>
                <input className='form-control' id='phone' name='phone' placeholder='123-456-7890' required type='tel'/>
                <label htmlFor='email'>Email</label>
                <input className='form-control' id='email' name='email' placeholder='example@mail.com' required type='email'/>
                <label htmlFor='name'>Date and Time</label>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div id='datepicker'></div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='time-wrap'>
                      <div className='input-group'>
                        <input className='form-control' id='timepicker' placeholder='time' required/>
                        <span className='input-group-btn'>
                          <button className='btn btn-success' id='timeBtn' type='button'>Pick Time</button>
                        </span>
                      </div>
                    </div>
                    <div className='time-wrap'>
                      <span className='h4' id='dateText'></span>
                      <span className='h4' id='timeText'></span>
                    </div>
                  </div>
                </div>
                <label htmlFor='msg'>Message</label>
                <textarea className='' className='form-control' cols='6' id='msg' name='msg' placeholder='Leave a short message, We will call you with confirmation.' required rows='6'></textarea>
              </div>
              <div className='modal-footer'>
                <button className='btn btn-default' data-dismiss='modal' type='button'>Close</button>
                <button className='btn btn-primary' type='submit'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  }
});
