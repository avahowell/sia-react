// This is the main entry point for the Sia-UI renderer process.
import React from 'react'
import ReactDOM from 'react-dom'
import SiaUI from './siaui.js'

ReactDOM.render(
	<SiaUI.app />,
  document.getElementById('app')
)

document.body.style.width = window.innerWidth + 'px'
document.body.style.height = window.innerHeight + 'px'

window.onresize = function() {
	document.body.style.width = window.innerWidth + 'px'
	document.body.style.height = window.innerHeight + 'px'
}
