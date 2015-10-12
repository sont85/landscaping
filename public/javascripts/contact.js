'use strict';
import React from 'react';
var Contact = React.createClass({
  render: function() {
    return <section id='contact'>
        <div className='container'>
          <div className='row text-center header wow fadeInUp'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>CONTACT DETAILS</h3>
              <hr/>
            </div>
          </div>
          <div className='row wow fadeInUp'>
            <div className='col-sm-6 col-sm-offset-3'>
              <div className='contact-wrapper text-center'>
                <h4>Call To Schedule</h4>
                <h2>Free Estimates</h2>
                <a className='btn btn-default btn-lg' href='tel:707-247-4292'>
                  <i className='fa fa-phone'></i>707-246-4292</a>
                <a className='btn btn-default btn-lg' data-target='#appointment' data-toggle='modal'>
                  <i className='fa fa-book'></i>Book Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </section>;
  }
});

module.exports = Contact;
