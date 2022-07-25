import { ICart, CartAction, CartActionTypes } from './../../types/cart';
import { ProductTypeAction, ProductTypeActionTypes } from '../../types/productType';
import { Dispatch } from "redux";

export const addProductToCart = (cart: ICart) => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({
                type: CartActionTypes.ADD_CART, 
                payload: cart})
            dispatch({
                type: CartActionTypes.ADD_CART_SUCCESS, 
                payload: 'Продукт добавлен в корзину'})
            setTimeout(() => {
                dispatch({
                    type:  CartActionTypes.ADD_CART_SUCCESS, 
                    payload: ''})}, 4000
            )
        } catch {
            dispatch({
                type: CartActionTypes.ADD_CART_ERROR, 
                payload: 'Произошла ошибка при добавлении продукта в корзину'
            })
        }
        
    }
}

export const updateCart = (cart: ICart) => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({
                type: CartActionTypes.UPDATE_CART, 
                payload: cart})
            dispatch({
                type: CartActionTypes.ADD_CART_SUCCESS, 
                payload: 'Продукт обновлен'})
            setTimeout(() => {
                dispatch({
                    type:  CartActionTypes.ADD_CART_SUCCESS, 
                    payload: ''})}, 4000
            )
        } catch {
            dispatch({
                type: CartActionTypes.ADD_CART_ERROR, 
                payload: 'Произошла ошибка при обновлении продукта'
            })
        }
    }
}