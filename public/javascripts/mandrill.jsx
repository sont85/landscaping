'use strict';
var Mandrill = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      name: '',
      msg: '',
      phone: '',
      date: '',
      time: ''
    };
  },
  componentDidMount: function() {
    var self = this;
    //timepicker
    var $timepicker = $('#timepicker');
    $timepicker.timepicker({
      minTime: '9:00am',
      maxTime: '7:00pm',
      showDuration: false
    }).on('change', function(e) {
      self.setState({
        time: e.target.value
      });
    });
    $('#timeBtn').on('click', function(){
      $timepicker.timepicker('show');
    });

    //datepicker
    $('#datepicker').datepicker({
      onSelect: function(date) {
        self.setState({
          date: date
        });
      }
    });
  },
  handleChange: function(inputName, e) {
    var nextState = {};
    nextState[inputName] = e.target.checked;
    this.setState(nextState);
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var date = $('#datepicker').datepicker( 'getDate' );
    var time = $('#timepicker').val();
    console.log('Phone Number: ' + phone + '\n' + 'Appointment Time' + date + '-' + time + '\n' + msg);
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': '7WmAYyvrBPxYbj6OUcGv_Q',
        'message': {
          'from_email': this.state.email,
          'from_name': this.state.name,
          'headers': {
            'Reply-To': this.state.email
          },
          'subject': 'Website Contact Form Submission',
          'text': 'Phone Number: ' + this.state.phone + '\n' + 'Appointment Time' + date + ' ' + time + '\n' + this.state.msg,
          'to': [{
            'email': 'sont85@gmail.com',
            'name': 'Danny Lee',
            'type': 'to'
          }]
        }
      }
    }).done(function(response) {
      console.log(response);
      this.setState({
        name: '',
        email: '',
        msg: '',
        phone: '',
        time: '',
        date: ''
      });
      $('#appointment').modal('hide');
      swal('Message Sent', 'Danny Lee will get back to you within 24hours', 'success');
    }.bind(this)).fail(function(response) {
      swal('Message Fail', 'Please try again', 'error');
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
            <form className='' onSubmit={this.handleSubmit}>
              <div className='modal-body'>
                <label htmlFor='name'>Name</label>
                <input onChange={this.handleChange.bind(this, 'name')} className='form-control' id='name' name='name' value={this.state.name} placeholder='ex. John Smith' type='text' required />
                <label htmlFor='email'>Phone Number</label>
                <input onChange={this.handleChange.bind(this, 'phone')} className='form-control' id='phone' name='phone' value={this.state.phone} placeholder='123-456-7890' type='tel' required />
                <label htmlFor='email'>Email</label>
                <input onChange={this.handleChange.bind(this, 'email')} className='form-control' id='email' name='email' value={this.state.email} placeholder='example@mail.com' type='email' required />
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
                      <span className='h4' id='dateText'>{this.state.date}</span>
                      <span className='h4' id='timeText'>{this.state.time}</span>
                    </div>
                  </div>
                </div>
                <label htmlFor='msg'>Message</label>
                <textarea onChange={this.handleChange.bind(this, 'msg')}  className='form-control' cols='6' id='msg' name='msg' placeholder='Leave a short message, We will call you with confirmation.' value={this.state.msg} rows='6' required></textarea>
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
