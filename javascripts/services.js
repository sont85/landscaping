'use strict';
import React from 'react';
var Services = React.createClass({
  render: function() {
    return <section id='services'>
        <div className='container'>
          <div className='row text-center header wow fadeInUp'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h3>SERVICES</h3>
              <hr/>
            </div>
          </div>
          <div className='row wow fadeInUp'>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div className='services-wrapper'>
                <h3 className='text-center'>Lawn Services</h3>
                <img className='center-block img-responsive' src='http://www.soundviewls.com/images/sprinkler-design.jpg'/>
                <ul>
                  <li>Mowing, Edging, Shaping</li>
                  <li>New Lawn, Sod & Seed</li>
                  <li>Weeding, Trimmming, Pruning</li>
                  <li>Fertilized Garden, Flower Beds</li>
                  <li>Sprinkler System & Repair</li>
                </ul>
              </div>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div className='services-wrapper'>
                <h3 className='text-center'>Other Services</h3>
                <img className='center-block img-responsive' src='http://www.landscapingbymikepittsburgh.com/wp-content/uploads/2010/04/concrete1.jpg'/>
                <ul>
                  <li>Concrete, Brick, Block</li>
                  <li>Retaining Wall</li>
                  <li>Driveway, Sidewalk</li>
                  <li>New Fences</li>
                  <li>Decks, Patio, Flatstone</li>
                </ul>
              </div>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div className='services-wrapper'>
                <h3 className='text-center'>Removal Services</h3>
                <img className='center-block img-responsive' src='http://www.truckeetahoefirewood.com/images/tahoe-yard-cleanup-service.jpg'/>
                <ul>
                  <li>Tree Cutting</li>
                  <li>Hauling</li>
                  <li>Yard/Hill Cleanup</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-4 col-sm-offset-4'>
              <a data-target='#appointment' data-toggle='modal' href='#'>
                <img className='center-block img-responsive' src='images/estimate.jpg' width='300px'/>
              </a>
            </div>
          </div>
        </div>
      </section>
  }
});

module.exports = Services;
