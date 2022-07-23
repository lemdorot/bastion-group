import { IProductType } from './../../types/productType';
import { ProductTypeAction, ProductTypeActionTypes } from '../../types/productType';
import { Dispatch } from "redux";

export const addProductType = (productType: IProductType) => {
    return async (dispatch: Dispatch<ProductTypeAction>) => {
        try {
            dispatch({
                type: ProductTypeActionTypes.ADD_PRODUCT_TYPE, 
                payload: productType})
            dispatch({
                type: ProductTypeActionTypes.ADD_PRODUCT_TYPE_SUCCESS, 
                payload: 'Тип продукта добавлен в список'})
            setTimeout(() => {
                dispatch({
                    type: ProductTypeActionTypes.ADD_PRODUCT_TYPE_SUCCESS, 
                    payload: ''})}, 4000
            )
        } catch {
            dispatch({
                type: ProductTypeActionTypes.ADD_PRODUCT_TYPE_ERROR, 
                payload: 'Произошла ошибка при добавлении типа'
            })
        }
        
    }
}