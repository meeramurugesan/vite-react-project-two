import React from 'react'
import '../Navbar/Navbar.css'
import facebook_icon from '../../assets/facebook-icon.png'
import insta_icon from '../../assets/insta-icon.png'
import youtube_icon from '../../assets/youtube-icon.png'
import tiktok_icon from '../../assets/tiktok-icon.png'
import contact_icon from '../../assets/contact-icon.png'
import Shopping_cart from '../../assets/Shopping-cart.png'
function Navbar() {
  return (
    <div className='navbar'>
       <div className='nav-container'>
       <div className='social-icons'>
          <img src={facebook_icon} alt=''/>
          <img src={insta_icon} alt=''/>
          <img src={youtube_icon} alt=''/>
          <img src={tiktok_icon} alt=''/>
        </div>
        <div className='nav-para'>
         <p>Get 10% off your first delivery 🎉 </p>
        </div>
        <div className='shopping-cartbox'>
            <h5><img src={contact_icon} alt=''/>My Account</h5>
            <h5><img src={Shopping_cart} alt=''/>My Basket</h5>
        </div>
       </div>
    </div>
  )
}

export default Navbar