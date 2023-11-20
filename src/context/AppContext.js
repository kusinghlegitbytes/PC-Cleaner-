import { createContext } from "react";
import { useState, useEffect} from "react";
const ipcRenderer=window.electronAPI.ipcRenderer
const AppContext = createContext({
    activeSubmenu: '',
    handleSetActiveSubMenu: (submenu) => {},
    stats:{}
});

const AppContextProvider = ({ children }) => {
    const [activeSubmenu, setActiveSubmenu] = useState("");
    const [stats, setStats]=useState({})
    useEffect(()=>{
        if(activeSubmenu){
            ipcRenderer.invoke(activeSubmenu, "===================")
            .then(res=>{
                setStats({activeSubmenu:activeSubmenu, ...res})
            })
            .catch(err=>console.log(err))
        }
    }, [activeSubmenu])
    const handleSetActiveSubMenu=(submenu)=>{
        setActiveSubmenu(submenu)
    }
    const value = {
        // activeSubmenu,
        handleSetActiveSubMenu,
        stats
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContextProvider as default, AppContext };
