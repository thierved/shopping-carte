import data from '../data.json';
import {ADD_ITEMS, REMOVE_ITEMS} from '../actions';

const products = (state = data, action) => {
    switch (action.type) {
        case ADD_ITEMS:            
            return state.filter(item => item.name !== action.payload);        
        default:
            return state;
    }
}

const selectedItems = (state = [], action) => {
    switch (action.type) {
        case REMOVE_ITEMS:            
            return [
                ...state,
                data.find(item => item.name === action.payload)
            ];        
        default:
            return state;
    }
}

export {
    products,
    selectedItems
}