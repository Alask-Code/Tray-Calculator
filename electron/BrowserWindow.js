const { resolve } = require('path')
const { BrowserWindow } = require("electron")
const icon = resolve(__dirname, '../', 'assets', 'appIcon.png')

function createWindow() {
    const win = new BrowserWindow({
        icon,
        width: 250,
        height: 310,
        frame: false,
        resizable: false,
        transparent: true,
        // skipTaskbar: true,
        fullscreenable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })
    win.hide()
    win.removeMenu()
    win.openDevTools()
    win.loadFile('index.html')
    win.setTitle('Tray Calc+')

    return win
}

module.exports = createWindow()