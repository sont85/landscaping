'use strict';
import React from 'react';
var Work = React.createClass({
  componentDidMount: function() {
    $('a.fancybox-media').fancybox();
  },
  render: function() {
    return <section id='work'>
        <div className='container'>
          <div className='row text-center header wow fadeInUp'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>Previous Work</h3>
              <hr/>
            </div>
          </div>
          <div className='row wow fadeInUp'>
            <div className='col-xs-12 col-sm-8 col-sm-offset-2'>
              <div className='carousel slide' data-ride='carousel' id='carousel-example-generic'>
                <ol className='carousel-indicators'>
                  <li className='active' data-slide-to='0' data-target='#carousel-example-generic'></li>
                  <li data-slide-to='1' data-target='#carousel-example-generic'></li>
                  <li data-slide-to='2' data-target='#carousel-example-generic'></li>
                </ol>
                <div className='carousel-inner' role='listbox'>
                  <div className='item active'>
                    <a className='fancybox-media' href='public/images/landscape1.jpg'>
                      <img className='img-responsive center-block' src='public/images/landscape1.jpg'/>
                    </a>
                    <div className='carousel-caption'>
                      New Lawn
                    </div>
                  </div>
                  <div className='item'>
                    <a className='fancybox-media' href='public/images/landscape3.jpg'>
                      <img className='img-responsive center-block fancybox-media' src='public/images/landscape3.jpg'/>
                    </a>
                    <div className='carousel-caption'>
                      New Fence
                    </div>
                  </div>
                  <div className='item'>
                    <a className='fancybox-media' href='public/images/landscape2.png'>
                      <img className='img-responsive center-block fancybox-media' src='public/images/landscape2.png'/>
                    </a>
                    <div className='carousel-caption'>
                      New Yard
                    </div>
                  </div>
                </div>
                <a className='left carousel-control' data-slide='prev' href='#carousel-example-generic' role='button'>
                  <span aria-hidden='true' className='glyphicon glyphicon-chevron-left'></span>
                  <span className='sr-only'>Previous</span>
                </a>
                <a className='right carousel-control' data-slide='next' href='#carousel-example-generic' role='button'>
                  <span aria-hidden='true' className='glyphicon glyphicon-chevron-right'></span>
                  <span className='sr-only'>Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  }
});

module.exports = Work;
