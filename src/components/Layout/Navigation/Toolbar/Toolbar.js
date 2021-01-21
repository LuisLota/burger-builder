import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import ToogleButton from '../SideDrawer/DrawToggle/DrawToggle';

import Logo from '../../../Logo/Logo';
import classes from './Toolbar.css';

const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<div>
			<ToogleButton showSideNav={props.showSideNav} clicked={props.drawerToggleClicked} />
		</div>
		<div className={classes.Logo}>
			<Logo />
		</div>
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default toolbar;
