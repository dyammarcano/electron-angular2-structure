/*! This file is required by the index.html file and will
 *  be executed in the renderer process for that window.
 *  All of the Node.js APIs are available in this process. 
 */
 

require('devtron').install()

const { plugins } = require('electron-plugins')
const { ipcRenderer } = require('electron')
 
document.addEventListener('DOMContentLoaded', () => {
	plugins.load({ document: document }, (err, loaded) => {
	    if(err) return console.error(err) {
	    	console.log('Plugins loaded successfully.')
	    }
	})
})
 
ipcRenderer.on('update-available', () => {
	console.log('there is an update available for download')
})
