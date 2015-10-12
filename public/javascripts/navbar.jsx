'use strict';
var Navbar = React.createClass({
  render: function() {
    return <div className='navbar navbar-inverse navbar-fixed-top scroll-me' id='menu-section'>
        <div className='navbar-header'>
          <button className='navbar-toggle' data-target='.navbar-collapse' data-toggle='collapse' type='button'>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand' href='#'>Danny Lee Landscaping</a>
        </div>
        <div className='navbar-collapse collapse'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#services'>SERVICES</a>
            </li>
            <li>
              <a href='#pricing'>PRICING</a>
            </li>
            <li>
              <a href='#work'>PREVIOUS WORK</a>
            </li>
            <li>
              <a href='#testimonial'>TESTIMONIALS</a>
            </li>
            <li>
              <a href='#contact'>CONTACT</a>
            </li>
            <li>
              <a href='#home' data-target='#payment' data-toggle='modal'>PAYMENT</a>
            </li>
          </ul>
        </div>
      </div>
  }
});
