import React from 'react';
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class ParallaxSec4 extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
	    $('#parallax-window-section-4').parallax({
        	imageSrc: 'images/waterAndShoes.jpeg'
      	});
	}

	render () {
		return (
			<div id={"parallax-window-section-4"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-image-src={""} data-natural-width={"1400"} data-natural-height={"900"}>
			 	<Link to='/Shop' id={"parallaxSec4Link"}> Shop > </Link>
    		</div>
		)
	}

}

module.exports = ParallaxSec4;