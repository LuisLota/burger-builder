import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const pruchaseBurgerSuccess = (id,orderData)  => {
    return {
        type : actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId : id,
        orderData : orderData
    };
}

export const pruchaseBurgerFail = (error) => {
    return {
        type : actionTypes.PURCHASE_BURGER_FAIL,
        error : error
    };
}


export const purchaseBurgerStart = () => {
    return {
        type : actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
		axios
			.post('/orders.json', orderData)
			.then((response) => {
                dispatch(pruchaseBurgerSuccess(response.data,orderData))
			})
			.catch((error) => {
                dispatch(pruchaseBurgerFail(error))
			});
    }
}
