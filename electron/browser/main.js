import { app, BrowserWindow, Tray, width, height, screen } form 'electron'
import { updater } from'electron-updater'

app.on('ready', () => {
  
  let size = window.screen//.getPrimaryDisplay().workAreaSize

  let mainWindow = new BrowserWindow({
    icon: "icons/128x128.png",
    minHeight: 600,
    minWidth: 800,
    //center: true,
    width: size.availWidth,
    height: size.availHeight,
    backgroundColor: '#2e2c29'
  });
  mainWindow.maximize();
/*mainWindow.openDevTools({
  detach: false
})*/
mainWindow.on('closed', function() {
  mainWindow = null;
})
/*updater.on('updateRequired', function () {
  app.quit();
})
updater.on('updateAvailable', function () {
  mainWindow.webContents.send('update-available')
})
updater.start()*/

mainWindow.loadURL('file://' + __dirname + '/index.html')
})
