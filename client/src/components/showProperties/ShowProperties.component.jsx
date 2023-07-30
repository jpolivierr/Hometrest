
import ShowPropertiesView from "./ShowProperties.view"
import { Reducers } from "../../Redux"

const ShowProperties = () =>{


    const {propertiesReducer,searchReducer} = Reducers() 

    const isLoading = ""

    const properties = propertiesReducer.results
    const total = propertiesReducer.total
    const count = propertiesReducer.count

    const generatePageNumber = () =>{

        const pageNumber = Math.floor(total / count)

        const iterationArray = Array.from({ length: pageNumber });

        return (iterationArray.map((item, index) => (
          
                <li key={index+ 1}>{index + 1}</li>
            )
        ))


    }
    

    const getSearchValue = () =>{

        if(isLoading) return

        const city = searchReducer.city || ""
        const postal_code = searchReducer.postal_code || ""
        const state_code = searchReducer.state_code || ""
        const state = searchReducer.state || ""

        let myState

        if(state_code && state){
            myState = state_code
        }else{
            myState = state_code ? state_code : state
        }

        const str = `${city} ${myState} ${postal_code}`

        return  (<h2>{`Showing 50 out of ${total} result for "${str.trim()}"`}</h2>)
    
    }

    const value = {
        getSearchValue, 
        properties, 
        isLoading,
        total,
        generatePageNumber
        
    }



    return(
        <ShowPropertiesView value={value} />
    )

}

export default ShowProperties