import React from 'react'
import '../Brand/Brand.css'
import brand_img1 from '../../assets/brand-img1.jpg'
import brand_img2 from '../../assets/brand-img2.png'
import brand_img3 from '../../assets/brand-img3.png'
function Brand() {
  return (
    <div className='brand nav-container'>
       <h3 className='head-text'>Our Brand Values</h3>
       <div className='brand-boxs'>
         <div className='brand-boxone'>
           <img src={brand_img1} alt=''/>
          <div className='box-oneinterbox'>
          <h5 className='box-head'>Tennis Heritage</h5>
           <p className='tennis-para'>Tennis is a globally beloved sport that originated in England and has evolved into an international phenomenon, with prestigious tournaments like Wimbledon epitomising its enduring popularity and tradition.</p>
          </div>
         </div>
         <div className='brand-boxone'>
           <img src={brand_img2} alt=""/>
          <div className='box-oneinterbox'>
          <h5 className='box-head'>Sustainability</h5>
          <p className='sustainability-para'>We are committed to making tennis sustainable and ensuring that the game does not harm the environment.</p>
          </div>
         </div>
         <div className='brand-boxone'>
           <img src={brand_img3} alt=''/>
           <div className='box-oneinterbox'>
           <h5 className='box-head'>Sportsmanship</h5>
           <p className='sports-para'>Evergreen represents respect and integrity on and off the court. We love to win, but winning doesn't have to come at the expense of honour, dignity, and class.</p>

           </div>
         </div>
       </div>
    </div>
  )
}

export default Brand