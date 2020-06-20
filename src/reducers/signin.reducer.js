const addItemState = {
    isloggedIn: false
}
const SigninReducer = (state = addItemState, action) => {
    switch (action.type) {
        case "SIGNIN_SUCCESS":
            return {
                ...state,
                isloggedIn: action.payload
            }
        case "SIGNIN_UN_SUCCESS":
            return {
                ...state,
                isloggedIn: action.payload
            }
        default:
            return state
    }
}

export default SigninReducer;