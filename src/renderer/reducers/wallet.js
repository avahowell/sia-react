// wallet.js: Sia-UI wallet reducer
import { REQUEST_WALLET, RECEIVE_WALLET } from '../actions/wallet.js'
import { API_ERROR } from '../actions/error.js'
// Initial Sia-UI wallet state
const initialState = {
	loading: false,
	data: {
		encrypted: true,
		unlocked: false,

		confirmedsiacoinbalance: '',
		unconfirmedoutgoingsiacoins: '',
		unconfirmedincomingsiacoins: '',

		siafundbalance: '',
		siacoinclaimbalance: '',
	},
}
// Sia-UI wallet reducer
export default function wallet(state = initialState, action) {
	switch (action.type) {
	case REQUEST_WALLET:
		return Object.assign({}, state, {
			loading: true,
		})
	case RECEIVE_WALLET:
		return Object.assign({}, state, {
			loading: false,
			data: action.data,
		})
	case API_ERROR:
		console.error(action.error)
	default:
		return state
	}
}
