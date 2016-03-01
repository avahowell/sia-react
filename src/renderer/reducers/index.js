import { combineReducers } from 'redux'
import overview from './overview.js'
import files from './files.js'

const rootReducer = combineReducers({files, overview})
export default rootReducer
