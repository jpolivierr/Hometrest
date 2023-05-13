import { useState } from "react"
import Slider from "../../lib/Slider/Slider"

const ScheduleTour = () =>{

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
            {week.map((day, index)=>(
                <div class="schedule-time" key={index}>
                    <h3>{day.day}</h3>
                    <h2>{day.date}</h2>
                    <h3>{day.month}</h3>
                </div>
            ))}
        </Slider>
    )

}

export default ScheduleTour