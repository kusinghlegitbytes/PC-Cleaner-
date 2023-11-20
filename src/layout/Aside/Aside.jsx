import React from 'react'
import menuItems from "./menuItems"
import MainMenuItem from './MainMenuItem'
import "./main_menu_item.css"
const Aside = () => {
  return (
    <div className='aside_container'>
      <ul className='main_menu'>
        {menuItems.map(menuItem=><MainMenuItem menuItem={menuItem} key={menuItem.id}/>)}
      </ul>
    </div>
  )
}

export default Aside
