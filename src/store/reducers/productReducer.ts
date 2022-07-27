import { ProductState, ProductAction, ProductActionTypes } from './../../types/product';
const initialState: ProductState = {
    products: [{ id: 111, name: 'Опора тавровая хомутовая ТХ', productTypeId: 0, price: '645.8', gost: 'ГОСТ 14911-82'  },
    { id: 112, name: 'Опора корпусная приварная КП', productTypeId: 1, price: '1237.6', gost: 'ГОСТ 14911-82'  },
    { id: 113, name: 'Опора корпусная хомутовая КХ', productTypeId: 0, price: '873.2', gost: 'ОСТ 36-146-88'  },
    { id: 114, name: 'Опора подвижная ОПБ1', productTypeId: 1, price: '2765.2', gost: 'ГОСТ 14911-82'  },
    { id: 115, name: 'Опора подвижная ОПБ2', productTypeId: 0, price: '1624.8', gost: 'ОСТ 36-146-88'  },
    { id: 116, name: 'Опора трубчатая ТР', productTypeId: 1, price: '745.5', gost: 'НТС 65-06'  },
    { id: 117, name: 'Опора тавровая приварная ТП', productTypeId: 1, price: '926.9', gost: 'ГОСТ 14911-82'  },
    { id: 118, name: 'Опора подвижная ОПП3', productTypeId: 1, price: '2178.6', gost: 'НТС 65-06'  },
    { id: 119, name: 'Опора подвижная ОПП2', productTypeId: 0, price: '724.3', gost: 'ОСТ 36-146-88'  },],
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
