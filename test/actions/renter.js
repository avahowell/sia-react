import { getFiles } from '../../src/renderer/actions/renter.js'
import { REQUEST_FILES, RECEIVE_FILES } from '../../src/renderer/constants/renter.js'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const HTTP_OK = 200

describe('renter actions', () => {
	it('getFiles dispatches expected actions', (done) => {
		const expectedFiles = [{
			siapath: 'test',
			destination: 'test',
			filesize: 1337,
			received: 1337,
			starttime: 'test',
		}]
		nock('http://localhost:9980')
			.get('/renter/files')
			.reply(HTTP_OK, expectedFiles)

		const expectedActions = [
			{ type: REQUEST_FILES },
			{ type: RECEIVE_FILES,
				files: expectedFiles,
			},
		]

		const store = mockStore({}, expectedActions, done)
		store.dispatch(getFiles())
	})
})
