'use strict';
import React from 'react';
var Pricing = React.createClass({
  render: function() {
    return <section id='pricing'>
        <div className='container'>
          <div className='row text-center header wow fadeInUp'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>MONTHLY PRICING</h3>
              <hr/>
            </div>
          </div>
          <div className='row wow fadeInUp'>
            <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1'>
              <div className='row db-padding-btm db-attached'>
                <div className='col-sm-5 col-sm-offset-1 text-center'>
                  <div className='pricing-wrapper'>
                    <div className='price'>
                      <sup>$</sup>29
                      <h4>Once per month</h4>
                    </div>
                    <div className='type'>
                      <h2>BASIC</h2>
                    </div>
                  </div>
                </div>
                <div className='col-sm-5 col-sm-offset-1 text-center'>
                  <div className='pricing-wrapper'>
                    <div className='price'>
                      <sup>$</sup>59
                      <h4>Twice per month</h4>
                    </div>
                    <div className='type'>
                      <h2>PREMIUM</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <h3 className='text-center'>Service Includes</h3>
                <div className='col-sm-6 col-sm-offset-2'>
                  <ul>
                    <li>Mowing, edging, trimming of lawn</li>
                    <li>Pruning, trimming of hedges and shrubs</li>
                    <li>Remove fallen leaves from lawn</li>
                    <li>Blow sidewalks and other concrete areas clear of debris</li>
                  </ul>
                </div>
                <div className='col-sm-4 text-center'>
                  <a className='btn button-custom btn-custom-one' data-target='#appointment' data-toggle='modal' href='#'>BOOK APPOINTMENT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  }
});
module.exports = Pricing;
