import {REQUEST_GATEWAY, RECEIVE_GATEWAY, getGateway} from '../../src/renderer/actions/gateway.js'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const HTTP_OK = 200

describe('gateway actions', () => {
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
})
