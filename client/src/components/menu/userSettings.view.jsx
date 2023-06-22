
import React from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../userState/UserState'
import { useContext } from 'react'
import useRequest from '../../lib/MakeRequest/MakeRequest'


 const UserSettings = () => {

    // const {activeUser, logout} = useContext(UserContext)
    // const {firstName, lastName, email} = activeUser
    const firstName = "Frederic"
    const lastName = "Olivier"
    const email = "jp@gmail.com"
    const {makeRequest, response, loading, serverError} = useRequest()

    useEffect(()=>{

        console.log(response)

        // if(status == 204){

        //     logout()
        //      window.location.href="/"

            
        // }
        
    },[response])

    const loginOut = () =>{
        makeRequest("GET",URL.LOGOUT)
  }

  return (
    <div className="user-settings">
                       <div className="setting-header">
                            <div className="user-icon"><i className="fa-regular fa-user"></i></div>
                            <div className="user-full-name">{`${firstName} ${lastName}`}</div>
                            <div className="user-email"><h5>{`${shortenText(email,20) }`}</h5></div>
                       </div>
                            <ul className="update-user-list">

                            <Link  to="/update" target="">
                                <li className="user-edit-account" onClick={toggle}><p>Edit Account</p></li>
                            </Link> 
                                
                            </ul>
                        <div className="user-log-out">
                                <button className="button main-btn" onClick={loginOut}>Log out</button>
                        </div>
                    </div>
  )

}

export default UserSettings