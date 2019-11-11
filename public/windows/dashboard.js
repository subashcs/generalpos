let dashboardWindow;
const electron = require('electron')
const {BrowserWindow} = electron;
const {app  } = electron;
const isDev = require("electron-is-dev");

const openDashboardWindow = (mainWindow) =>{
  let screenSize = electron.screen.getPrimaryDisplay().size;
  
    dashboardWindow = new BrowserWindow({ width:screenSize.width, height:screenSize.height,webPreferences: {
      nodeIntegration: true} });
    dashboardWindow.loadURL(
      isDev
        ? "http://localhost:3000/dashboard/makeasale"
        : `file://${path.join(__dirname, "../build/index.html/dashboard/makeasale")}`
    );
    dashboardWindow.webContents.openDevTools({detached:true});
    dashboardWindow.on("closed", () => (dashboardWindow = null));
    dashboardWindow.webContents.on('did-finish-load',()=>{
      dashboardWindow.setTitle("Sales Management");
  })
    mainWindow.close();
}

module.exports = openDashboardWindow