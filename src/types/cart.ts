import { IProduct } from './product';
export interface CartState {
    carts: any[];
    success: null | string;
    error: null | string;
}

export interface ICart {
    product: IProduct,
    count: number,
    sum: number
}

export enum CartActionTypes {
    ADD_CART = "ADD_CART",
    ADD_CART_SUCCESS = "ADD_CART_SUCCESS",
    ADD_CART_ERROR = "ADD_CART_ERROR",
    UPDATE_CART = "UPDATE_CART",
}

interface AddCartAction {
    type: CartActionTypes.ADD_CART;
    payload: ICart
}

interface AddCartSuccessAction {
    type: CartActionTypes.ADD_CART_SUCCESS;
    payload: string;
}

interface AddCartErrorAction {
    type: CartActionTypes.ADD_CART_ERROR;
    payload: string;
}

interface UpdateCartAction {
    type: CartActionTypes.UPDATE_CART;
    payload: ICart
}

export type CartAction = 
    AddCartAction 
    | AddCartSuccessAction
    | AddCartErrorAction
    | UpdateCartAction
