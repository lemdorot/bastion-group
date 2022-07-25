import * as ProductActionCreators from './product'
import * as ProductTypeActionCreators from './productType'
import * as CartActionCreators from './cart'

export default {
    ...ProductActionCreators,
    ...ProductTypeActionCreators,
    ...CartActionCreators
}