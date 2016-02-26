// Test Sia-UI actions
import {REQUEST_WALLET, RECEIVE_WALLET, getWallet} from '../src/renderer/actions/wallet.js'
import {REQUEST_CONSENSUS, RECEIVE_CONSENSUS, getConsensus} from '../src/renderer/actions/consensus.js'
import {REQUEST_GATEWAY, RECEIVE_GATEWAY, getGateway} from '../src/renderer/actions/gateway.js'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const HTTP_OK = 200

// Test async siad action calls
// Intercept and mock Siad HTTP requests using nock
describe('siad action calls', () => {
	afterEach(() => {
		nock.cleanAll()
	})
	it('creates RECEIVE_GATEWAY on successful /gateway call', (done) => {
		const expectedGateway = {
			peers: [{'netaddress': '1337', 'version': '0.137'}],
			netaddress: '31337',
		}
		const expectedActions = [
			{ type: REQUEST_GATEWAY },
			{ type: RECEIVE_GATEWAY,
				peers: [{'netaddress': '1337', 'version': '0.137'}],
				netaddress: '31337',
			},
		]
		nock('http://localhost:9980')
			.get('/gateway')
			.reply(HTTP_OK, expectedGateway)
		const store = mockStore({}, expectedActions, done)
		store.dispatch(getGateway())
	})
	it('creates RECEIVE_WALLET on successful /wallet call', (done) => {
		const expectedWallet = {
			encrypted: true,
			unlocked: false,

			confirmedsiacoinbalance: '',
			unconfirmedoutgoingsiacoins: '',
			unconfirmedincomingsiacoins: '',

			siafundbalance: '',
			siacoinclaimbalance: '',
		}
		const expectedActions = [
			{ type: REQUEST_WALLET },
			{ type: RECEIVE_WALLET,
				encrypted: true,
				unlocked: false,

				confirmedsiacoinbalance: '',
				unconfirmedoutgoingsiacoins: '',
				unconfirmedincomingsiacoins: '',

				siafundbalance: '',
				siacoinclaimbalance: '',
			},
		]

		nock('http://localhost:9980')
			.get('/wallet')
			.reply(HTTP_OK, expectedWallet)

		const store = mockStore({}, expectedActions, done)
		store.dispatch(getWallet())
	})
	it('creates RECEIVE_CONSENSUS on successful /consensus call', (done) => {
		const expectedConsensus = {
			'height': 38639,
			'currentblock': '0000000000003c098400ee084f7b19e6d8a2a38c8ee994904d329834e5cd881d',
			'target': [0, 0, 0, 0, 0, 1, 92, 120, 146, 147, 220, 157, 92, 64, 10, 26, 77, 1, 101, 213, 45, 243, 160, 81, 148, 192, 23, 76, 116, 109, 6, 156],
		}
		const expectedActions = [
			{ type: REQUEST_CONSENSUS },
			{ type: RECEIVE_CONSENSUS,
				height: 38639,
			  'currentblock': '0000000000003c098400ee084f7b19e6d8a2a38c8ee994904d329834e5cd881d',
				'target': [0, 0, 0, 0, 0, 1, 92, 120, 146, 147, 220, 157, 92, 64, 10, 26, 77, 1, 101, 213, 45, 243, 160, 81, 148, 192, 23, 76, 116, 109, 6, 156],
			},
		]

		nock('http://localhost:9980')
			.get('/consensus')
			.reply(HTTP_OK, expectedConsensus)

		const store = mockStore({}, expectedActions, done)
		store.dispatch(getConsensus())
	})
})
