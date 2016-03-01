import files from '../../src/renderer/reducers/files.js'
import {RECEIVE_FILES} from '../../src/renderer/actions/renter.js'
import {expect} from 'chai'

describe('files reducer', () => {
	it('should return initial state', () => {
		expect(files(undefined, {})).to.deep.equal([])
	})
	it('should handle RECEIVE_FILES', () => {
		const receivedfiles = [{
			siapath: 'test',
			destination: 'test',
			filesize: 1337,
			received: 1337,
			starttime: 'test',
		}]
		const filesaction = {
			type: RECEIVE_FILES,
			files: receivedfiles,
		}
		const newstate = files({}, filesaction)
		expect(newstate.files).to.deep.equal(receivedfiles)
	})
})
