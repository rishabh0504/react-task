const addItem = (itemObject) => {
    return {
        type: "ITEM_ADD",
        payload: itemObject
    }
}

const updateItemStatus = (index) => {
    return {
        type: "ITEM_COMPLETED",
        payload: index
    }
}






export default {
    addItem,
    updateItemStatus
}