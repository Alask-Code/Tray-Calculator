const { BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })
    win.removeMenu()
    win.loadFile('index.html')
    win.openDevTools()

    return win
}

module.exports = createWindow()