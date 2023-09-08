const { BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        height: 310,
        width: 250,
        frame: false,
        resizable: false,
        transparent: true,
        alwaysOnTop: true, //MUST REMOVE
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
    win.hide() //MUST REMOVE
    win.openDevTools()
    return win
}

module.exports = createWindow()