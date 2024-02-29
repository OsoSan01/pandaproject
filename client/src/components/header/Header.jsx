import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className='headerTitleSm'>React & Node</span>
          <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src="https://media.cntraveler.com/photos/6536ad8d3647d48343ed9f92/4:3/w_4016,h_3012,c_limit/Sydney%20Opera%20House_marek-piwnicki-Lr12BUpEXWg-unsplash.jpg" alt="Opera House" />
    </div>
  )
}
