import { getWallet } from '../../src/renderer/actions/wallet.js'
import { REQUEST_WALLET, RECEIVE_WALLET } from '../../src/renderer/constants/wallet.js'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const HTTP_OK = 200

describe('wallet actions', () => {
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
})
