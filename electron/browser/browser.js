const { app, BrowserWindow, Tray } = require('electron');
const { updater } = require('electron-updater')

app.on('ready', () => {
    const {width, height} = require('electron').screen.getPrimaryDisplay().workAreaSize
  let mainWindow = new BrowserWindow({
    icon: "icons/128x128.png",
    minHeight: 600,
    minWidth: 800,
    width,
    height
  });
  mainWindow.maximize();

  mainWindow.on('closed', function() {
    mainWindow = null;
  })

  mainWindow.loadURL('file://' + __dirname + '/index.html')
})
