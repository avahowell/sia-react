import {Route, IndexRoute, Router, hashHistory} from 'react-router'
// We need React for JSX, but don't actually use it in this module.
// Therefore, disable no-unused-vars for this block
/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

// Import the endpoints for our routes.
import App from './app.js'
import Overview from './overview.js'
import Files from './files.js'
import Hosting from './hosting.js'
import Wallet from './wallet.js'
import Notifications from './notifications.js'
import Settings from './settings.js'

// Construct the router using our endpoints
const routes = (
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
)
export default routes
