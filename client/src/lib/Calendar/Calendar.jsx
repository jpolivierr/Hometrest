import {useState} from 'react'
import Calendar from 'react-calendar'

const Calendar = () =>{

    const [value, onChange] = useState(new Date())

    return(
        <div>
            <Calendar
               onChange={onChange}
               value={value}
            />
        </div>
    )

}

export default Calendar