import SiadWrapper from 'sia.js'
import { apiError } from './error.js'
import { REQUEST_FILES, RECEIVE_FILES, START_UPLOAD } from '../constants/renter.js'

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
			if (!response.files) {
				response.files = []
			}
			dispatch(receiveFiles(response.files))
		}
	})
}
