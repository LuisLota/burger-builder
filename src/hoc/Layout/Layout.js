import React, { Component } from 'react';

import Toolbar from './Navigation/Toolbar/Toolbar';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';

import Aux from '../../hoc/Auxillity/Auxillity';
import classes from './Layout.css';

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.SideDrawer };
		});
	};

	render() {
		return (
			<Aux>
				<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
				<Toolbar showSideNav={this.state.showSideDrawer} drawerToggleClicked={this.sideDrawerToggleHandler} />
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
