import SiadWrapper from 'sia.js'
import { apiError } from './error.js'
import { REQUEST_DAEMON_CONSTANTS, RECEIVE_DAEMON_CONSTANTS } from '../constants/daemon.js'

export const requestDaemonConstants = () => ({
	type: REQUEST_DAEMON_CONSTANTS,
})
export const receiveDaemonConstants = (constants) => ({
	type: RECEIVE_DAEMON_CONSTANTS,
	constants,
})
export const getDaemonConstants = () => (dispatch) => {
	dispatch(requestDaemonConstants())
	SiadWrapper.call('/daemon/constants', (err, constants) => {
		if (err) {
			dispatch(apiError(err))
		}
		dispatch(receiveDaemonConstants(constants))
	})
}

