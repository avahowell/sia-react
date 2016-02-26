import { combineReducers } from 'redux'
import consensus from './consensus.js'
import wallet from './wallet.js'

const rootReducer = combineReducers({consensus, wallet})
export default rootReducer
