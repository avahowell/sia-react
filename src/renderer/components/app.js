import React from 'react'
import {Link} from 'react-router'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { getConsensus } from '../actions.js'
import reducer from '../reducers.js'

// Initialize Sia-UI's redux state store.
// Use the combined reducer from reducers.js
// Enable redux-thunk, which is required for our async actions
const store = createStore(
	reducer,
	applyMiddleware(thunk)
)

// The main Sia UI component, App.
export default class App extends React.Component {
	constructor(props) {
		super(props)
		store.dispatch(getConsensus()).then(() => {
			console.log(store.getState())
		})
	}
	render() {
		return (
			<div>
				<nav>
					<Link to="/overview" activeClassName="navselected">Overview</Link>
					<Link to="/files" activeClassName="navselected">Files</Link>
					<Link to="/hosting" activeClassName="navselected">Hosting</Link>
					<Link to="/wallet" activeClassName="navselected">Wallet</Link>
					<Link to="/notifications" activeClassName="navselected">Notifications</Link>
					<Link to="/settings" activeClassName="navselected">Settings</Link>
				</nav>
				{this.props.children}
			</div>
		)
	}
}
