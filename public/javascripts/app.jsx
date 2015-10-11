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
        <Mandrill/>
        <Contact />
        <Footer/>
      </div>
  }
});
ReactDOM.render(<App/>, document.getElementById('root'));
