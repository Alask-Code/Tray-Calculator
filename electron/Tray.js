const { Tray } = require('electron')
const { resolve } = require('path')
const icon = resolve(__dirname, '../', 'assets', 'icon.png')
function createTray() {
    const tray = new Tray(icon)
    tray.setToolTip('Click to open calculator, Right-click to close.')
    return tray
}
module.exports = createTray()