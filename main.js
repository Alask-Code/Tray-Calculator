require('electron-reload')(__dirname)
const { app } = require('electron')

function App() {
    const win = require('./electron/BrowserWindow')
}

app.whenReady().then(App)