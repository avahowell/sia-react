import reducer from '../src/renderer/reducers/rootreducer.js'
import {REQUEST_WALLET, RECEIVE_WALLET} from '../src/renderer/actions/wallet.js'
import {REQUEST_CONSENSUS, RECEIVE_CONSENSUS} from '../src/renderer/actions/consensus.js'
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
		expect(reducer({}, {type: REQUEST_CONSENSUS}).consensus.loading).to.equal(true)
	})
	it('should handle RECEIVE_CONSENSUS', () => {
		const consensusdata = {
			height: 1,
			currentblock: '1',
			target: [1],
		}
		const newstate = reducer({}, {type: RECEIVE_CONSENSUS, data: consensusdata})
		expect(newstate.wallet.loading).to.equal(false)
		expect(newstate.consensus.data).to.deep.equal(consensusdata)
	})
	it('should handle REQUEST_WALLET', () => {
		expect(reducer({}, {type: REQUEST_WALLET}).wallet.loading).to.equal(true)
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
		const newstate = reducer({}, {type: RECEIVE_WALLET, data: walletdata})
		expect(newstate.wallet.loading).to.equal(false)
		expect(newstate.wallet.data).to.deep.equal(walletdata)
	})
})
/* eslint-enable no-magic-numbers */
