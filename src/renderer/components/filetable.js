import React, { PropTypes } from 'react'

const FileTable = ({files}) => (
	<table className="filetable">
		<thead>
			<tr>
				<th>Name</th>
				<th>Size</th>
			</tr>
		</thead>
		<tbody>
		{
			files.map((file) => (
				<tr>
					<td>file.name</td>
					<td>file.size</td>
				</tr>
			))
		}
		</tbody>
	</table>
)
FileTable.propTypes = {
	files: PropTypes.array.isRequired,
}

export default FileTable