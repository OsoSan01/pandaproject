import React from 'react'
import "./Settings.css"
import Sidebar from '../../components/sidebar/Sidebar'


export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Details</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="http://teehunter.com/wp-content/uploads/2015/10/link-bear.jpg" alt="ME" />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:'none'}} />
            </div>
            <label >Username</label>
            <input type="text" placeholder='bear Link' />
            <label >Email</label>
            <input type="text" placeholder='bear@Link.com' />
            <label >Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}
