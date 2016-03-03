import SiadWrapper from 'sia.js'
import { apiError } from './error.js'
import { REQUEST_FILES, RECEIVE_FILES, START_UPLOAD } from '../constants/renter.js'

// Renter actions, used to interface with Siad.
// REQUEST_ actions indicate that a Siad request has been initiated,
// and RECEIVE_ actions indicate that a Siad request has finished.
// RECEIVE_ actions carry the data from the Siad api,
// A reducer should be used to map this data to the UI components.

// Action creator functions
export const requestFiles = () => ({
	type: REQUEST_FILES,
})
export const receiveFiles = (files) => ({
	type: RECEIVE_FILES,
	files: files,
})
export const startUpload = () => ({
	type: START_UPLOAD,
})

// getFiles: asynchronously request /renter/files data from the Siad API.
// Dispatch receiveFiles on success, and apiError on failure.
export const getFiles = () => (dispatch) => {
	dispatch(requestFiles())
	SiadWrapper.call('/renter/files', (err, response) => {
		if (err) {
			dispatch(apiError(err))
		} else {
			if (!response.files) {
				response.files = []
			}
			dispatch(receiveFiles(response.files))
		}
	})
}
