import { combineReducers } from 'redux';

import products from './product_reducer';

const allProduct = combineReducers({
    products
});

export default allProduct;