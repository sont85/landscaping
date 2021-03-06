'use strict';
import '../styles/animate.css';
import '../styles/style.scss';
import './bootstrap.js';
import './jquery.vegas.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {Contact} from './contact'; //es6 style
import Mandrill from './mandrill';
import Navbar from './navbar';
import Payment from './payment';
import Pricing from './pricing';
import Services from './services';
import Testimonials from './testimonials';
import Work from './work';

var Home = React.createClass({
  render: function() {
    return <section id='home'>
        <div className='container'>
          <div className='row text-center header'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h1 className='title'>Danny Lee's Landscaping</h1>
              <h4 className='subtitle'>Beautifying the Bay Area</h4>
            </div>
          </div>
        </div>
      </section>;
  }
});

var Footer = React.createClass({
  render: function() {
    return <footer>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-xs-12 text-center'>
              <small className='copyright'>&copy; Danny Lee's Landscaping
                <i className='fa fa-heart'></i>
                by Luckycode.org</small>
            </div>
          </div>
        </div>
      </footer>;
  }
});

var App = React.createClass({
  componentDidMount: function() {
    new WOW().init();
    //slidshow
    $.vegas('slideshow', {
      backgrounds: [
        {
          src: 'images/landscape1.jpg',
          fade: 1000,
          delay: 9000
        }, {
          src: 'images/landscape2.png',
          fade: 1000,
          delay: 9000
        }, {
          src: 'images/landscape3.jpg',
          fade: 1000,
          delay: 9000
        }
      ]
    })('overlay', {
      src: 'images/overlay.png'
    });
    $('.scroll-me a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1200, 'easeInOutExpo');
      event.preventDefault();
    });
  },
  render: function() {
    return <div>
        <Navbar/>
        <Home/>
        <Services/>
        <Pricing/>
        <Work/>
        <Testimonials/>
        <Contact />
        <Mandrill/>
        <Payment/>
        <Footer/>
      </div>;
  }
});
ReactDOM.render(<App/>, document.getElementById('root'));
