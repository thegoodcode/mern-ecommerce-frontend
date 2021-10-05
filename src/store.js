import { cartReducer } from 'reducers/cartReducers'
import {
	productDetailsReducer,
	productListReducer
} from 'reducers/productReducers'
import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer
})

const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems'))
const initialState = {
	cart: { cartItems: cartItemsFromStorage ?? [] }
}

const middleware = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
