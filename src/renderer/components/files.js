import FileTable from '../containers/filetable.js'
import { siaFile } from '../constants/renter.js'
import React, { PropTypes } from 'react'

const FilesView = ({ handleUpload }) => (
	<div className="page">
		<h1> Files </h1>
		<div className="filetable-container">
			<FileTable />
		</div>
		<button className="uploadbtn" onClick={handleUpload}>Upload</button>
	</div>
)
FilesView.propTypes = {
	handleUpload: PropTypes.func.isRequired,
}
export default FilesView
