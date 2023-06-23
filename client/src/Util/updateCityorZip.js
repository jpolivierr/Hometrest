
import { parseAddress2 } from "./parseAddress"

 const updateCityorZip = (value) =>{
     
    const addressPrased = parseAddress2(value)

     return addressPrased

}

export default updateCityorZip