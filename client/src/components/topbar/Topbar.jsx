import React from 'react'
import { Link } from 'react-router-dom';
import "./Topbar.css"


export default function Topbar() {
    const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcons fa-brands fa-square-facebook"></i>  
            <i className="topIcons fa-brands fa-square-pinterest"></i>
            <i className="topIcons fa-brands fa-square-x-twitter"></i>
            <i className="topIcons fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                    <Link className='link' to="/" >HOME</Link>
                    </li>
                <li className='topListItem'>
                <Link className='link' to="/" >ABOUT</Link>
                    </li>
                <li className='topListItem'>
                <Link className='link' to="/" >CONTACT</Link>
                    </li>
                <li className='topListItem'>
                    <Link className='link' to="write">WRITE</Link>
                    </li>
                <li className='topListItem'>
                    {user && "LOGOUT" }    
                </li>
            </ul>
        </div>
        <div className='topRight'>
            {
                user ? (
                    <img className='topImage' src="https://www.desktopbackground.org/download/1280x1024/2014/09/02/818664_awesome-grizzly-bear-hd-wallpapers-free-download_2560x1440_h.jpg" alt="me" />
                ) : (
                    <ul className='topList'>
                        <li className="topListItem">
                            <Link className='link' to="/login" >
                            LOGIN
                             </Link>   
                        </li>  
                        <li className="topListItem">
                            <Link className='link' to="/register" >
                             REGISTER
                            </Link>               
                        </li>
                    </ul>
                )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
