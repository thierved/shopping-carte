const ADD_ITEMS = 'ADD_ITEMS';
const REMOVE_ITEMS = 'REMOVE_ITEMS';

const selectItem = (name) => {
    console.log('lllll')
    return {
        type: ADD_ITEMS,
        payload: name
    }
}

const itemToRemove = (name) => {
    return {
        type: REMOVE_ITEMS,
        payload: name
    }
}

export {
    ADD_ITEMS,
    REMOVE_ITEMS,
    itemToRemove,
    selectItem
};