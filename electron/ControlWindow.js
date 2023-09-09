function ControlWindow(win, tray) {

    function toggle() {
        if (win.isVisible()) {
            win.hide()

        } else {
            showWindow()

        }

    }
    function showWindow() {
        const { x, y } = getPosition()
        win.setPosition(x, y, false)
        win.show()
    }

    function getPosition() {
        const winBounds = win.getBounds()
        const trayBounds = tray.getBounds()
        const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))
        const y = Math.round(trayBounds.y + trayBounds.height)
        return { x, y }
    }
    return {
        toggle,
        getPosition
    }
}
module.exports = ControlWindow