// This is the main entry point for the Sia-UI renderer process.
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, IndexRoute, Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { getConsensus } from './actions/consensus.js'
import { getWallet } from './actions/wallet.js'
import { getGateway } from './actions/gateway.js'
import reducer from './reducers'
import thunk from 'redux-thunk'

// Include SASS styles
require('./styles/main.scss')

// Initialize Sia-UI's redux state store.
// Use the combined reducer from reducers
// Enable redux-thunk, which is required for our async actions
const store = createStore(
	reducer,
	applyMiddleware(thunk)
)
const getState = () => {
	store.dispatch(getConsensus())
	store.dispatch(getWallet())
	store.dispatch(getGateway())
}
getState()
// Poll for state every 10 seconds
// Should figure out a better way of doing this.
setInterval(getState, 10000)

// Import the endpoints for our routes.
import App from './components/app.js'
import Overview from './containers/overview.js'
import Files from './containers/files.js'
import Hosting from './components/hosting.js'
import Wallet from './components/wallet.js'
import Notifications from './components/notifications.js'
import Settings from './components/settings.js'

// Construct the router using our endpoints
const routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Overview} />
				<Route path="/overview" component={Overview} />
				<Route path="/files" component={Files} />
				<Route path="/hosting" component={Hosting} />
				<Route path="/wallet" component={Wallet} />
				<Route path="/notifications" component={Notifications} />
				<Route path="/settings" component={Settings} />
			</Route>
		</Router>
	</Provider>
)

ReactDOM.render(routes, document.getElementById('app'))
