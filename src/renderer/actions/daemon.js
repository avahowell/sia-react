import SiadWrapper from 'sia.js'
import { apiError } from './error.js'
import * as actions from '../constants/daemon.js'

const requestDaemonConstants = () => ({
	type: actions.REQUEST_DAEMON_CONSTANTS,
})
const receiveDaemonConstants = (constants) => ({
	type: actions.RECEIVE_DAEMON_CONSTANTS,
	constants,
})
const requestDaemonStop = () => ({
	type: actions.REQUEST_DAEMON_STOP,
})
const receiveDaemonStop = () => ({
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
	SiadWrapper.call('/daemon/stop', (err) => {
		if (err) {
			dispatch(apiError(err))
		} else {
			dispatch(receiveDaemonStop())
		}
	})
}

