import React, { useEffect, useState } from 'react'
import NavList from '../list/NavList'
export default function Sidebar({isOpen, setState}) {

    const [initialLoad, setInitialLoad] = useState(true)
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [sideBarBkAnimation, setSideBarBkAnimation] = useState("hide")
    const [sideBarWindowAnimation, setSideBarWindowAnimation] = useState("hide")
    const animationTime = 200

    useEffect(() => {

        if(!initialLoad && !isOpen){
            setSideBarBkAnimation("show fade-out")
            setSideBarWindowAnimation("show slide-in-right")
            setTimeout(() => {
                setSideBarWindowAnimation("hide")
                setSideBarBkAnimation("hide")
            }, animationTime)
        }

        if(!initialLoad && isOpen){
            setSideBarWindowAnimation("show slide-out-left")
            setSideBarBkAnimation("show fade-in")
        }

        if(initialLoad){
            setInitialLoad(false)
        }

    },[isOpen])


  return (
    <>
     { <div onClick={()=> setState(false)} 
            className={`modal-bk ${sideBarBkAnimation}`}
            ></div>}
        {
            <div className={`side-bar-window ${sideBarWindowAnimation}`}>
                <div className='side-bar'>
                <header className='border-bottom'>
                    <div className='nav-user-option'>
                        <button className='secondary-btn'>
                            <a href="/login">Log in</a>
                        </button>

                        <button className='main-btn'>
                            <a href="/signup">Sign Up</a>
                        </button>
                    </div>
                    <span onClick={() => setState(false)} className='side-bar-close-btn'>+</span>
                </header>
                    <div>
                        <NavList Class={"side-bar-list"}/>
                    </div>
                </div>
            </div>
        }
    </>
  )
}
