const { BrowserWindow, app } = require('electron')
const path = require('path')

function createwindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntergation: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    },
  })
  win.loadFile('./index.html')
}
// path to nodeModules/bin/electron.ps1
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
})
app.whenReady().then(createwindow)
