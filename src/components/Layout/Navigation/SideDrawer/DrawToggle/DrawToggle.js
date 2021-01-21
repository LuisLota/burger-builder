import React from 'react';

const toggleButton = (props) => {
	return (
		<button sideNavShow={props.openSideNav} onClick={props.clicked}>
			MENU
		</button>
	);
};

export default toggleButton;
