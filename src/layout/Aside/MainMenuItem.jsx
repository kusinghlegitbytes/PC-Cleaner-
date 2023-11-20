import { channels } from '../../channels'
import React from 'react'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"
import "./main_menu_item.css"
import { useState, useContext } from 'react'
import {AppContext} from '../../context/AppContext'
const MainMenuItem = ({menuItem}) => {
  const ipcRenderer=window.electronAPI.ipcRenderer
  const [showSubmenu, setShowSubmenu]=useState(false)
  const appCtx=useContext(AppContext)
  const handleShowSubmenu=()=>{
    setShowSubmenu(prevState=>!prevState)
  }
  const handleSetCurrentStateID=(id)=>{
    appCtx.handleSetActiveSubMenu(id)
    console.log("id ", id)
    /********** This is working ************* */
    // ipcRenderer.invoke(channels.RAM_STATS, "===================")
    // .then(res=>console.log("response is ", res))
    // .catch(err=>console.log(err))
  }
  const {id, title, children}=menuItem
  return <li><span onClick={handleShowSubmenu}>{!showSubmenu?<AiOutlinePlusCircle/>:<AiOutlineMinusCircle/>} {title} </span>
  {showSubmenu && <ul className='sub_menu'>
    {children.map(submenuItem=><li key={submenuItem.id} onClick={()=>handleSetCurrentStateID(submenuItem.id)}>{submenuItem.title}</li>)}
  </ul>}
</li>
}
export default MainMenuItem
