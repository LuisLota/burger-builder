import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
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
		totalPrice: 4
	};

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
	};

	removeIngredientHandler = (type) => {
		// gets the prev value of ingredients
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return null;
        }
		// update for new value of ingridients
		const updatedCounted = oldCount - 1;

		// use var to not mutate the state
		const updatedIngredients = {
			...this.state.ingredients
		};
		// update new state with the ingriedents respective
		updatedIngredients[type] = updatedCounted;
		// update the price what cost
		const priceDeduction = INGREDIENT_PRICES[type];

		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		// update state
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
	};

	render() {
        const disabeldInfo = {
            ...this.state.ingredients
        };

        for(let key in disabeldInfo) {
            disabeldInfo[key] = disabeldInfo[key] <= 0;
        }
        // {salad : true, meat : true ....}
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled = {disabeldInfo}
                    price = {this.state.totalPrice}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
