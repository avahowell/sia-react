// actions.js: Sia-UI redux actions
// These actions are emitted by the UI to trigger changes to the redux state tree.
import SiadWrapper from 'sia.js'

// Helper functions
/**
 * Wraps a Sia API call and returns a Promise
 * Promises are more convenient for usage with redux-thunk
 * @param {url} string - Siad url to request
 * @returns {Promise} successParams: data, failureParams: error
 */
function apiCall(url) {
	return new Promise((resolve, reject) => {
		SiadWrapper.call(url, (err, data) => {
			if (err) {
				reject(err)
			}
			resolve(data)
		})
	})
}

// Sia-UI redux Action types and creator functions
export const REQUEST_CONSENSUS = 'REQUEST_CONSENSUS'
export const RECEIVE_CONSENSUS = 'RECEIVE_CONSENSUS'
export const API_ERROR = 'API_ERROR'

function requestConsensus() {
	return {
		type: REQUEST_CONSENSUS,
	}
}
function receiveConsensus(consensus) {
	return {
		type: RECEIVE_CONSENSUS,
		data: consensus,
	}
}
function apiError(error) {
	return {
		type: API_ERROR,
		error,
	}
}
// Aynchronously request consensus data from Siad.
// Dispatch REQUEST_CONSENSUS when the request starts,
// RECEIVE_CONSENSUS when the request finishes without error,
// or API_ERROR if the request fails.
export function getConsensus() {
	return (dispatch) => {
		dispatch(requestConsensus())
		return apiCall('/consensus')
			.then((consensus) => {
				dispatch(receiveConsensus(consensus))
			})
			.catch((err) => {
				dispatch(apiError(err))
			})
	}
}
