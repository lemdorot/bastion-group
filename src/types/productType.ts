export interface ProductTypeState {
    productTypes: any[];
    success: null | string;
    error: null | string;
}

export interface IProductType {
    id: number,
    name: string
}

export enum ProductTypeActionTypes {
    ADD_PRODUCT_TYPE = "ADD_PRODUCT_TYPE",
    ADD_PRODUCT_TYPE_SUCCESS = "ADD_PRODUCT_TYPE_SUCCESS",
    ADD_PRODUCT_TYPE_ERROR = "ADD_PRODUCT_TYPE_ERROR",
}

interface AddProductTypeAction {
    type: ProductTypeActionTypes.ADD_PRODUCT_TYPE;
    payload: IProductType
}

interface AddProductTypeSuccessAction {
    type: ProductTypeActionTypes.ADD_PRODUCT_TYPE_SUCCESS;
    payload: string;
}

interface AddProductTypeErrorAction {
    type: ProductTypeActionTypes.ADD_PRODUCT_TYPE_ERROR;
    payload: string;
}


export type ProductTypeAction = 
    AddProductTypeAction
    | AddProductTypeSuccessAction
    | AddProductTypeErrorAction
