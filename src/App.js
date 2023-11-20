import { Fragment, useContext, useEffect } from "react";
import Layout from "./layout/Layout";
import { AppContext } from "./context/AppContext";
import MemoryStats from "./Views/MemoryStats";
import ProcessorStats from "./Views/ProcessorStats";
import HardDiskStats from "./Views/HardDiskStats";
import { channels } from "./channels";
function App() {
  const ipcRenderer=window.electronAPI.ipcRenderer
  const title="Best PC Cleaner"
  const appCtx=useContext(AppContext)
  const stats=appCtx.stats
  const activeMenuStats=stats.activeSubmenu
  useEffect(() => {
    ipcRenderer.send("set-title", title)
  }, []);
  return <Fragment>
    <Layout>
      {console.log(stats, " inside app render")}
      {(activeMenuStats===channels.RAM_STATS) && <MemoryStats stats={stats}/>}
      {(activeMenuStats===channels.PROCESSOR_STATS) && <ProcessorStats stats={stats}/>}
      {(activeMenuStats===channels.HARD_DISK_STATS) && <HardDiskStats stats={stats}/>}
    </Layout>
  </Fragment>
}
export default App;
