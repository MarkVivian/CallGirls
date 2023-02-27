import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function MainLayout({children}) {
  return (
    <>
        <Header />
    
        <Navbar />

            {children}

        <Footer />
        
    </>
  )
}

export default MainLayout