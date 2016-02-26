import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const readableBalance = (balance) => Math.round((Number(balance) / Math.pow(10, 25))*100)/100

// Stateless Overview view component
const OverviewView = ({ height, balance, peers }) => (
	<div className="page">
		<h1> Overview </h1>
		<div className="infobar">
			<div className="infobubble">
				Block Height: {height}
			</div>
			<div className="infobubble">
				Balance: {readableBalance(balance)} SC
			</div>
			<div className="infobubble">
				Peers: {peers}
			</div>
		</div>
	</div>
)
OverviewView.propTypes = {
	balance: PropTypes.string.isRequired,
	peers: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

// Use react-redux to map the application state to this component
const mapStateToProps = (state) => ({
	height: state.overview.height,
	peers: state.overview.peers,
	balance: state.overview.balance,
})

const Overview = connect(
	mapStateToProps
)(OverviewView)

export default Overview
