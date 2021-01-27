import React, { Component } from 'react';
import axios from '../../axios-order';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
	componentDidMount() {
		this.props.onFetchOrders();
	}
	render() {
		let orders = <Spinner />;
		if (!this.props.loading) {
			orders = (
				<div>
					{this.props.orders.map((order) => {
						return (
							<Order
								key={order.id}
								ingredients={order.ingredients}
								price={order.price ? +order.price : 0}
							/>
						);
					})}
				</div>
			);
		}

		return <div>{orders}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		orders: state.order.orders,
		loading: state.order.loading
	};
};
const mapDisptachToProps = (dispatach) => {
	return {
		onFetchOrders: () => dispatach(actions.fetchOrders())
	};
};

export default connect(mapStateToProps, mapDisptachToProps)(withErrorHandler(Orders, axios));
