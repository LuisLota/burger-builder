import React from 'react';

import Aux from '../../../hoc/Auxillity';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientsSummary = Object.keys(props.ingredients).map((igKey, index) => {
		return (
			<li key={igKey + index}>
				<span>{igKey} </span>: {props.ingredients[igKey]}
			</li>
		);
	});
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			{ingredientsSummary}
			<ul />
			<p><strong>Total price: {props.price} $</strong></p>
			<p>Continue to checkout ? </p>
			<Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
			<Button btnType="Success"  clicked={props.purchaseContinued}>CONTINUE</Button>

		</Aux>
	);
};

export default orderSummary;
