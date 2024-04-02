import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo">Weather India</div>
      <div className="searchbox">
        <input type="text" className='search-input' placeholder='search location'/>
        <span class="material-symbols-outlined">Search</span>
      </div>
    </div>
  )
}

export default Header