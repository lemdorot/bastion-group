import * as ProductActionCreators from './product'
import * as ProductTypeActionCreators from './productType'

export default {
    ...ProductActionCreators,
    ...ProductTypeActionCreators
}