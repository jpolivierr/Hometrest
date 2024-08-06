import React from 'react'
import "./footer.style.css"
import NavList from '../components/list/NavList'

export default function Footer({container}) {
  return (
    <footer className='footer'>

        <div className={`${container} container flex-space-between footer_main`}>

            <h2 style={{margin: "0rem", fontSize: "1.5rem"}}><i  className="fa-brands fa-pagelines"></i> HomeTrest</h2>

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
