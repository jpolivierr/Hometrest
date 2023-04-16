import { useEffect, useState } from "react"
import { NumberFormat } from "../../Util/numberFormater"
import "./style.css"

const RangeOptions = (props) =>{

    const {getValue, options, label,compState} = props

    const priceOptions = [
        10000,
        20000,
        30000,
        40000,
        50000,
        100000,
        150000,
        200000,
        250000,
        300000,
        350000,
        400000,
        450000,
        500000
       ]

       const [range, setRange] = useState({})

       const [inputValue, setInputValue] = useState("")

       const handleMinPrice = (e) =>{

            const value = e.target.value
            const minPrice = NumberFormat.convertToInt(value)

            if(isNaN(minPrice) && range.min){
                const rangeClone = {...range}
                delete rangeClone.min
                setRange(rangeClone)
                return
            }

            setRange({...range, min : minPrice })
       }

       const handleMaxPrice = (e) =>{
        
        const value = e.target.value
            const maxPrice = NumberFormat.convertToInt(value)

            if(isNaN(maxPrice) && range.max){
                const rangeClone = {...range}
                delete rangeClone.max
                setRange(rangeClone)
                return
            }

            setRange({...range, max : maxPrice })
   }

   const formatInput = () =>{
      

    if(Object.keys(range).length === 0){
        return ""
    }

    if(Object.keys(range).length === 1){
        for(let keys in range){
            return NumberFormat.abbreviateNumber(range[keys])
        }
    }

    if(Object.keys(range).length === 2){

        const minPrice = NumberFormat.abbreviateNumber(range.min)
        const maxPrice = NumberFormat.abbreviateNumber(range.max)

        
        return `${minPrice} - ${maxPrice}`
    }


      
    
   }

   useEffect(()=>{
        setInputValue(formatInput())
        formatInput()
        getValue(formatInput())
        compState(range)
   },[range])

    return (
        <div className="price-options">
            {label && <h3>{label}</h3>}
            <div>
                <select
                  onChange={(e)=>{handleMinPrice(e)}}
                >
                    <option value={"No minimum"}>No minumum</option>
                    {options.map((price, index) =>(
                        <option 
                        key={index} 
                        value={NumberFormat.abbreviateNumber(price)}
                        >
                           {NumberFormat.abbreviateNumber(price)}
                        </option>
                    ))}
                </select>
            </div>


            <div>
                <select
                    onChange={(e)=>{handleMaxPrice(e)}}
                >
                    <option value={"No minimum"}>No maximum</option>
                    {options.map((price, index) =>(
                        <option 
                        key={index} 
                        value={NumberFormat.abbreviateNumber(price)}
                        >
                           {NumberFormat.abbreviateNumber(price)}
                        </option>
                    ))}
                </select>
            </div>


        </div>
    )
}

export default RangeOptions