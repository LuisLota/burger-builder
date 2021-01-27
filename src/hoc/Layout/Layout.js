import React, { Component } from 'react';
import { connect } from 'react-redux';

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
				<SideDrawer
				isAuth = {this.props.isAuthenticated}
				open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
				<Toolbar
					isAuth = {this.props.isAuthenticated}
				showSideNav={this.state.showSideDrawer} drawerToggleClicked={this.sideDrawerToggleHandler} />
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

const mapStateToProps = state => {
	return {
	isAuthenticated : state.auth.token !== null
	};
}
export default connect(mapStateToProps)(Layout);
