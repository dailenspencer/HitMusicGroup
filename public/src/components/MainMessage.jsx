import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


                             
class MainMessage extends React.Component {
	constructor(props){
		super(props)

		this.state = {

		}
	}

	componentDidMount() {
		var divs = $('#MainMessageText');
		
		window.addEventListener("scroll",function(){
			var scrollTop = $(window).scrollTop();
    		var height = $(window).height();
        	$('#MainMessageText, #NavBar').css({
        	  'opacity': ((height - scrollTop) / height)
    		}); 
    		$('#parallax-window, #NavBar').css('-webkit-filter', 'blur('+ scrollTop/60+'px)');
      	});  
	}	

	render() {
		return (
    		<h id="MainMessageText"></h>
		)
  	}
}

module.exports = MainMessage;