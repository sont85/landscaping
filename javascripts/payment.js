'use strict';
import React from 'react';

var Payment = React.createClass({
  getInitialState: function() {
    return {
      charging: false,
      errorMessage: null,
      amount: null,
      name: null,
      email: null
    };
  },
  componentDidMount: function() {
    Stripe.setPublishableKey('pk_test_Ij3se1Hg07Oc3g4mlIwamvLT');
  },
  handleChange: function(inputName, e) {
    var nextState = {};
    nextState[inputName] = e.target.value;
    this.setState(nextState);
  },
  handleAmount: function(e) {
    this.setState({
      amount: e.target.value
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({
      charging: true
    });
    Stripe.card.createToken($('#payment-form'), this.responseHandler);
  },
  responseHandler: function(status, response) {
    console.log(status, response);
    if (response.error) {
      this.setState({
        errorMessage: response.error.message,
        charging: false
      });
      swal('Payment Failed', response.error.message , 'error');
    } else {
      $.post('/payment', {
        stripeToken: response.id,
        amount: this.state.amount,
        name: this.state.name,
        email: this.state.email
      }, (function(response) {
        console.log(response);
        if (response === 'success') {
          $('#payment').modal('hide');
          swal('Payment Successful', 'Thank you, receipt will be email to you.', 'success');
        } else {
          swal('Payment Failed', response , 'error');
          this.setState({
            charging: false
          });
        }
      }).bind(this));
    }
  },
  render: function() {
    return <div aria-labelledby='myModalLabel' className='modal fade' id='payment' role='dialog' tabIndex='-1'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button aria-label='Close' className='close' data-dismiss='modal' type='button'>
                <span aria-hidden='true'>&times;</span>
              </button>
                <img className='img-responsive center-block' src='../images/payment-stripe.png' />
            </div>
            <form action="/" id="payment-form" method="POST" onSubmit={this.handleSubmit}>
              <span className="payment-errors">{this.state.errorMessage}</span>
              <div>
                <label>Card Number</label>
                <div>
                  <input data-stripe="number" size="20" type="text"/>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-6'>
                  <label>Expiration (MM/YYYY)</label>
                  <div>
                      <input data-stripe="exp-month" size="2" type="text"/>
                    <span>/</span>
                    <input data-stripe="exp-year" size="4" type="text"/>
                  </div>
                </div>
                <div className='col-xs-6'>
                  <label>CVC</label>
                  <div>
                    <input data-stripe="cvc" size="4" type="text"/>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-6'>
                  <label>Name on card</label>
                  <div>
                    <input onChange={this.handleChange.bind(this, 'name')} size="20" type="text" required/>
                  </div>
                </div>
                <div className='col-xs-6'>
                  <label>Email</label>
                  <div>
                    <input onChange={this.handleChange.bind(this, 'email')} size="20" type="email" required/>
                  </div>
                </div>
              </div>
              <div>
                <input name='amount' onChange={this.handleAmount} type='radio' value='2900' required/>
                <label className='radio-label'>$29 Basic Plan</label>
                <input name='amount' onChange={this.handleAmount} type='radio' value='5900' required/>
                <label className='radio-label'>$59 Premium Plan</label>
              </div>
              <button className='btn-custom-two' disabled={this.state.charging} type="submit">Submit Payment</button>
            </form>
          </div>
        </div>
      </div>
  }
});
module.exports = Payment;
