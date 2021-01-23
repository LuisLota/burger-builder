import React, { Component } from 'react';
import axios from '../../axios-order';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
	state = {
		orders: [],
		loading: true
	};
	componentDidMount() {
		axios
			.get('/orders.json')
			.then((res) => {
				const fetchedOrders = [];
				for (let key in res.data) {
					fetchedOrders.push({
						...res.data[key],
						id: key
					});
				}
				this.setState({ loading: false, orders : fetchedOrders });
			})
			.catch((err) => {
				this.setState({ loading: false, orders : this.state.orders });
			});
	}
	render() {
		return (
			<div>
                {this.state.orders.map(order => {
                   return <Order key = {order.id}
                    ingredients = {order.ingredients}
                    price = { order.price ? +order.price : 0}
                    />
                })}

			</div>
		);
	}
}

export default withErrorHandler(Orders,axios);
