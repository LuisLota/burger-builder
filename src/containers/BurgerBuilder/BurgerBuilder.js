import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import Aux from '../../hoc/Auxillity';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.6
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		purchasable: false,
		purchasing:false
	};

	updatePurchaseState(ingredients) {
		// get each prop count of ingridents of state ex : bacon :0, meat: 1
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		this.setState({ purchasable: sum > 0 });
	}

	addIngredientHandler = (type) => {
		// gets the prev value of ingredients
		const oldCount = this.state.ingredients[type];
		// update for new value of ingridients
		const updatedCounted = oldCount + 1;

		// use var to not mutate the state
		const updatedIngredients = {
			...this.state.ingredients
		};
		// update new state with the ingriedents respective
		updatedIngredients[type] = updatedCounted;
		// update the price what cost
		const priceAddition = INGREDIENT_PRICES[type];

		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		// update state
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return null;
		}
		const updatedCounted = oldCount - 1;

		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCounted;
		const priceDeduction = INGREDIENT_PRICES[type];

		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	};

	purchaseHandler = () =>  {
		this.setState({
			purchasing : true
		})
	}

	render() {
		const disabeldInfo = {
			...this.state.ingredients
		};

		for (let key in disabeldInfo) {
			disabeldInfo[key] = disabeldInfo[key] <= 0;
		}
		// {salad : true, meat : true ....}
		return (
			<Aux>
				<Modal show={this.state.purchasing}>
					
					<OrderSummary ingredients={this.state.ingredients} />
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabeldInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordered={this.purchaseHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
