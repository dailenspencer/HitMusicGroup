import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import TextField from 'material-ui/TextField';
import {fullWhite} from 'material-ui/styles/colors';

class ParallaxSec3 extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
	    $('#parallax-window-section-3').parallax({
        	imageSrc: 'images/vinylplayer1.jpg'
      	});
	}

	render () {

		const styles = {
			errorStyle: {
				color: fullWhite,
			},
			underlineStyle: {
				borderColor: fullWhite,
				color: fullWhite
			},
			floatingLabelStyle: {
				color: fullWhite,
			},
			floatingLabelFocusStyle: {
				color: fullWhite,
			},
		};



		return (
			<div id={"parallax-window-section-3"} data-parallax={"scroll"} data-position={"top"} data-bleed={"10"} data-image-src={"images/Shanghai.png"} data-natural-width={"1400"} data-natural-height={"900"}>
			<form id={"mediaform"}method={"POST"}>
				<h id={"mediaformheader"}>Music ></h>
			</form>
    		</div>
		)
	}

}

module.exports = ParallaxSec3;