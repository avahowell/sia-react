import React from 'react'
import {Link} from 'react-router'

// The main Sia UI component, App.
export default class App extends React.Component {
	constructor(props) {
		super(props)
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
				/* this.props.children contains the child routes in the app. */
				{this.props.children}
			</div>
		)
	}
}
