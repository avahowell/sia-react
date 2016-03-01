import SiadWrapper from 'sia.js'
import { apiError } from './error.js'

export const REQUEST_FILES = 'REQUEST_FILES'
export const RECEIVE_FILES = 'RECEIVE_FILES'
export const START_UPLOAD = 'START_UPLOAD'

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
