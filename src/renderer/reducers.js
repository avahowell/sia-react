// reducers.js: Sia-UI redux reducers
import { combineReducers } from 'redux'
import { REQUEST_CONSENSUS, RECEIVE_CONSENSUS, API_ERROR } from './actions.js'

// Sia-UI consensus reducer
// Set the UI's loading state to true when a consensus request starts, false when the request finishes
// Update state.consensus with the received struct after a successful request (RECEIVE_CONSENSUS)
function consensus(state = {loading: false, consensus: {}}, action) {
	switch (action.type) {
	case REQUEST_CONSENSUS:
		return Object.assign({}, state, {
			loading: true,
		})
	case RECEIVE_CONSENSUS:
		return Object.assign({}, state, {
			loading: false,
			consensus: action.consensus,
		})
	// TODO: error handling in UI state.
	// For now, just log it out to the console.
	case API_ERROR:
		console.error(action.error)
	default:
		return state
	}
}
const rootReducer = combineReducers({consensus})
export default rootReducer
