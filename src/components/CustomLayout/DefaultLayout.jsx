import React from 'react'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'

const DefaultLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <div >{children}</div>
      <Footer/>
    </div>
  )
}

export default DefaultLayout
