const {app, BrowserWindow, ipcMain}=require("electron")
const path=require("path")
const appPath=path.join(__dirname, "build", "index.html")
const {getMemoryInfo}=require("./src/electron/memoryInfo")
const {getProcessorInformation}=require("./src/electron/processorInfo")
const {clearAdobeCache, clearAdobeMostRecent, clearAdobeTemp}=require("./src/electron/adobeInfo")
const {clearFileZillaMostRecent, clearFlashPlayerCache, clearFlashPlayerCookies}=require("./src/electron/fileZillaInfo")
const {clearGoogleChromeCache, clearGoogleChromeURLHistory}=require("./src/electron/googleChromeInfor")
const {
    getHardDiskModel, 
    getHardDiskSize, 
    getHardDiskFreeSpace, 
    getHardDiskVolumeName,
    getHardDiskSerialNumber
}=require("./src/electron/hardDiskInfo")
let mainWindow;
function createWindow(){
    mainWindow=new BrowserWindow({
        height:1000,
        width:1000,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.webContents.toggleDevTools()
    mainWindow.loadURL(appPath)
    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            ipcMain.on("set-title", (event, title)=>{
                const webContents=event.sender
                const win=BrowserWindow.fromWebContents(webContents)
                win.setTitle(title)  
                const success=`title ${title} set successfully`
                webContents.send("title-set", success)
            })            
            createWindow();
        }
    });

    app.on("window-all-closed", function () {
        if (process.platform !== "darwin") app.quit();
    });
}
app.whenReady()
.then(()=>{
    createWindow()
    ipcMain.on("set-title", (event, title)=>{
        const webContents=event.sender
        const win=BrowserWindow.fromWebContents(webContents)
        win.setTitle(title)  
        const success=`title ${title} set successfully`
    })
})
ipcMain.handle('get-memory-information', async (event, result) => {
    const memoryInfo=getMemoryInfo()
    return new Promise((resolve, reject) => {
        resolve(memoryInfo);
    });
});
ipcMain.handle('get-processor-information', async (event, result) => {
    const processorInfo=getProcessorInformation()
    return new Promise((resolve, reject) => {
        resolve(processorInfo);
    });
});
ipcMain.handle('get-harddisk-information', async (event, result) => {
    const model=await getHardDiskModel()
    const size=await getHardDiskSize()
    const freeSpace=await getHardDiskFreeSpace()
    const volumeName=await getHardDiskVolumeName()
    const serialNumber=await getHardDiskSerialNumber()
    const data={
        model,
        size,
        freeSpace,
        volumeName,
        serialNumber
    }
    return new Promise((resolve, reject) => {
        resolve(data);
    });
});
ipcMain.handle('clear_adobe_cache', async (event, result) => {
    const hardDiskInfo=clearAdobeCache()
    return new Promise((resolve, reject) => {
        resolve(hardDiskInfo);
    });
});
ipcMain.handle('clear_adobe_most_recent', async (event, result) => {
    const adobeMostRecent=clearAdobeMostRecent()
    return new Promise((resolve, reject) => {
        resolve(adobeMostRecent);
    });
});
ipcMain.handle('clear_adobe_temp', async (event, result) => {
    const adobeTemp=clearAdobeTemp()
    return new Promise((resolve, reject) => {
        resolve(adobeTemp);
    });
});
ipcMain.handle('clear_file_zilla_most_recent', async (event, result) => {
    const fileZillaMostRecent=clearFileZillaMostRecent()
    return new Promise((resolve, reject) => {
        resolve(fileZillaMostRecent);
    });
});
ipcMain.handle('clear_flash_player_cache', async (event, result) => {
    const flashPlayerCache=clearFlashPlayerCache()
    return new Promise((resolve, reject) => {
        resolve(flashPlayerCache);
    });
});
ipcMain.handle('clear_flash_player_cookies', async (event, result) => {
    const flashPlayerCookies=clearFlashPlayerCookies()
    return new Promise((resolve, reject) => {
        resolve(flashPlayerCookies);
    });
});
ipcMain.handle('clear_google_chrome_cache', async (event, result) => {
    const googleChromeCache=clearGoogleChromeCache()
    return new Promise((resolve, reject) => {
        resolve(googleChromeCache);
    });
});
ipcMain.handle('clear_google_chrome_url_history', async (event, result) => {
    const googleChromeURLHistory=clearGoogleChromeURLHistory()
    return new Promise((resolve, reject) => {
        resolve(googleChromeURLHistory);
    });
});