import { connect } from 'react-redux'
import FilesView from '../components/files.js'

const mapStateToProps = (state) => ({
	files: state.files,
})
const mapDispatchToProps = (dispatch) => ({
	handleUpload: () => {
	},
})

const Files = connect(mapStateToProps, mapDispatchToProps)(FilesView)
export default Files
