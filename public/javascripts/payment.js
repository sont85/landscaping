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
              <h4 className='modal-title' id='myModalLabel'>Payment</h4>
            </div>
            <form action="/" id="payment-form" method="POST" onSubmit={this.handleSubmit}>
              <span className="payment-errors">{this.state.errorMessage}</span>
              <div className="form-row">
                <label>
                  <span>Full Name</span>
                  <input onChange={this.handleChange.bind(this, 'name')} size="20" type="text" required/>
                </label>
                <label>
                  <span>Email</span>
                  <input onChange={this.handleChange.bind(this, 'email')} size="20" type="email" required/>
                </label>
                <div>
                  <label><input name='amount' onChange={this.handleAmount} type='radio' value='2900' required/>$29</label>
                  <label><input name='amount' onChange={this.handleAmount} type='radio' value='5900' required/>$59</label>
                </div>
                <label>
                  <span>Card Number</span>
                  <input data-stripe="number" size="20" type="text"/>
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>CVC</span>
                  <input data-stripe="cvc" size="4" type="text"/>
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>Expiration (MM/YYYY)</span>
                  <input data-stripe="exp-month" size="2" type="text"/>
                </label>
                <span>/</span>
                <input data-stripe="exp-year" size="4" type="text"/>
              </div>
              <button disabled={this.state.charging} type="submit">Submit Payment</button>
            </form>
          </div>
        </div>
      </div>
  }
});
module.exports = Payment;
