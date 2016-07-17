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



return (
	<div class="NavLeftContainer" style={NavRightStyle}>
		<button id="NavBtnThree">Music</button>
		<button id="NavBtnFour">Contact</button>
	</div>
)
 };