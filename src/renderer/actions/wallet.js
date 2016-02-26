// wallet.js: Sia-UI wallet redux actions
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

export const REQUEST_WALLET = 'REQUEST_WALLET'
export const RECEIVE_WALLET = 'RECEIVE_WALLET'

export const requestWallet = () => ({
	type: REQUEST_WALLET,
})
export const receiveWallet = (wallet) => ({
	type: RECEIVE_WALLET,
	data: wallet,
})
// Asynchronously request wallet data from Siad.
// Dispatch REQUEST_WALLET when the request starts,
// RECEIVE_WALLET when the request finishes without error,
// or API_ERROR if the request fails.
export const getWallet = () => (dispatch) => {
	dispatch(requestWallet())
	return apiCall('/wallet')
		.then((wallet) => {
			dispatch(receiveWallet(wallet))
		})
		.catch((err) => {
			dispatch(apiError(err))
		})
}
