import React from 'react';
export default () => {

const NavRightStyle = {
	backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
	width: '42.5%',
	height: '100%',
	top: '0px',
	bottom: '0px',
	left: '0px',
	display: 'block',
	float: 'right',
}

const scrollToContact = () => {
	$('html,body').animate({
    	scrollTop: $("#BannerSec24").offset().top},
    2000);
};

const scrollToMusic = () => {
	$('html,body').animate({
    	scrollTop: $("#parallax-window-section-3").offset().top},
    2000);
};

return (
	<div class="NavLeftContainer" style={NavRightStyle}>
		<button id="NavBtnThree" onClick={scrollToMusic}>Music</button>
		<button id="NavBtnFour" onClick={scrollToContact}>Contact</button>
	</div>
)
 };