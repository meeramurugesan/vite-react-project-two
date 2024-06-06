import React from 'react'
import '../Professionals/Professional.css'
import Tennisboy_img from '../../assets/Tennisboy-img.png'
import upward_img from '../../assets/upward-img.png'
import downward_img from '../../assets/downward-img.png'
function Professional() {
  return (
    <div className='professional nav-container'>
        <h3 className='professional-head'>Frequently Asked Questions</h3>
    <div className='professional-box'>
    <div className='leftboxdiv'>
    <img src={Tennisboy_img} alt=''/>
     </div>
     <div className='rightboxdiv'>
        <div className='rightbox-interdiv'>
        <div className='rightbox-para'>
         <p className='delivaries-para'>How to subscribe for deliveries?<img src={upward_img} alt=''/></p>
         <p className='para-subscribe'>Subscribe with ease online or contact us directly to receive eco-balls on your schedule.</p>
        </div>
        <div className='rightbox-para'>
         <p className='deliveries-para'> How often will I receive my deliveries?<img src={downward_img} alt=''/></p>
        </div>
        <div className='rightbox-para'>
         <p className='deliveries-para'> Are these balls suitable for competitive play?<img src={downward_img} alt=''/></p>
        </div>
        <div className='rightbox-para'>
         <p className='deliveries-para'>Who we are, and Why we are a sustainable choice?<img src={downward_img} alt=''/></p>
        </div>
        <p className='feel-free'>Have more questions? Feel free to contact us</p>
        </div>
     </div>
    </div>

    <div className='Newsletter'>
     
      <div className='newsletter-paradiv'>
      <h5 className='subscribe-newsletter'>Subscribe to our Newsletter</h5>
      <p className='our-newsletterpara'>Our newsletter is your direct line to everything happening at the Eco-Tennis Club. Be the first to know about events, tournaments, and special offers</p>
      </div>
<div className='mail-address'>
  <input type='Email' placeholder='Email address'/><button className='subscribe-btnlast'>Subscribe</button>

</div>
    </div>
    </div>
  )
}

export default Professional