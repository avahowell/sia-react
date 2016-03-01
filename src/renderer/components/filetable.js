import React, { PropTypes } from 'react'
import { siaFile } from '../constants/renter.js'

const FileTableView = ({files}) => (
	<table className="filetable">
		<thead>
			<tr>
				<th>Name</th>
				<th>Size</th>
			</tr>
		</thead>
		<tbody>
		{
			files.map((file, key) => (
				<tr key={key}>
					<td>file.name</td>
					<td>file.size</td>
				</tr>
			))
		}
		</tbody>
	</table>
)
FileTableView.propTypes = {
	files: PropTypes.arrayOf(siaFile).isRequired,
}

export default FileTableView
