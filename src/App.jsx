import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Headernav from './Components/Headernav/Headernav'
import Header from './Components/Header/Header'
import Subscription from './Components/Subscription/Subscription'
import Brand from './Components/Brand/Brand'
import Professional from './Components/Professionals/Professional'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
     <Navbar/>
     <Headernav/>
     <Header/>
     <Subscription/>
     <Brand/>
     <Professional/>
     <Footer/>
    </div>
  )
}

export default App
