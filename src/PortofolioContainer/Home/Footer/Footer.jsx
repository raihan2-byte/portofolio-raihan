import React from 'react'
import "./Footer.css";
import IMG from "../../../assets/Home/shape-bg.png"

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={IMG} alt='no internet connection'></img>

        </div>
    </div>
  )
}
