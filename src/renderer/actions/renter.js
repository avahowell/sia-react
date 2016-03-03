import SiadWrapper from 'sia.js'
import { apiError } from './error.js'
import * as constants from '../constants/renter.js'

// Renter actions, used to interface with Siad.
// REQUEST_ actions indicate that a Siad request has been initiated,
// and RECEIVE_ actions indicate that a Siad request has finished.
// RECEIVE_ actions carry the data from the Siad api,
// A reducer should be used to map this data to the UI components.

// Action creator functions
const requestFiles = () => ({
	type: constants.REQUEST_FILES,
})
const receiveFiles = (files) => ({
	type: constants.RECEIVE_FILES,
	files,
})
const requestDownloads = () => ({
	type: constants.REQUEST_DOWNLOADS,
})
const receiveDownloads = (downloads) => ({
	type: constants.RECEIVE_DOWNLOADS,
	downloads,
})

// getFiles: asynchronously request /renter/files data from the Siad API.
// Dispatch receiveFiles on success, and apiError on failure.
export const getFiles = () => (dispatch) => {
	dispatch(requestFiles())
	SiadWrapper.call('/renter/files', (err, response) => {
		if (err) {
			dispatch(apiError(err))
		} else {
			dispatch(receiveFiles(response))
		}
	})
}
export const getDownloads = () => (dispatch) => {
	dispatch(requestDownloads())
	SiadWrapper.call('/renter/downloads', (err, response) => {
		if (err) {
			dispatch(apiError(err))
		} else {
			dispatch(receiveDownloads(response))
		}
	})
}
