import React from 'react'
import './Navbar.css'

function navbar() {
  return (
    <>
      <nav id='nav-bar'>
        <div className="logo">
          <span id='logo'>DCODE</span>
        </div>
        <div className="nav-items">
          <a href='#' className='item'>D-Coins</a>
          <a href='#' className='item'>Shop</a>
          <a href='#' className='item'>About Us</a>
          <a href='#' className='item'>Contact</a>
          <a href='#' id='account'><img src="https://cdn.pixabay.com/photo/2022/06/05/07/04/person-7243410_1280.png" alt="" /></a>
        </div>
      </nav>
    </>
  )
}

export default navbar