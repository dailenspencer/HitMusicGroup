import React from 'react';
export default () => {

const NavLeftStyle = {
	backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
	width: '42.5%',
	height: '100%',
	top: '0px',
	bottom: '0px',
	left: '0px',
	display: 'inline',
	float: 'left'
}





return (
	<div class="NavLeftContainer" style={NavLeftStyle}>
		<button id="NavBtnOne">Tour Dates</button>
		<button id="NavBtnTwo">Shop</button>

	</div>
)
 };