import React from 'react'
import ScheduleTour from '../Schedule/Scedule'
import jonathan from "../../../../assets/images/JONATHAN.jpg"
import "./AgenInfo.style.css"

export default function AgentInfo() {
  return (
    <div className="agent_info">
                        <div className="personal_info">
                        <figure className="agent-head-shot">
                            <img src={jonathan} alt="Example" />
                        </figure>
                        <h4>Jonathan Pluviose</h4>
                        <h5>Keller William Realty</h5>
                        <ul className="contact-info">
                                <li><i className="fa-solid fa-phone"></i><p>Call</p></li>
                                <li><i className="fa-solid fa-envelope"></i><p>Message</p></li>
                        </ul>
                        </div>
                        
                        <div className="agent">

                            <form className="no-padding" onSubmit={(e)=> e.preventDefault()}>
                                {/* <h3 style={{marginBottom: "1rem"}}>Ask me a Question</h3> */}
                       
                                <fieldset>
                                    <textarea placeholder="I'd like to learn more">
                                       
                                    </textarea>
                                </fieldset>
                                <button style={{background: "#92a6bf17",width: "100%", marginBottom: "1rem", height: "50px"}} className="button secondary-btn">
                                                Ask me a question 
                        </button>
                            </form>
                                
                        </div>
            
                        <ScheduleTour />

                    </div>
  )
}
