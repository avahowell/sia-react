// consensus.js: Sia-UI consensus redux actions
import SiadWrapper from 'sia.js'
import { apiError } from './error.js'


// Helper functions
/**
 * apiCall wraps a Sia API call and returns a Promise
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

export const REQUEST_CONSENSUS = 'REQUEST_CONSENSUS'
export const RECEIVE_CONSENSUS = 'RECEIVE_CONSENSUS'

export const requestConsensus = () => ({
	type: REQUEST_CONSENSUS,
})

export const receiveConsensus = (consensus) => ({
	type: RECEIVE_CONSENSUS,
	data: consensus,
})
// Asynchronously request consensus data from Siad.
// Dispatch REQUEST_CONSENSUS when the request starts,
// RECEIVE_CONSENSUS when the request finishes without error,
// or API_ERROR if the request fails.
export const getConsensus = () => (dispatch) => {
	dispatch(requestConsensus())
	return apiCall('/consensus')
		.then((consensus) => {
			dispatch(receiveConsensus(consensus))
		})
		.catch((err) => {
			dispatch(apiError(err))
		})
}
