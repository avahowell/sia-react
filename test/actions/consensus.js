import { getConsensus } from '../../src/renderer/actions/consensus.js'
import { REQUEST_CONSENSUS, RECEIVE_CONSENSUS } from '../../src/renderer/constants/consensus.js'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const HTTP_OK = 200

describe('consensus actions', () => {
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
