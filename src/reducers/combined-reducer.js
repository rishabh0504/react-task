
import { combineReducers } from 'redux'
import modalReducer from './modal.reducer'
import ItemReducer from './item.reducer'
import SigninReducer from './signin.reducer'

const rootReducer = combineReducers({
    modal: modalReducer,
    items: ItemReducer,
    user: SigninReducer
})

export default rootReducer