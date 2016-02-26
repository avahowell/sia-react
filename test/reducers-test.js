// TODO: split up these tests into reducers/, actions/

import reducer from '../src/renderer/reducers/'
import {RECEIVE_WALLET} from '../src/renderer/actions/wallet.js'
import {RECEIVE_CONSENSUS} from '../src/renderer/actions/consensus.js'
import {RECEIVE_GATEWAY} from '../src/renderer/actions/gateway.js'
import {expect} from 'chai'

// Test Sia-UI reducers
describe('sia-ui reducer', () => {
	it('should return initial state', () => {
		expect(reducer(undefined, {})).to.deep.equal({
			overview: {
				balance: '',
				peers: 0,
				height: 0,
			},
		})
	})
	it('should handle RECEIVE_CONSENSUS', () => {
		const consensus = {
			type: RECEIVE_CONSENSUS,
			height: 1,
			currentblock: '1',
			target: [1],
		}
		const newstate = reducer({}, consensus)
		expect(newstate.overview.height).to.equal(consensus.height)
	})
	it('should handle RECEIVE_WALLET', () => {
		const wallet = {
			type: RECEIVE_WALLET,
			encrypted: true,
			unlocked: true,

			confirmedsiacoinbalance: '1337',
			unconfirmedoutgoingsiacoins: '0',
			unconfirmedincomingsiacoins: '0',

			siafundbalance: '0',
			siacoinclaimbalance: '0',
		}
		const newstate = reducer({}, wallet)
		expect(newstate.overview.balance).to.equal(wallet.confirmedsiacoinbalance)
	})
	it('should handle RECEIVE_GATEWAY', () => {
		const gateway = {
			type: RECEIVE_GATEWAY,
			peers: [{'netaddress': '1337', 'version': '0.137'}],
			netaddress: '31337',
		}
		const newstate = reducer({}, gateway)
		expect(newstate.overview.peers).to.equal(1)
	})
})
