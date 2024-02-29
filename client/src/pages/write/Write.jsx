import React from 'react'
import "./Write.css"

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImage' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-IZikFglpANto6wFDD7DBQHaE8%26pid%3DApi&f=1&ipt=b42938db81e04fad49491a2f09806c748a6e37cf9447be9296309bbda03d56f1&ipo=images" alt="Post picture" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
                <input type="text" placeholder='Title' className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type="text" className='writeInput'></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
