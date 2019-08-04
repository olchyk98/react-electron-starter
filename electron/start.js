const { app, Menu, BrowserWindow, ipcMain } = require('electron');

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + '/preload.js'
        }
    });

    mainWindow.loadURL(
        process.env.ELECTRON_START_URL ||
        url.format({
            pathname: path.join(__dirname, '/../public/index.html'),
            protocol: 'file:',
            slashes: true
        })
    );

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    Menu.setApplicationMenu(
        Menu.buildFromTemplate([
            {
                label: "Developers",
                submenu: [
                    {
                        label: "Open Developer Tools",
                        accelerator: "Command+Shift+C",
                        click: (_, fwin) => fwin.webContents.openDevTools()
                    }
                ]
            }    
        ])
    );
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});