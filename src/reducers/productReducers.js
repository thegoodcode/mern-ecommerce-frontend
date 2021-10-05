import {
	PRODUCT_DETAILS_FAILURE,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_LIST_FAILURE,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS
} from 'constants/productConstants'

const productListInitialState = {
	loading: false,
	error: null,
	products: []
}
export const productListReducer = (state = productListInitialState, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return {
				...state,
				loading: true
			}
		case PRODUCT_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload
			}
		case PRODUCT_LIST_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		default:
			return state
	}
}

const productDetailsInitialState = {
	loading: false,
	error: null,
	product: {
		reviews: []
	}
}
export const productDetailsReducer = (
	state = productDetailsInitialState,
	action
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return {
				...state,
				loading: true
			}
		case PRODUCT_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				product: action.payload
			}
		case PRODUCT_DETAILS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		default:
			return state
	}
}
