import { connect } from 'react-redux'
import FileTableView from '../components/filetable.js'

const mapStateToProps = (state) => state.files

const FileTable = connect(mapStateToProps)(FileTableView)
export default FileTable
