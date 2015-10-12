'use strict';
import React from 'react';
var Testimonials = React.createClass({
  componentDidMount: function() {
    $('#carousel-slider').carousel({
      interval: 6000
    });
  },
  render: function() {
    return <section id='testimonial'>
        <div className='container'>
          <div className='row text-center header'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 wow fadeInUp'>
              <h3>Testimonials</h3>
              <hr/>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 '>
              <div className='carousel slide wow fadeInUp' data-ride='carousel' id='carousel-slider'>
                <div className='carousel-inner text-center'>
                  <div className='item active'>
                    <h3>Testamonial #1</h3>
                    <q className='h5'>I am extremely happy with my new lawn and sprinkler system. Danny did a great job with the installation process.</q>
                    <br/>
                    <cite>-Rob Jenkins</cite>
                  </div>
                  <div className='item'>
                    <h3>Testimonial #2</h3>
                    <q className='h5'>Danny Lee has been maintaining my lawn for years. He shows up twice a month and always provide professional and friendly service.</q>
                    <br/>
                    <cite>-Alex Lopez</cite>
                  </div>
                  <div className='item'>
                    <h3>Testimonial #3</h3>
                    <q className='h5'>My backyard was a mess with overgrown bushes and dead trees. After my free consultation, Danny quickly got started on the clean-up. I am extremely satisfied with the result.</q>
                    <br/>
                    <cite>-Lily Johnson</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row wow fadeInUp'>
            <div className='col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-8 col-lg-offset-2 scroll-me text-center'>
              <h5>Quality Service and Low Price</h5>
              <h3 className='guranteed'>Guranteed!</h3>
            </div>
          </div>
        </div>
      </section>
  }
});

module.exports = Testimonials
