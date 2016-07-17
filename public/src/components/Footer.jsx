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
        		<h id="FooterTitle">Hit Music Group</h>
        		<h id="MainArtist">Famous Dex , Rich The Kid</h>
                <h id="SecondaryArtist">Ugly God , trill Sammy x dice soho , black youngsta</h>
    		  </div>
    	)
  	}
}

module.exports = Footer