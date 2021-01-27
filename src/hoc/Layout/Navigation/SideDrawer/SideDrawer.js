import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../../components/UI/Backdrop/Backdrop';
import Aux from '../../../../hoc/Auxillity/Auxillity';

import Logo from '../../../../components/Logo/Logo';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
	let attachedClasses = [ classes.SideDrawer, classes.Close ];
	if (props.open) {
		attachedClasses = [ classes.SideDrawer, classes.Open ];
	}

	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')} onClick={props.closed}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems isAuthenticated = {props.isAuth} />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
