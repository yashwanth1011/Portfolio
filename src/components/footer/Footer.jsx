import React from 'react'
import logo from '../../assets/MainLogo.png'

import './Footer.css'
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p> I am frontend developer from, USA with 10 years of experience in Microsoft and Tesla</p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                <FaUser size = {30}/>
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe"> Subscribe </div>
            </div>
            

            </div>
            <hr/>
            <div className="footer-bottom">
                <div className="footer-bottom-left">© 2024 Yashwanth Chennu. All rights reserved.</div>
                <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
                </div>

        </div>
    </div>
  )
}

export default Footer