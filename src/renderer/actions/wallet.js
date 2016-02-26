// wallet.js: Sia-UI wallet redux actions
import SiadWrapper from 'sia.js'
import { apiError } from './error.js'

export const REQUEST_WALLET = 'REQUEST_WALLET'
export const RECEIVE_WALLET = 'RECEIVE_WALLET'

export const requestWallet = () => ({
	type: REQUEST_WALLET,
})
export const receiveWallet = (wallet) => ({
	type: RECEIVE_WALLET,
	confirmedsiacoinbalance: wallet.confirmedsiacoinbalance,
	unconfirmedoutgoingsiacoins: wallet.unconfirmedoutgoingsiacoins,
	unconfirmedincomingsiacoins: wallet.unconfirmedincomingsiacoins,
	siafundbalance: wallet.siafundbalance,
	siacoinclaimbalance: wallet.siacoinclaimbalance,
	encrypted: wallet.encrypted,
	unlocked: wallet.unlocked,
})
// Asynchronously request wallet data from Siad.
// Dispatch REQUEST_WALLET when the request starts,
// RECEIVE_WALLET when the request finishes without error,
// or API_ERROR if the request fails.
export const getWallet = () => (dispatch) => {
	dispatch(requestWallet())
	SiadWrapper.call('/wallet', (err, wallet) => {
		if (err) {
			dispatch(apiError(err))
		}
		dispatch(receiveWallet(wallet))
	})
}
