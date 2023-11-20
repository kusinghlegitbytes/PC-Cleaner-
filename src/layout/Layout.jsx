import React from 'react'
import Aside from './Aside/Aside'
import Main from './Main/Main'
import "./layout.css"
const Layout = ({children}) => {
  return (
    <div className='main-layout'>
      <Aside/>
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
