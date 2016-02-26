export const API_ERROR = 'API_ERROR'

export const apiError = (error) => ({
	type: API_ERROR,
	error,
})
