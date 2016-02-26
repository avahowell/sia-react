import reducer from '../src/renderer/reducers.js'
import * as actions from '../src/renderer/actions.js'
import {expect} from 'chai'

// Test Sia-UI reducers.
/* eslint-disable no-magic-numbers */
describe('sia-ui reducer', () => {
	it('should return initial state', () => {
		expect(reducer(undefined, {})).to.deep.equal({
			consensus: {
				loading: false,
				data: {
					height: 0,
					currentblock: '',
					target: [],
				},
			},
			wallet: {
				loading: false,
				data: {
					encrypted: true,
					unlocked: false,

					confirmedsiacoinbalance: '',
					unconfirmedoutgoingsiacoins: '',
					unconfirmedincomingsiacoins: '',

					siafundbalance: '',
					siacoinclaimbalance: '',
				},
			},
		})
	})
	it('should handle REQUEST_CONSENSUS', () => {
		expect(reducer({}, {type: actions.REQUEST_CONSENSUS}).consensus.loading).to.equal(true)
	})
	it('should handle RECEIVE_CONSENSUS', () => {
		const consensusdata = {
			height: 1,
			currentblock: '1',
			target: [1],
		}
		const newstate = reducer({}, {type: actions.RECEIVE_CONSENSUS, data: consensusdata})
		expect(newstate.wallet.loading).to.equal(false)
		expect(newstate.consensus.data).to.deep.equal(consensusdata)
	})
	it('should handle REQUEST_WALLET', () => {
		expect(reducer({}, {type: actions.REQUEST_WALLET}).wallet.loading).to.equal(true)
	})
	it('should handle RECEIVE_WALLET', () => {
		const walletdata = {
			encrypted: true,
			unlocked: true,

			confirmedsiacoinbalance: '1337',
			unconfirmedoutgoingsiacoins: '0',
			unconfirmedincomingsiacoins: '0',

			siafundbalance: '0',
			siacoinclaimbalance: '0',
		}
		const newstate = reducer({}, {type: actions.RECEIVE_WALLET, data: walletdata})
		expect(newstate.wallet.loading).to.equal(false)
		expect(newstate.wallet.data).to.deep.equal(walletdata)
	})
})
/* eslint-enable no-magic-numbers */
