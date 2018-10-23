import { combineReducers } from 'redux';
import {products, bag} from './product_reducer'

export default combineReducers({
    products,
    bag
});