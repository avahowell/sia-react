import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

// Stateless Overview view component
const OverviewView = ({ height, walletstatus }) => {
	return (
		<div className="page">
			<div className="infobubble">
				<span> Block height: {height} </span>
			</div>
			<div className="infobubble">
				<span> Wallet status: {walletstatus} </span>
			</div>
		</div>
	)
}
OverviewView.propTypes = {
	height: PropTypes.number.isRequired,
	walletstatus: PropTypes.string.isRequired,
}

// Use react-redux to map the application state to this component
const mapStateToProps = (state) => {
	return {
		height: state.consensus.data.height,
		walletstatus: state.wallet.data.unlocked ? 'unlocked' : 'locked',
	}
}

const Overview = connect(
	mapStateToProps
)(OverviewView)

export default Overview
