import React from 'react'
import './header.css'
import CTA from '../header/CTA'
import HeaderSocials from './HeaderSocials'
import CMM1 from '../../assets/cmm6.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Collins Makamu</h1>
        <h5 className="text-light">FullStack Developer and Cybersecurity Enthusiast</h5> 
        <CTA/> 
        <HeaderSocials/>

        <div className="me">
          <img src={CMM1} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>

  

  )
}

export default Header