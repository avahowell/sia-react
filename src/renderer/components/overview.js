import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

// This will be removed and replaced with daemon.siacoinprecision
const readableBalance = (balance) => Math.round((Number(balance) / Math.pow(10, 24))*100)/100

// Stateless Overview view component
const OverviewView = ({ height, balance, peers }) => (
	<div className="page">
		<h1> Overview </h1>
		<div className="infobar">
			<div className="infoitem">
				<div className="infoitem_title">Block Height</div>
				<div className="infoitem_content">{height}</div>
			</div>
			<div className="infoitem">
				<div className="infoitem_title">Peers</div>
				<div className="infoitem_content">{peers}</div>
			</div>
			<div className="infoitem">
				<div className="infoitem_title">Balance</div>
				<div className="infoitem_content">{balance}</div>
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
	balance: readableBalance(state.overview.balance),
})

const Overview = connect(
	mapStateToProps
)(OverviewView)

export default Overview
