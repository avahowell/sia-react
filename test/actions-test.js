// Test Sia-UI actions
import * as actions from '../src/renderer/actions.js'
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
	it('creates RECEIVE_CONSENSUS on successful /consensus call', (done) => {
		const expectedConsensus = {
			'height': 38639,
			'currentblock': '0000000000003c098400ee084f7b19e6d8a2a38c8ee994904d329834e5cd881d',
			/* eslint-disable no-magic-numbers */
			'target': [0, 0, 0, 0, 0, 1, 92, 120, 146, 147, 220, 157, 92, 64, 10, 26, 77, 1, 101, 213, 45, 243, 160, 81, 148, 192, 23, 76, 116, 109, 6, 156],
			/* eslint-enable no-magic-numbers */
		}
		const expectedActions = [
			{ type: actions.REQUEST_CONSENSUS },
			{ type: actions.RECEIVE_CONSENSUS, data: expectedConsensus },
		]

		nock('http://localhost:9980')
			.get('/consensus')
			.reply(HTTP_OK, expectedConsensus)

		const store = mockStore({ consensus: {} }, expectedActions, done)
		store.dispatch(actions.getConsensus())
	})
})
