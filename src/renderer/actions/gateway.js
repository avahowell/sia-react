// gateway.js: Sia-UI gateway redux actions
import SiadWrapper from 'sia.js'
import { apiError } from './error.js'
import { REQUEST_GATEWAY, RECEIVE_GATEWAY } from '../constants/gateway.js'

export const requestGateway = () => ({
	type: REQUEST_GATEWAY,
})

export const receiveGateway = (gateway) => ({
	type: RECEIVE_GATEWAY,
	peers: gateway.peers,
	netaddress: gateway.netaddress,
})

// Asynchronously request gateway data from Siad.
// Dispatch REQUEST_GATEWAY when the request starts,
// RECEIVE_GATEWAY when the request finishes without error,
// or API_ERROR if the request fails.
export const getGateway = () => (dispatch) => {
	dispatch(requestGateway())
	SiadWrapper.call('/gateway', (err, gateway) => {
		if (err) {
			dispatch(apiError(err))
		}
		dispatch(receiveGateway(gateway))
	})
}
