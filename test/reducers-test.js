import reducer from '../src/renderer/reducers.js'
import * as actions from '../src/renderer/actions.js'
import {expect} from 'chai'

// Test Sia-UI reducers.
/* eslint-disable no-magic-numbers */
describe('sia-ui reducer', () => {
	it('should return initial state', () => {
		expect(reducer(undefined, {})).to.deep.equal({
			consensus: {
				loading: false,
				data: {
					height: 0,
					currentblock: '',
					target: [],
				},
			},
		})
	})
	it('should handle REQUEST_CONSENSUS', () => {
		expect(reducer({}, {type: actions.REQUEST_CONSENSUS}).consensus.loading).to.equal(true)
	})
	it('should handle RECEIVE_CONSENSUS', () => {
		const consensusdata = {
			height: 1,
			currentblock: '1',
			target: [1],
		}
		expect(reducer({}, {type: actions.RECEIVE_CONSENSUS, data: consensusdata})).to.deep.equal(
			{
				consensus: {
					loading: false,
					data: consensusdata,
				},
			}
		)
	})
})
/* eslint-enable no-magic-numbers */
