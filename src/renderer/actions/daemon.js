import SiadWrapper from 'sia.js'
import { apiError } from './error.js'
import * as actions from '../constants/daemon.js'

export const requestDaemonConstants = () => ({
	type: actions.REQUEST_DAEMON_CONSTANTS,
})
export const receiveDaemonConstants = (constants) => ({
	type: actions.RECEIVE_DAEMON_CONSTANTS,
	constants,
})
export const requestDaemonStop = () => ({
	type: actions.REQUEST_DAEMON_STOP,
})
export const receiveDaemonStop = () => ({
	type: actions.RECEIVE_DAEMON_STOP,
})
export const getDaemonConstants = () => (dispatch) => {
	dispatch(requestDaemonConstants())
	SiadWrapper.call('/daemon/constants', (err, constants) => {
		if (err) {
			dispatch(apiError(err))
		} else {
			dispatch(receiveDaemonConstants(constants))
		}
	})
}
export const stopDaemon = () => (dispatch) => {
	dispatch(requestDaemonStop())
	SiadWrapper.call('/daemon/stop', (err, body) => {
		if (err) {
			dispatch(apiError(err))
		} else {
			dispatch(receiveDaemonStop())
		}
	})
}
