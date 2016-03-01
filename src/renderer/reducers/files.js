// files.js: Files redux reducer
import { RECEIVE_FILES } from '../constants/renter.js'
import { API_ERROR } from '../constants/error.js'

const initialState = []

export default function files(state = initialState, action) {
	switch (action.type) {
	case RECEIVE_FILES:
		return {
			...state,
			files: action.files,
		}
	case API_ERROR:
		console.error(action.error)
	default:
		return state
	}
}
