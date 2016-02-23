import React from 'react'


// Sia Overview react component
export default class Overview extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="page">
				<div className="status">
					Block Height: {this.props.consensus.height}
				</div>
			</div>
		)
	}
}
