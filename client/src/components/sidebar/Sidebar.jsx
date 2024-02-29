import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="http://teehunter.com/wp-content/uploads/2015/10/link-bear.jpg" alt="ME" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music </li>
                <li className="sidebarListItem">Style </li>
                <li className="sidebarListItem">Food </li>
                <li className="sidebarListItem">Coffee </li>
                <li className="sidebarListItem">Tech </li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US
                <div className="sidebarSocial">
                    <i className="sidebarIcons fa-brands fa-square-facebook"></i>  
                    <i className="sidebarIcons fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcons fa-brands fa-square-x-twitter"></i>
                    <i className="sidebarIcons fa-brands fa-square-instagram"></i>
                </div>
            </span>
        </div>
    </div>
  )
}
