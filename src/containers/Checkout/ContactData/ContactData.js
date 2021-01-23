import React, { Component } from 'react';
import axios from '../../../axios-order';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		},
		loader: false
	};

	orderHandler = (event) => {
		event.preventDefault();
		// this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Max',
				address: {
					street: 'Teststreet 1',
					zipoCode: '41351',
					country: 'Germany'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		};
		axios
			.post('/orders.json', order)
			.then((response) => {
                this.setState({ loading: false });
                this.props.history.push('/');
			})
			.catch((err) => {
				this.setState({ loading: false });
			});
	};

	render() {
		let form = (
				<form>
					<input className={classes.Input} type='text' name='name' placeholder='Your name' />
					<input className={classes.Input} type='email' name='email' placeholder='Your email' />
					<input className={classes.Input} type='text' name='street' placeholder='Street' />
					<input className={classes.Input} type='text' name='postal' placeholder='Postal code' />

					<Button btnType='Success' clicked={this.orderHandler}>
						{' '}
						ORDER{' '}
					</Button>
				</form>
		);

		if (this.state.loading) {
			form = <Spinner />;
		}
		return (
			<div className={classes.ContactData}>
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
