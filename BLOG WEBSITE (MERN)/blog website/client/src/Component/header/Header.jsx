import React from 'react'
import './Header.css'
import Background from '../../Assets/pexels-olha-ruskykh-5984630.jpg';
function Header() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <div className="headerTitleSm">MERN Stack</div>
          <div className="headerTitleLg">Blogs</div>
        </div>
        <img src={Background} alt="" className="headerImg"/>
      </div>
    </>
  )
}

export default Header
