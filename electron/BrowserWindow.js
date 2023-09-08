const { resolve } = require('path')
const { BrowserWindow } = require("electron")
const icon = resolve(__dirname, '../', 'assets', 'appIcon.jpg')

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
    win.setTitle('Tray Calc+')
    win.removeMenu()
    win.openDevTools()
    win.loadFile('index.html')
    win.hide()

    return win
}

module.exports = createWindow()