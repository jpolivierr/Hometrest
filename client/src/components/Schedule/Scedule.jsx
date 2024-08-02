import {useState } from "react"
import Carousel from "../../lib/Carousel/Carousel.component"
import Modal from "../modal/Modal"
import ScheduleTourForm from "../Form/schedueTour/ScheduleTourForm"

const ScheduleTour = () =>{

    const [activeDate, setActiveDate] = useState(0)
    const [tourType, setTourType] = useState(0)
    const [userMessage, setUserMessage] = useState("")
    const [scheduleTourModal, setScheduleTourModal] = useState(false)

    const carouselSettings = {
      aspectRatio : 5 / 4,
      split: 2,
      style: "split_2"
    }

 const getNextTwoWeeks =()=> {
        
      const today = new Date();
      const nextTwoWeeks = [];
    
      // Iterate over the next 14 days
      for (let i = 0; i < 14; i++) {
        const currentDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
        const day = currentDate.toLocaleString('en-US', { weekday: 'short' });
        const date = currentDate.getDate();
        const month = currentDate.toLocaleString('en-US', { month: 'long' });
    
        nextTwoWeeks.push({ day, date, month });
      }
    
      return nextTwoWeeks;
    }
  
   const time = [
      "11:00 AM",
      "12:00 PM",
      "01:00 PM",
      "02:00 PM"
  ]

    return(
      <>
      <Modal isOpen={scheduleTourModal} setModalState={setScheduleTourModal}>
        <ScheduleTourForm />
      </Modal>
          <div className="schedule">
          <h2 className="schedule_title">
                Select a Tour Date <span>No obligation. Cancel at any time.</span>
              </h2>
            <Carousel 
              settings={carouselSettings}
            >
                {getNextTwoWeeks().map((day, index)=>(
                    <div 
                        className={`schedule-time ${activeDate === index && "active-time"}`} 
                        key={index}
                        onClick={()=> setActiveDate(index)}
                        >
                        <h3>{day.day}</h3>
                        <h2>{day.date}</h2>
                        <h3>{day.month}</h3>
                    </div>
                ))}
            </Carousel>
            <select className="select_time">
                {
                    time.map((hours,index) => (<option key={index}>{hours}</option>))
                }
            </select>

            <ul className="tour_type">

              <li onClick={()=> setTourType(0)} className={tourType === 0 ? "active-time" : ""}><i className="fa-solid fa-handshake"></i>In-person</li>
              <li onClick={()=> setTourType(1)} className={tourType === 1 ? "active-time" : ""}><i className="fa-solid fa-video"></i> Video call</li>

            </ul>
            <button 
            onClick={()=> setScheduleTourModal(true)}
            style={{width: "100%", height: "50px"}} className="button main-btn">
                      Schedule a Tour
            </button>

                        

                <form className="no-padding ask_question_form" onSubmit={(e)=> e.preventDefault()}>
                    <h3 style={{marginTop: "1rem"}}>Have a Question?</h3>

                    <fieldset>
                        <textarea 
                            placeholder="I'd like to learn more"
                            value={userMessage} 
                            onChange={(e) => setUserMessage(e.target.value)}
                            >
                        </textarea>
                    </fieldset>
                    <button onClick={()=> {}} style={{background: "#92a6bf17",width: "100%", marginTop: "0rem", height: "50px"}} className="button alt-btn">
                                    Ask me a question 
                </button>
            </form>
                          
            
          </div>
      </>
   
       
    )

}

export default ScheduleTour