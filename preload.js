const {contextBridge, ipcRenderer}=require("electron")

contextBridge.exposeInMainWorld("electronAPI", {
    ipcRenderer: {
      ...ipcRenderer,
      on: ipcRenderer.on.bind(ipcRenderer),
      removeListener: ipcRenderer.removeListener.bind(ipcRenderer),
    },
    
  });