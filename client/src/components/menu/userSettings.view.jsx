
// import React from 'react'
// import { Link } from 'react-router-dom'

// import UserContext from '../../context/user/UserContext'
// import { useContext } from 'react'
// import shortenText from '../../Util/shortenText'
// import ModalContext from '../../context/modals/modalContext'
// import "./userSettings.style.css"


//  const UserSettings = () => {

//     const {activeUser, logout} = useContext(UserContext)
//     const {firstName, lastName, email} = activeUser
     
//     const {toggleSideModal} = useContext(ModalContext)

//   return (
//     <div className="user-settings">

//                        <div className="setting-header">
//                             <div className="user-icon"><i className="fa-regular fa-user"></i></div>
//                             <div className="user-full-name">{`${firstName} ${lastName}`}</div>
//                             <div className="user-email"><h5>{`${shortenText(email,20)}`}</h5></div>
//                        </div>
//                             <ul className="update-user-list">

//                             <Link  to="/" target="">
//                                 <li className="user-edit-account" onClick={toggleSideModal}><p>Edit Account</p></li>
//                             </Link> 
                                
//                             </ul>
//                         <div className="user-log-out">
//                                 <button className="button main-btn" onClick={logout}>Log out</button>
//                         </div>
//                     </div>
//   )

// }

// export default UserSettings