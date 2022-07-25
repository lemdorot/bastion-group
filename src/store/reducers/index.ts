import { cartReducer } from './cartReducer';
import { productReducer } from './productReducer';
import { productTypeReducer } from './productTypeReducer';
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    product: productReducer,
    productType: productTypeReducer,
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>