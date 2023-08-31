const { app, BrowserWindow } = require('electron');
const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
        title: 'Created By Ahmed Harhash, Call Center : 01152958015',
        width: 1200,
        minWidth:1100,
        height: 700,
        autoHideMenuBar: true,
    });
    mainWindow.loadURL('http://pos.test')
}

app.whenReady().then(() => {
    createMainWindow()
})