const { app, BrowserWindow, Tray } = require('electron')
const { updater } = require('electron-updater')

require('devtron').install()

var mainWindow = null
 
app.on('ready', () => {
    const {width, height} = require('electron').screen.getPrimaryDisplay().workAreaSize

    let configWindow = {
        minHeight: 600,
        minWidth: 800,
        width,
        height,
        backgroundColor: '#2e2c29' 
    }

    updater.on('ready', () => {
        let mainWindow = new BrowserWindow({ configWindow });
        mainWindow.maximize();
        mainWindow.loadURL('file://' + __dirname + '/index.html')
        
        mainWindow.on('closed', function() {
          mainWindow = null;
        })
    })

    updater.on('updateRequired', () => {        
        app.quit();
    })

    updater.on('updateAvailable', () => {
        mainWindow.webContents.send('update-available');
    })
    
    updater.start()
})

