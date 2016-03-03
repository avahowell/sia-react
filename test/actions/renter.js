import * as actions from '../../src/renderer/actions/renter.js'
import * as constants from '../../src/renderer/constants/renter.js'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const HTTP_OK = 200

describe('renter actions', () => {
	it('getDownloads dispatches expected actions', (done) => {
		const expectedDownloads = [{
			siapath: 'test',
			destination: 'test',
			filesize: 1337,
			received: 1337,
			starttime: 'test',
		}]
		const expectedActions = [
			{ type: constants.REQUEST_DOWNLOADS },
			{ type: constants.RECEIVE_DOWNLOADS,
				downloads: expectedDownloads,
			},
		]
		nock('http://localhost:9980')
			.get('/renter/downloads')
			.reply(HTTP_OK, expectedDownloads)

		const store = mockStore({}, expectedActions, done)
		store.dispatch(actions.getDownloads())
	})
	it('getFiles dispatches expected actions', (done) => {
		const expectedFiles = [{
			siapath: 'test',
			destination: 'test',
			filesize: 1337,
			received: 1337,
			starttime: 'test',
		}]
		const expectedActions = [
			{ type: constants.REQUEST_FILES },
			{ type: constants.RECEIVE_FILES,
				files: expectedFiles,
			},
		]
		nock('http://localhost:9980')
			.get('/renter/files')
			.reply(HTTP_OK, expectedFiles)

		const store = mockStore({}, expectedActions, done)
		store.dispatch(actions.getFiles())
	})
})
