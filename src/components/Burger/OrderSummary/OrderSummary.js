import React, { Component } from 'react';

import Aux from '../../../hoc/Auxillity/Auxillity';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	// or componentDidUpdate() // 
	// this could be a functional component, doesnt have to be a class // 

	render() {
		const ingredientsSummary = Object.keys(this.props.ingredients).map((igKey, index) => {
			return (
				<li key={igKey + index}>
					<span>{igKey} </span>: {this.props.ingredients[igKey]}
				</li>
			);
		});
		return (
			<Aux>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				{ingredientsSummary}
				<ul />
				<p>
					<strong>Total price: {this.props.price} $</strong>
				</p>
				<p>Continue to checkout ? </p>
				<Button btnType='Danger' clicked={this.props.purchaseCancelled}>
					CANCEL
				</Button>
				<Button btnType='Success' clicked={this.props.purchaseContinued}>
					CONTINUE
				</Button>
			</Aux>
		);
	}
}

export default OrderSummary;
