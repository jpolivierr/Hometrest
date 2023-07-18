import React from 'react'
import "./footer.style.css"
import NavList from '../components/list/NavList'

export default function Footer() {
  return (
    <footer className='footer'>

        <div class="container flex-space-between footer_main">

            <h2><i class="fa-brands fa-pagelines"></i> HomeTrest</h2>

            <ul class="contact-info-footer"><li><i class="fa-solid fa-phone"></i><p>Call: (849) 9840 9449</p></li><li><i class="fa-solid fa-envelope"></i><p>Email: jprealty@kellerwilliams.com</p></li></ul>
        
            <NavList 
                Class="flex-space-between gap-1x nav-list nav-list-alt"
            />

        </div>

        <div class="container flex-space-between copy_writes">
               <p>2023 Copy write. Developped by www.Appvenir.com</p> 
        </div>

    </footer>
  )
}
