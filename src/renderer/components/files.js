import FileTable from '../components/filetable.js'
import { siaFile } from '../constants/renter.js'
import React, { PropTypes } from 'react'

const FilesView = ({ files, handleUpload }) => (
	<div className="page">
		<h1> Files </h1>
		<div className="filetable-container">
			<FileTable files={files} />
		</div>
		<button className="uploadbtn" onClick={handleUpload}>Upload</button>
	</div>
)
FilesView.propTypes = {
	files: PropTypes.arrayOf(siaFile),
	handleUpload: PropTypes.func.isRequired,
}
export default FilesView
