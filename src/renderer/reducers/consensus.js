// consensus.js: Sia-UI consensus reducer
import { REQUEST_CONSENSUS, RECEIVE_CONSENSUS } from '../actions/consensus.js'
import { API_ERROR } from '../actions/error.js'
// Initial Sia-UI consensus state
const initialState = {
	loading: false,
	data: {
		height: 0,
		currentblock: '',
		target: [],
	},
}
// Sia-UI consensus reducer
// Set the UI's loading state to true when a consensus request starts, false when the request finishes
// Update state.consensus with the received struct after a successful request (RECEIVE_CONSENSUS)
export default function consensus(state = initialState, action) {
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
	case API_ERROR:
		console.error(action.error)
	default:
		return state
	}
}
