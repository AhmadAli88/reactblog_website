import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React and Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src="https://picsum.photos/id/1060/536/354?blur=2" alt="" srcset="" />
    </div>
  )
}

export default Header