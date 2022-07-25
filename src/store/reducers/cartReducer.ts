import { CartAction, CartActionTypes, CartState } from "../../types/cart"

const initialState: CartState = {
    carts: [],
    success: null,
    error: null
}

export const cartReducer = (state = initialState, action: CartAction ): CartState => {
    switch (action.type) {
        case CartActionTypes.ADD_CART:
            return {success: null, error: null, carts: [...state.carts, action.payload]}
        case CartActionTypes.ADD_CART_SUCCESS:
            return {success: action.payload, error: null, carts: state.carts}
        case CartActionTypes.ADD_CART_ERROR:
            return {success: null, error: action.payload, carts: state.carts}
        case CartActionTypes.UPDATE_CART:
            return {success: null, error: null, 
                carts:  state.carts.map((cart)=> {
                if( cart.product.id === action.payload.product.id ) {
                  return action.payload
                } else {
                  return cart;
                } })}
        case CartActionTypes.REMOVE_CART:
            return {success: null, error: null,
                carts: state.carts.filter(cart => cart.product.id !== action.payload.product.id)}
        case CartActionTypes.CLEAR_CART:
            return {success: null, error: null, carts: []}
        default:
            return state
    }
}