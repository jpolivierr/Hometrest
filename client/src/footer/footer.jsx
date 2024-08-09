import React from 'react'
import NavList from '../components/list/NavList'
import WhiteLogo from "../assets/images/logo-white.png"

export default function Footer({container}) {
  return (
    <footer className='footer'>

        <div className={`${container} container-medium flex-space-between footer_main`}>

            <div style={{margin: "0rem", fontSize: "1.5rem", maxWidth: "250px"}}>
              <img style={{width: "100%"}}src={WhiteLogo} />
            </div>

            <ul  className="contact-info-footer"><li><i  className="fa-solid fa-phone"></i><span>Call: (849) 9840 9449</span></li>
            <li><i  className="fa-solid fa-envelope"></i><span>Email: jprealty@kellerwilliams.com</span></li></ul>
        
            <NavList 
                 className="flex-space-between gap-1x nav-list nav-list-alt"
            />

        </div>

        <div  className="container flex-space-between copy_writes">
               <p>2024 Copy write. Developped by www.Appvenir.com</p> 
        </div>

    </footer>
  )
}
