import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import OverviewView from '../components/overview.js'

const readableBalance = (balance) => (balance / Math.pow(10, 25)).toString()

// Use react-redux to map the application state to this component
const mapStateToProps = (state) => ({
	height: state.overview.height,
	peers: state.overview.peers,
	balance: readableBalance(parseInt(state.overview.balance)),
})

const Overview = connect(
	mapStateToProps
)(OverviewView)

export default Overview
