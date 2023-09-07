const { BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        height: 310,
        width: 250,
        frame: false,
        resizable: false,
        transparent: true,
        alwaysOnTop: true, //REMOVE BEFORE MERGE "ui-design"
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
    win.hide() //REMOVE BEFORE MERGE "ui-design"
    return win
}

module.exports = createWindow()