'use strict';
var Payment = React.createClass({
  getInitialState: function() {
    return {
      charging: false,
      errorMessage: null
    };
  },
  componentDidMount: function() {
    Stripe.setPublishableKey('pk_test_Ij3se1Hg07Oc3g4mlIwamvLT');
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
    } else {
      $.post('/payment', {stripeToken: response.id, amount: 2900}, function(response) {
        console.log(response);
      });
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
                <span>
                  /
                </span>
                <input data-stripe="exp-year" size="4" type="text"/>
              </div>
              <button type="submit" disabled={this.state.charging}>Submit Payment</button>
            </form>
          </div>
        </div>
      </div>
  }
});
