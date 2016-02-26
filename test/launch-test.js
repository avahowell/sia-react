// Test the main entry point for Sia-UI using spectron
import {Application} from 'spectron'
import Path from 'path'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

// Use chai-as-promised to test asynchronous callbacks from the Sia application.
chai.should()
chai.use(chaiAsPromised)

// 20s launch timeout for this test
const launchTimeout = 20000

/* eslint-disable no-invalid-this */
/* eslint-disable no-magic-numbers */
// Launch Sia-UI using spectron and verify that a window is created, and the React UI is mounted.
describe('sia application launch', function() {
	// 20s timeout for this test group
	this.timeout(launchTimeout)

	// Launch an application instance using spectron before the test group is run
	before(() => {
		this.app = new Application({
			path: Path.join(__dirname, '../node_modules/.bin/electron'),
			args: [Path.join(__dirname, '..')],
		})
		return this.app.start()
	})
	// Transfer promises from spectron's WebDriver client to chai for testing
	before(() => {
		chaiAsPromised.transferPromiseness = this.app.client.transferPromiseness
	})
	// Stop the application instance after the test group has finished
	after(() => {
		if (this.app && this.app.isRunning()) {
			return this.app.stop()
		}
		return true
	})
	// Verify an application window is opened and visible on launch
	it('opens a valid window', () => {
		this.app.client.waitUntilWindowLoaded()
			.getWindowCount().should.eventually.above(0)
			.isWindowMinimized().should.eventually.be.false
			.isWindowVisible().should.eventually.be.true
			.isWindowFocused().should.eventually.be.true
			.getWindowWidth().should.eventually.be.above(0)
			.getWindowHeight().should.eventually.be.above(0)
	})

	// Verify that our React UI mounts to #app
	it('mounts ui', () => {
		this.app.client.waitForText('#app')
	})
})
/* eslint-enable no-invalid-this */
/* eslint-enable no-magic-numbers */
