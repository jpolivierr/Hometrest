
class Calendar {

    constructor(){
        this.Year = new Date().getFullYear().toString()
        this.Month = new Date().getMonth()
        this.Date = new Date().getDate()

    }

    clean(date, format){

        if(format){
            const cleanDate = this.clean(date).split("-")
            const dateFormated = new Date(parseInt(cleanDate[0]), parseInt(cleanDate[1]) - 1, parseInt(cleanDate[2])).toString().split(" ")
            return {
                year: dateFormated[3],
                month: dateFormated[1],
                day : dateFormated[0],
                date : dateFormated[2],
                intYear : parseInt(cleanDate[0]),
                intMonth : parseInt(cleanDate[1]) - 1,
                intDate : parseInt(cleanDate[2])
            }
        }else{
            const cleanDate = date.split(" ")[0]
            return cleanDate
        }
        
    }

    format(value, format){ 

        const dateFormated = this.clean(value, true)
        const year = dateFormated.year === this.Year ? "" : `, ${dateFormated.year}`

        switch(format){
            case "M/D" :
              return ``
            default :
              return `${dateFormated.month} ${dateFormated.date}${year}`

        }

    }

    dateCountDown(value){
        const dateFormated = this.clean(value, true)
        
        if(this.Month === dateFormated.intMonth){
            const daysLeft = this.Date - dateFormated.intDate
            switch(true){
                case this.Date > dateFormated.intDate :
                    return `, ${daysLeft} days past due`
                case this.Date < dateFormated.intDate && (daysLeft <= 14):
                    return ` in ${- daysLeft} ${this.day(- daysLeft)}`
                case this.Date === dateFormated.intDate:
                    return `, today`
                default :
                    return ""
            }              
        }
    }

    day(day){
        switch(true){
            case day > 1 :
                return "days"
            case day === 1 :
                return "day"
        }
    }
}

export const MyCalendar = new Calendar()