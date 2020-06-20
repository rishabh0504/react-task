const addItemState = {
    items: []
}
const ItemReducer = (state = addItemState, action) => {
    switch (action.type) {
        case "ITEM_ADD":
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case "ITEM_COMPLETED":
            const { items } = state;
            items[action.payload].completed = !items[action.payload].completed;
            return {
                ...state,
                items: items
            }

        default:
            return state
    }
}

export default ItemReducer;