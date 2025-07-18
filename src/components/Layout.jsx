import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children , cart}) => {
  return (
    <div>
      <Navbar cart={cart}/>
        {children}
      <Footer/>
    </div>
  )
}

export default Layout
