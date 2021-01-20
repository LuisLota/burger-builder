import React from 'react';

import Aux from '../../../hoc/Auxillity';

const orderSummary = (props) => {
	const ingredientsSummary = Object.keys(props.ingredients).map((igKey,index) => {
		return (
			<li key = {igKey + index}>
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
            <p>Continue to checkout ? </p>
		</Aux>
	);
};

export default orderSummary;
