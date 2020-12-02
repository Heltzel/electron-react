const { BrowserWindow, app } = require('electron')
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

app.whenReady().then(createwindow)
