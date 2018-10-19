const ADD_ITEM_TO_BAG = "ADD_ITEM_TO_BAG";
const REMOVE_ITEM_FROM_BAG = "REMOVE_ITEM_FROM_BAG";


const addItemToBag = id =>  {
    return {
        type: ADD_ITEM_TO_BAG,
        payload: id
    }
}

const removeItemFromBag = id => {
    return {
        type: REMOVE_ITEM_FROM_BAG,
        payload: id
    }
}

export {
    ADD_ITEM_TO_BAG,
    REMOVE_ITEM_FROM_BAG,
    addItemToBag,
    removeItemFromBag
}