// index.js is the main entry point for the Sia Electron application.
// Electron module imports
import App from 'app'
import BrowserWindow from 'browser-window'
// Node module imports
import Path from 'path'

// Global BrowserWindow object reference
let mainWindow

// Electron Application lifecycle callbacks
App.on('ready', () => {
	// Create the main window
	mainWindow = new BrowserWindow({width: 800, height: 600, autoHideMenuBar: true})

	// Perform the initial DOM load
	mainWindow.loadURL(Path.join('file://', __dirname, '/index.html'))

	// Dereference mainWindow when it has been closed so the GC cleans up
	mainWindow.on('closed', () => {
		mainWindow = null
	})
})

App.on('window-all-closed', () => {
	App.quit()
})
