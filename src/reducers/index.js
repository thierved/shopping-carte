import { combineReducers } from 'redux';

import {products, selectedItems} from './product_reducer';

const allProduct = combineReducers({
    products,
    selectedItems
});

export default allProduct;