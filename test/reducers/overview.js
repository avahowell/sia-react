import overview from '../../src/renderer/reducers/overview.js'
import {RECEIVE_WALLET} from '../../src/renderer/actions/wallet.js'
import {RECEIVE_CONSENSUS} from '../../src/renderer/actions/consensus.js'
import {RECEIVE_GATEWAY} from '../../src/renderer/actions/gateway.js'
import {expect} from 'chai'

describe('overview reducer', () => {
	it('should return initial state', () => {
		expect(overview(undefined, {})).to.deep.equal({
			balance: '',
			peers: 0,
			height: 0,
		})
	})
	it('should handle RECEIVE_CONSENSUS', () => {
		const consensus = {
			type: RECEIVE_CONSENSUS,
			height: 1,
			currentblock: '1',
			target: [1],
		}
		const newstate = overview({}, consensus)
		expect(newstate.height).to.equal(consensus.height)
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
		const newstate = overview({}, wallet)
		expect(newstate.balance).to.equal(wallet.confirmedsiacoinbalance)
	})
	it('should handle RECEIVE_GATEWAY', () => {
		const gateway = {
			type: RECEIVE_GATEWAY,
			peers: [{'netaddress': '1337', 'version': '0.137'}],
			netaddress: '31337',
		}
		const newstate = overview({}, gateway)
		expect(newstate.peers).to.equal(1)
	})
})
