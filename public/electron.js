const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const { ipcMain ,screen } = electron;
const isDev = require("electron-is-dev");

const openDashboardWindow = require('./windows/dashboard');


let mainWindow;
        function createWindow() {

            mainWindow = new BrowserWindow({ width:800, height: 680, webPreferences: {
                nodeIntegration: true} ,backgroundColor: '#b9bdd5'});
            mainWindow.loadURL(
            isDev
            ? "http://localhost:3000/login"
            : `file://${path.join(__dirname, "../build/index.html")}`
            );
            mainWindow.on("closed", () => (mainWindow = null));
            mainWindow.webContents.on('did-finish-load',()=>{
                mainWindow.setTitle("Sales Management");
            })
        }

    app.on("ready", createWindow);


    //ipcmain to to listen and render new window

    ipcMain.on('open:dashboard', () => openDashboardWindow(mainWindow));
 
    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
        app.quit();
        }
    });

    app.on("activate", () => {
    if (mainWindow === null) {
    createWindow();
    }

    });