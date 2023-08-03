import { useEffect, useState} from "react"
import { NumberFormat } from "../../Util/numberFormater"
import "./style.css"

const RangeOptions = (props) =>{


    const {getValue,
        options,
        label,
        compState,
        defaultValue,
         name} = props

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

       useEffect(()=>{

        if(defaultValue && Object.keys(defaultValue).length > 0){
             setRange(defaultValue)
        }

       },[])

       console.log(range)

       useEffect(()=>{

        setInputValue(formatInput())

         getValue(formatInput())

        compState(range)

       },[range])


       const handleMinPrice = (e) =>{

            const value = e.target.value

            const minPrice = NumberFormat.convertToInt(value)

            if(isNaN(minPrice)){

        

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

            if(isNaN(maxPrice)){
                const rangeClone = {...range}
                delete rangeClone.max
                setRange(rangeClone)
                return
            }

            setRange({...range, max : maxPrice })
   }

   const formatInput = () =>{

    let symbole
    let bkLabel
    console.log(name)
    switch(name){
        case "price" :
            symbole = "$"
            bkLabel = ""
            break
        case "beds" :
            symbole = ""
            bkLabel = "Bed"
            break
        case "baths" :
            symbole = ""
            bkLabel = "Bath"
            break
    }
      

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

        return `${symbole}${minPrice} - ${symbole}${maxPrice} ${bkLabel}`
    }

   }

   let symbole = name === "price" && "$" 
    return (
        <div className="price-options">
            {label && <h3>{label}</h3>}
            <div>
                <select
                  onChange={(e)=>{handleMinPrice(e)}}
                >
                    {defaultValue && defaultValue.min && 
                    <option value={symbole + NumberFormat.abbreviateNumber(defaultValue.min)}>
                        {symbole + NumberFormat.abbreviateNumber(defaultValue.min)}
                        </option>
                        }
                    <option value={"No minimum"}>No minimum</option>
                    {options.map((price, index) =>(
                        <option 
                        key={index} 
                        value={symbole + NumberFormat.abbreviateNumber(price)}
                        >
                           {symbole + NumberFormat.abbreviateNumber(price)}
                        </option>
                    ))}
                </select>
            </div>


            <div>
                <select
                    onChange={(e)=>{handleMaxPrice(e)}}
                >
                     {defaultValue && defaultValue.max && 
                    <option value={symbole + NumberFormat.abbreviateNumber(defaultValue.max)}>
                        {symbole + NumberFormat.abbreviateNumber(defaultValue.max)}
                        </option>
                        }
                    <option value={"No maximum"}>No maximum</option>
                    {options.map((price, index) =>(
                        <option 
                        key={index} 
                        value={symbole + NumberFormat.abbreviateNumber(price)}
                        >
                           {symbole + NumberFormat.abbreviateNumber(price)}
                        </option>
                    ))}
                </select>
            </div>


        </div>
    )
}

export default RangeOptions