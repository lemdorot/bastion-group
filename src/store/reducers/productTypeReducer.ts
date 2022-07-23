import { ProductTypeState, ProductTypeAction, ProductTypeActionTypes } from './../../types/productType';
const initialState: ProductTypeState = {
    productTypes: [],
    success: null,
    error: null
}

export const productTypeReducer = (state = initialState, action: ProductTypeAction ): ProductTypeState => {
    switch (action.type) {
        case ProductTypeActionTypes.ADD_PRODUCT_TYPE:
            return {success: null, error: null, productTypes: [...state.productTypes, action.payload]}
        case ProductTypeActionTypes.ADD_PRODUCT_TYPE_SUCCESS:
            return {success: action.payload, error: null, productTypes: state.productTypes}
        case ProductTypeActionTypes.ADD_PRODUCT_TYPE_ERROR:
            return {success: null, error: action.payload, productTypes: state.productTypes}
        default:
            return state
    }
}