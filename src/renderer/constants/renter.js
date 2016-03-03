import { PropTypes } from 'react'

export const REQUEST_FILES = 'REQUEST_FILES'
export const RECEIVE_FILES = 'RECEIVE_FILES'
export const START_UPLOAD = 'START_UPLOAD'
export const REQUEST_DOWNLOADS = 'REQUEST_DOWNLOADS'
export const RECEIVE_DOWNLOADS = 'RECEIVE_DOWNLOADS'

export const siaFile = PropTypes.shape({
	siapath: PropTypes.string,
	destination: PropTypes.string,
	filesize: PropTypes.number,
	received: PropTypes.number,
	starttime: PropTypes.string,
})

