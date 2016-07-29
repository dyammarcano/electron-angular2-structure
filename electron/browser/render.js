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