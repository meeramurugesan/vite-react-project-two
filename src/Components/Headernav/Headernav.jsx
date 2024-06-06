import React from 'react'
import '../Headernav/Headernav.css'
import evergreen_logo from '../../assets/evergreen-logo.png'

function Headernav() {
  return (
    <div className='headernav'>
      <div className='headernav-container'>
      <div className='evergreen-logo'>
      <img src={evergreen_logo} alt=''/>
      </div>
      <div className='unorder-nav'>
        <ul>
            <li className='active'>Home</li>
            <li>About Us</li>
            <li>Subscription</li>
            <li>Products</li>
        </ul>
      </div>
      <div className='btns'>
        <div className='contact-btn'>
            <a className='contact'>contact</a>
        </div>
        <div className='sign-btn'>
            <a className='sign'>Signin</a>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Headernav