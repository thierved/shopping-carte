import data from '../data.json';
import {ADD_ITEMS} from '../actions';

export default (state = data, action) => {
    switch (action.type) {
        case ADD_ITEMS:            
            return state.filter(item => item.name !== action.payload);
        default:
            return state;
    }
}