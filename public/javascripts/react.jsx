'use strict';

var homeStyle = {
  main: {
    marginTop: '150px',
    marginBottom: '200px'
  },
  title: {
    fontFamily: 'Exo'
  },
  subtitle: {
    fontFamily: 'Exo',
    fontStyle: 'italic'
  }
};

var Home = React.createClass({
  render: function() {
    return <section id='home' style={homeStyle.main}>
        <div className='container'>
          <div className='row text-center header'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <h1 className='title' style={homeStyle.title}>Danny Lee's Landscaping</h1>
              <h4 className='subtitle' style={homeStyle.subtitle}>Beautifying the Bay Area</h4>
            </div>
          </div>
        </div>
      </section>;
  }
});
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
                <img className='center-block img-responsive' src='/images/estimate.jpg' width='300px'/>
              </a>
            </div>
          </div>
        </div>
      </section>
  }
})
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
var Work = React.createClass({
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
                    <a className='fancybox-media' href='images/landscape1.jpg'>
                      <img className='img-responsive center-block' src='images/landscape1.jpg'/>
                    </a>
                    <div className='carousel-caption'>
                      New Lawn
                    </div>
                  </div>
                  <div className='item'>
                    <a className='fancybox-media' href='images/landscape3.jpg'>
                      <img className='img-responsive center-block fancybox-media' src='images/landscape3.jpg'/>
                    </a>
                    <div className='carousel-caption'>
                      New Fence
                    </div>
                  </div>
                  <div className='item'>
                    <a className='fancybox-media' href='images/landscape2.png'>
                      <img className='img-responsive center-block fancybox-media' src='images/landscape2.png'/>
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
var Testimonials = React.createClass({
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
})
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
      </section>
  }
})
var Mandrill = React.createClass({
  render: function() {
    return <div aria-labelledby='myModalLabel' className='modal fade' id='appointment' role='dialog' tabIndex='-1'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button aria-label='Close' className='close' data-dismiss='modal' type='button'>
                <span aria-hidden='true'>&times;</span>
              </button>
              <h4 className='modal-title' id='myModalLabel'>Book Appointment</h4>
            </div>
            <form className='' id='contact_form'>
              <div className='modal-body'>
                <label htmlFor='name'>Name</label>
                <input className='form-control' id='name' name='name' placeholder='ex. John Smith' required type='text'/>
                <label htmlFor='email'>Phone Number</label>
                <input className='form-control' id='phone' name='phone' placeholder='123-456-7890' required type='tel'/>
                <label htmlFor='email'>Email</label>
                <input className='form-control' id='email' name='email' placeholder='example@mail.com' required type='email'/>
                <label htmlFor='name'>Date and Time</label>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div id='datepicker'></div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='time-wrap'>
                      <div className='input-group'>
                        <input className='form-control' id='timepicker' placeholder='time' required/>
                        <span className='input-group-btn'>
                          <button className='btn btn-success' id='timeBtn' type='button'>Pick Time</button>
                        </span>
                      </div>
                    </div>
                    <div className='time-wrap'>
                      <span className='h4' id='dateText'></span>
                      <span className='h4' id='timeText'></span>
                    </div>
                  </div>
                </div>
                <label htmlFor='msg'>Message</label>
                <textarea className='' className='form-control' cols='6' id='msg' name='msg' placeholder='Leave a short message, We will call you with confirmation.' required rows='6'></textarea>
              </div>
              <div className='modal-footer'>
                <button className='btn btn-default' data-dismiss='modal' type='button'>Close</button>
                <button className='btn btn-primary' type='submit'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
      </footer>
  }
})
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
          </ul>
        </div>
      </div>
  }
});
var App = React.createClass({
  componentDidMount: function() {
    new WOW().init();

  },
  render: function() {
    return <div>
        <Navbar/>
        <Home/>
        <Services/>
        <Pricing/>
        <Work/>
        <Testimonials/>
        <Mandrill/>
        <Footer/>
      </div>
  }
});
ReactDOM.render(<App/>, document.getElementById('root'));
