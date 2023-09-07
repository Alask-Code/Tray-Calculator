const { BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        height: 270,
        width: 210,
        frame: false,
        resizable: false,
        transparent: true,
        fullscreenable: false,
        skipTaskbar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })
    win.removeMenu()
    win.loadFile('index.html')
    win.hide()
    return win
}

module.exports = createWindow()