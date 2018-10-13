export const ADD_ITEMS = 'ADD_ITEMS';

export const selectItem = (id) => {
    console.log('lllll')
    return {
        type: ADD_ITEMS,
        payload: id
    }
}