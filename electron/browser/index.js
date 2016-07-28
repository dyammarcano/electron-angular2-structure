var app = require('app'),
    BrowserWindow = require('browser-window'),
    updater = require('electron-updater')

var mainWindow = null

app.on('ready', function() {
    updater.on('ready', function () {
        mainWindow = new BrowserWindow({width: 800, height: 600})
        mainWindow.loadURL('file://' + __dirname + '/index.html')
        mainWindow.openDevTools({detach:true})        
        mainWindow.on('closed', function() {
            mainWindow = null;
        })
    })
    updater.on('updateRequired', function () {        
        app.quit();
    })
    updater.on('updateAvailable', function () {
        mainWindow.webContents.send('update-available');
    })
    updater.start()
})