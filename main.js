require('electron-reload')(__dirname)
const { app } = require('electron')
const ControlWindow = require('./electron/ControlWindow')




function App() {
    function setOnPosition() {
        const { getPosition } = ControlWindow(win, tray)
        const { x, y } = getPosition()
        win.setPosition(x, y, false)
    }


    const win = require('./electron/BrowserWindow')
    const tray = require('./electron/Tray')

    setOnPosition()

    const { toggle } = ControlWindow(win, tray)
    tray.on('click', toggle)

}

app.whenReady().then(() => {
    App()
})