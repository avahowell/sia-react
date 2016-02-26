// reducers.js: Sia-UI redux reducers
import { combineReducers } from 'redux'
import { REQUEST_CONSENSUS, RECEIVE_CONSENSUS, REQUEST_WALLET, RECEIVE_WALLET, API_ERROR } from './actions.js'

// Initial Sia-UI consensus state
const initialConsensusState = {
	loading: false,
	data: {
		height: 0,
		currentblock: '',
		target: [],
	},
}
// Initial Sia-UI wallet state
const initialWalletState = {
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

// Sia-UI consensus reducer
// Set the UI's loading state to true when a consensus request starts, false when the request finishes
// Update state.consensus with the received struct after a successful request (RECEIVE_CONSENSUS)
function consensus(state = initialConsensusState, action) {
	switch (action.type) {
	case REQUEST_CONSENSUS:
		return Object.assign({}, state, {
			loading: true,
		})
	case RECEIVE_CONSENSUS:
		return Object.assign({}, state, {
			loading: false,
			data: action.data,
		})
	// TODO: error handling in UI state.
	// For now, just log it out to the console.
	case API_ERROR:
		console.error(action.error)
	default:
		return state
	}
}
// Sia-UI wallet reducer
function wallet(state = initialWalletState, action) {
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
const rootReducer = combineReducers({consensus, wallet})
export default rootReducer
