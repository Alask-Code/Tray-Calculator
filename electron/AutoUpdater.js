const { autoUpdater } = require("electron-updater")

function AutoUpdater() {
    autoUpdater.checkForUpdatesAndNotify()
}
module.exports = AutoUpdater