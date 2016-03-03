import { getDaemonConstants } from '../../src/renderer/actions/daemon.js'
import { REQUEST_DAEMON_CONSTANTS, RECEIVE_DAEMON_CONSTANTS } from '../../src/renderer/constants/daemon.js'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const HTTP_OK = 200

describe('daemon actions', () => {
	it('creates RECEIVE_DAEMON_CONSTANTS on successful /daemon/constants call', (done) => {
		const constants = {
			genesistimestamp: 0,
			blocksizelimit: 0,	
			blockfrequency: 0,
			targetwindow: 0,
			mediantimestampwindow: 0,
			futurethreshold: 0,
			siafundcount: '',
			siafundportion: '',
			maturitydelay: 0,

			initialcoinbase: 0,
			minimumcoinbase: 0,

			roottarget: [],
			rootdepth: [],

			maxadjustmentup: '',
			maxadjustmentdown: '',

			siacoinprecision: '',
		}
		const expectedActions = [
			{ type: REQUEST_DAEMON_CONSTANTS },
			{ type: RECEIVE_DAEMON_CONSTANTS,
				constants,
			},
		]

		nock('http://localhost:9980')
			.get('/daemon/constants')
			.reply(HTTP_OK, constants)

		const store = mockStore({}, expectedActions, done)
		store.dispatch(getDaemonConstants())
	})
})
