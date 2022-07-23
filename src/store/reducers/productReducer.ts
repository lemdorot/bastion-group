import { ProductState, ProductAction, ProductActionTypes } from './../../types/product';
const initialState: ProductState = {
    products: [],
    success: null,
    error: null
}

export const productReducer = (state = initialState, action: ProductAction ): ProductState => {
    switch (action.type) {
        case ProductActionTypes.ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]}
        case ProductActionTypes.ADD_PRODUCT_SUCCESS:
            return {success: action.payload, error: null, products: state.products}
        case ProductActionTypes.ADD_PRODUCT_ERROR:
            return {success: null, error: action.payload, products: state.products}
        default:
            return state
    }
}
