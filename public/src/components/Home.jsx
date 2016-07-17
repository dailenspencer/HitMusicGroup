import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll'
import Carousel from './Carousel';
import ParallaxSec2 from './ParallaxSec2';
import BannerSec2 from './BannerSec2';
import ParallaxSec3 from './ParallaxSec3';
import ParallaxSec4 from './ParallaxSec4';
import Footer from './Footer';

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scroller   = Scroll.scroller


class Home extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }
  
  componentWillUnmount() {
      [].forEach.call(document.querySelectorAll('.parallax-mirror'),function(e){
        e.parentNode.removeChild(e);
      });
  }

  render() {
    return (
        <div id="MainBody">
          <Carousel/>
          <ParallaxSec2/>
          <ParallaxSec3/>
          <ParallaxSec4/>
          <BannerSec2/>
          <Footer/>
        </div>
        
    );
  }
}

module.exports = Home;
