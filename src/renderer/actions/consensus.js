// consensus.js: Sia-UI consensus redux actions
import SiadWrapper from 'sia.js'
import { apiError } from './error.js'
import { REQUEST_CONSENSUS, RECEIVE_CONSENSUS } from '../constants/consensus.js'

const requestConsensus = () => ({
	type: REQUEST_CONSENSUS,
})

const receiveConsensus = (consensus) => ({
	type: RECEIVE_CONSENSUS,
	height: consensus.height,
	currentblock: consensus.currentblock,
	target: consensus.target,
})

// Asynchronously request consensus data from Siad.
// Dispatch REQUEST_CONSENSUS when the request starts,
// RECEIVE_CONSENSUS when the request finishes without error,
// or API_ERROR if the request fails.
export const getConsensus = () => (dispatch) => {
	dispatch(requestConsensus())
	SiadWrapper.call('/consensus', (err, consensus) => {
		if (err) {
			dispatch(apiError(err))
		} else {
			dispatch(receiveConsensus(consensus))
		}
	})
}
