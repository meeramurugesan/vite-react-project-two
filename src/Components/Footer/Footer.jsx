import React from 'react'
import '../Footer/Footer.css'
import facebook_icon from '../../assets/facebook-icon.png'
import youtube_icon from '../../assets/youtube-icon.png'
import insta_icon from '../../assets/insta-icon.png'

function Footer() {
    return (
        <div className='Footer nav-container'>
            <div className='footer-one'>
                <div className='footerone-boxone'>
                    <h6 className='footerone-text'>FAQ</h6>
                    <h6 className='footerone-text'>PRIVACY POLICY_2</h6>

                </div>
                <div className='footerone-boxtwo'>
                    <h6 className='footerone-text'>TERMS OF SERVICE</h6>
                    <h6 className='footerone-text'>REFUND POLICY</h6>
                    <h6 className='footerone-text'>RETURNS</h6>
                </div>
                <div className='footerone-boxthree'>
                    <h6 className='footerone-text'>CONTACT US</h6>
                    <h6 className='footerone-text'>PRIVACY POLICY</h6>
                </div>
                <div className='footerone-boxfour'>
                    <h6 className='footerone-textboxfour'>Get updates from Evergreen</h6>
                   <div className='footer-btn'>
                   <input type=' Email' placeholder='Enter Email' className='email-input'/><button className='span-btn'><a>Subscribe</a></button>
                   </div>
                   <div className='address'>
                    <h6 className='footerone-addresstext'>+44 20 1234 5678</h6>
                    <h6 className='footerone-addresstext'>info@evergreen.tennis</h6>
                    <h6 className='footerone-addresstext'>20 Wenlock Road, London, N1 7GU</h6>

                   </div>
                    </div>
            


               </div>
               <div className='secondbox-div'>
                <div className='media-icons'>
                    <img src={facebook_icon} alt=''/>
                    <img src={youtube_icon} alt=''/>
                    <img src={insta_icon} alt=''/>
                </div>

                <div className='evergreen-box'>
                    <h5 className='evergreen-text'>© 2023 Evergreen</h5>
                </div>

               </div>
                
            </div>
             

    
    )
}

export default Footer