require('electron-reload')(__dirname)
const { app } = require('electron')
const controlWindow = require('./electron/ControlWindow')




function App() {
    function setOnPosition() {
        const { getPosition } = controlWindow(win, tray)
        const { x, y } = getPosition()
        win.setPosition(x, y, false)
    }


    const win = require('./electron/BrowserWindow')
    const tray = require('./electron/Tray')

    setOnPosition()

    const { toggle } = controlWindow(win, tray)
    tray.on('click', toggle)

}

app.whenReady().then(() => {
    App()
})