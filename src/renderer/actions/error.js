import { API_ERROR } from '../constants/error.js'

export const apiError = (error) => ({
	type: API_ERROR,
	error,
})
