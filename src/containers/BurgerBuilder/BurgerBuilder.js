import React, { Component } from 'react';
import axios from '../../axios-order';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import Aux from '../../hoc/Auxillity/Auxillity';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class BurgerBuilder extends Component {
	state = {
		purchasing: false,
		loading: false,
		error: false
	};

	componentDidMount() {
		// axios
		// 	.get('https://react-my-burger-3281f-default-rtdb.firebaseio.com/ingredients.json')
		// 	.then((response) => {
		// 		this.setState({ ingredients: response.data });
		// 	})
		// 	.catch((error) => {
		// 		this.setState({ error: error });
		// 	});
	}
	updatePurchaseState(ingredients) {
		// get each prop count of ingridents of state ex : bacon :0, meat: 1
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

			return sum > 0 ;
	}

	
	purchaseHandler = () => {
		this.setState({
			purchasing: true
		});
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		this.props.history.push({
			pathname: '/checkout',
		});
	};

	render() {
		const disabeldInfo = {
			...this.props.ings
		};

		for (let key in disabeldInfo) {
			disabeldInfo[key] = disabeldInfo[key] <= 0;
		}
		let orderSummary = null;
		let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

		if (this.props.ings) {
			burger = (
				<Aux>
					<Burger ingredients={this.props.ings} />
					<BuildControls
						ingredientAdded={ this.props.onIngredientAdded}
						ingredientRemoved={ this.props.onIngredientRemoved}
						disabled={disabeldInfo}
						price={this.props.price}
						purchasable={this.updatePurchaseState(this.props.ings )}
						ordered={this.purchaseHandler}
					/>
				</Aux>
			);

			orderSummary = (
				<OrderSummary
					ingredients={this.props.ings}
					purchaseCancelled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinueHandler}
					price={this.props.price.toFixed(2)}
				/>
			);
		}

		if (this.state.loading) {
			orderSummary = <Spinner />;
		}
		// {salad : true, meat : true ....}
		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ings: state.ingredients,
		price : state.totalPrice
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIngredientAdded: (ingName) => dispatch({ type: actionType.ADD_INGREDIENT, ingredientName: ingName }),
		onIngredientRemoved: (ingName) => dispatch({ type: actionType.REMOVE_INGREDIENT, ingredientName: ingName })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
