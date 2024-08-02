import React from 'react'
import jonathan from "../../assets/images/JONATHAN.jpg"
import { useState } from 'react'

export default function AgentInfo() {

    const [userMessage, setUserMessage] = useState("")

  return (
    <div className="agent_info bottom_divider">
        <h2>Hi there, have a question?</h2>
         {/* <ScheduleTour /> */}
                        <div className="personal_info">
                            <figure className="agent-head-shot">
                                <img src={jonathan} alt="Example" />
                            </figure>
                            <h4>Jonathan Pluviose</h4>
                            <h5>Keller William Realty</h5>
                            <ul className="contact-info">
                                    <li><i className="fa-solid fa-phone"></i><p>Call: (849) 9840 9449</p></li>
                                    <li><i className="fa-solid fa-envelope"></i><p>Email: jprealty@kellerwilliams.com</p></li>
                            </ul>
                        </div>
                        
                        <div className="agent">
                            <form className="no-padding" onSubmit={(e)=> e.preventDefault()}>
                                {/* <h3 style={{marginBottom: "1rem"}}>Ask me a Question</h3> */}
                       
                                <fieldset>
                                    <textarea 
                                      placeholder="I'd like to learn more"
                                      value={userMessage} 
                                      onChange={(e) => setUserMessage(e.target.value)}
                                    >
                                    </textarea>
                                </fieldset>
                                <div onClick={() => {}} className='btn-container'>
                                    <button  className="button main-btn">
                                                Send Message
                                  </button>
                                </div>
   
                            </form>
                                
                        </div>

                    </div>
  )
}
