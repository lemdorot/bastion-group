export interface ProductState {
    products: any[];
    success: null | string;
    error: null | string;
}

export interface IProduct {
    id: number,
    name: string,
    productTypeId: number,
    price: number,
    gost: string
}

export enum ProductActionTypes {
    ADD_PRODUCT = "ADD_PRODUCT",
    ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS",
    ADD_PRODUCT_ERROR = "ADD_PRODUCT_ERROR",
}

interface AddProductAction {
    type: ProductActionTypes.ADD_PRODUCT;
    payload: IProduct
}

interface AddProductSuccessAction {
    type: ProductActionTypes.ADD_PRODUCT_SUCCESS;
    payload: string;
}

interface AddProductErrorAction {
    type: ProductActionTypes.ADD_PRODUCT_ERROR;
    payload: string;
}

export type ProductAction = 
    AddProductAction 
    | AddProductSuccessAction
    | AddProductErrorAction
