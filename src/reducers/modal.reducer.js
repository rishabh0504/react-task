const addItemState = {
    open: false
}
const modalReducer = (state = addItemState, action) => {
    switch (action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
                open: action.payload,
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                open: action.payload,
            }
        default:
            return state
    }
}

export default modalReducer;