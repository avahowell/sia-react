import React, { PropTypes } from 'react'

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
export default OverviewView