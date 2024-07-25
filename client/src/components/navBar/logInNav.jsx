// import { useEffect, useState } from "react"
// import NavList from "../list/NavList"
// import UserContext, { useUserContext } from "../../context/user/UserContext"
// import ModalContext from "../../context/modals/modalContext"
// import { useContext } from "react"

// const LogInNav = () =>{

//     // const {isShowing, toggle, motion } = useModal(); 
//    const {activeUser, userLikesCount} = useContext(UserContext)
//    const {toggleSideModal} = useContext(ModalContext)

//     return(

//            <>
//                     <section className="top-nav log-in-nav">

//                                 <div className="container flex-space-between">
//                                             <div>
//                                             <h2 style={{margin: "0rem",fontSize: "1.5rem"}}><i className="fa-brands fa-pagelines"></i> HomeTrest</h2>
//                                             </div>
                                        
//                                         <NavList 
//                                         Class="hideMobile flex-space-between gap-2x nav-list"
//                                         />

//                                         <div className="hideMobile flex-space-between gap-3x user-nav-info">
                                            
//                                             <h3 className="user-greeting">
//                                                 Hi, {activeUser.firstName}
//                                             </h3>

//                                             <button className="user-nav-likes">
//                                                   <i className="fa-regular fa-heart"></i>
//                                                   <p>Likes</p>
//                                                   <span className="like_count">{userLikesCount()}</span>
//                                             </button>

//                                             <button className="user-nav-bell">
//                                                  <i className="fa-regular fa-bell"></i>
//                                                   {/* <span className="like_count">{userLikesCount()}</span> */}
//                                             </button>

                                            

                                           
//                                             <button onClick={toggleSideModal} className="user-nav-account">
//                                                 <i className="fa-regular fa-user"></i>
//                                             </button>
                                         
//                                         </div>

//                                         <div className="hideDesktop">
//                                             <menu onClick={()=>{}}>
//                                                 <div></div>
//                                                 <div></div>
//                                                 <div></div>
//                                             </menu>
//                                         </div>
//                                 </div>

//                         </section>
          
//            </>
                
                   
     
//     )
// }

// export default LogInNav