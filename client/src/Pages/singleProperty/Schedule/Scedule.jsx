import { useEffect, useState } from "react"
import Slider from "../../../lib/Slider/Slider"

const ScheduleTour = () =>{

    function getNextTwoWeeks() {
        
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

    const week = [
                    {
                        day : "Mon",
                        date : 12,
                        month : "May"
                    },
                    {
                        day : "Tues",
                        date : 13,
                        month : "May"
                    },
                    {
                        day : "Wed",
                        date : 14,
                        month : "May"
                    },
                    {
                        day : "Thur",
                        date : 15,
                        month : "May"
                    },
                    {
                        day : "Fri",
                        date : 16,
                        month : "May"
                    },
                    

    ]

    const [thisWeek, setThisWeek] = useState([])

    return(
        <Slider 
          elementClass="schedule-tour"
          gap={10}
          size={1}
        >
            {getNextTwoWeeks().map((day, index)=>(
                <div className={`schedule-time ${index === 0 && "active-time"}`} key={index}>
                    <h3>{day.day}</h3>
                    <h2>{day.date}</h2>
                    <h3>{day.month}</h3>
                </div>
            ))}
        </Slider>
    )

}

export default ScheduleTour