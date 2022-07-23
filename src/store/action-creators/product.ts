import { IProduct } from './../../types/product';
import { ProductAction, ProductActionTypes } from '../../types/product';
import { Dispatch } from "redux";

export const addProduct = (product: IProduct) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({
                type: ProductActionTypes.ADD_PRODUCT, 
                payload: product})
            dispatch({
                type: ProductActionTypes.ADD_PRODUCT_SUCCESS, 
                payload: 'Продукт добавлен в список'})
            setTimeout(() => {
                dispatch({
                    type: ProductActionTypes.ADD_PRODUCT_SUCCESS, 
                    payload: ''})}, 4000
            )
        } catch {

        }
    }
}