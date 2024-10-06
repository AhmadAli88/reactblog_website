import React from 'react'
import "./header.css"
import { IMAGES } from '../../assets/images'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React and Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={IMAGES.PIC1} alt="" srcset="" />
    </div>
  )
}

export default Header