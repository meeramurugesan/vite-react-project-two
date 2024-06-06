import React from 'react'
import '../Header/Header.css'
import girl_img from '../../assets/girl-img.png'

function Header() {
  return (
    <div className='Header'>
        <h4 className='top-head'>More About Us</h4>
        <div className='two-box nav-container'>
            <div className='leftbox'>
             <img src={girl_img} alt=''/>
            </div>
            <div className='right-box'>
            <div className='rightbox-paradiv'>
            <p className='para-head'>Hi, I am Lina Brown, Founder and CEO of Evergreen</p>
             <p className='para-one'>I love playing tennis. I am a member in three tennis clubs: David Lloyds Riverside Northwood, Moor Park Lawn Tennis Club and Lowlands Club. I compete in league and charity matches, play socially and socialise with other players. It is my heartfelt belief that tennis develops one’s fitness, hones tactical skills and promotes the ethos of fair competition – tennis is about sportsmanship, inclusivity and achievement.</p>
             <p className='para-one'>At Evergreen we sell tennis balls on a subscription basis, to provide our customers with a convenient and cost-effective tennis balls supply service. We also sell tennis goods, gadgets and accessories.Tennis is one of the fastest growing sports in the modern world, with c. 7m tennis players in the UK. As we play more tennis, we use an ever-increasing quantity of tennis balls. Balls are made of hard rubber and are estimated to take 400 years to degrade naturally.</p>
           <p className='para-one'>I created Evergreen to help players enjoy tennis in a sustainable and environmentally friendly way. We are working with our partners and various organisations to try and minimise the environmental impact of tennis.</p>
           <p className='para-one'>Evergreen is unique. We seriously care about you, your experience and your opinions – please feel free to write to us with any feedback and comments. We also care about our planet. I sincerely hope that you will enjoy Evergreen experience and support us.</p>
            </div>
            </div>

        </div>

    </div>
  )
}

export default Header