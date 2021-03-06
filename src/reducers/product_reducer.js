import data from '../data.json';
import {ADD_ITEM_TO_BAG, REMOVE_ITEM_FROM_BAG} from '../actions';

const products = (state = data, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_BAG:
            return  state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

const bag = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM_TO_BAG:         
            return [...state, addToBag(action.payload)];
        default:
            return state;
    }
}

function addToBag(id) {    
    return data.find(item => item.id === id);
}

export {products , bag};