import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

  render() {
		return (
        	<div id="Footer" name="Footer">
            <h id="DigitalPress">Digital Press</h>
        		<div id="FooterFirstRow">
              <img src="../../images/fader.png"/><img src="../../images/uproxx.png"/><img src="../../images/hiphopdx.png"/><img src="../../images/24hourhiphop.png"/><img src="../../images/complex.png"/>
              
            </div>
            <div id="FooterSecondRow">
              <img src="../../images/VIBE.png"/><img src="../../images/XXL.png"/><img src="../../images/hotnewhiphop.png"/>
            </div>
            <div id="FooterSecondRow"></div>
    		  </div>
    	)
  	}
}

module.exports = Footer