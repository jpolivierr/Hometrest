import "./style.css"
import { useEffect, useState, useRef } from "react"
import useRequest from "../../lib/MakeRequest/MakeRequest"
import useReduxMng from "../../hooks/useReduxMng"
import findPropertyValue from "../../Util/nestedObject"
import TopSearchFilter from "../../components/Forms/TopSearchFilter"
import ShowProperties from "../../components/showProperties/ShowProperties"
import Map from "../../components/map/Map"
import propertiesDemo from "../../propertyDemo"
import { getParams, updateParam } from "../../Util/urlParcer"
import { deepSearch } from "../../Util/getValueByKey"
import URL from "../../Config/urls"
import PropertyFilter from "../../components/filter/propertyFilter/propertyFilter.view"

const Listings = (props) =>{

    const {Class, id} = props

    const {makeRequest, reponse, loading, status } = useRequest()

    const prevData = useRef({});
    const{
      setPropertyList,
      propertiesReducer,
      setSearch,
      searchReducer,
      setAddress
    } = useReduxMng()  

    const [loadingProps, setLoadingProps] = useState(false)

    useEffect( ()=>{

            if(getParams("search")){
   
                  const filterOptions = getParams("search")
        
                  setSearch(filterOptions)
        
          }
  
      },[])

      
      useEffect(()=>{

        if(Object.keys(searchReducer).length > 0){
          
          updateParam(searchReducer, true, "search")

        }

      },[searchReducer])

      

       useEffect(()=>{

        const prevDataJSON = JSON.stringify(prevData.current)

        const currentDataJSON = JSON.stringify(searchReducer);
      
      //  console.log(prevDataJSON, currentDataJSON)
        if ((prevDataJSON !== currentDataJSON)) {
   
            const searchReducerCloneJSON = JSON.stringify(searchReducer)
            const searchReducerClone = JSON.parse(searchReducerCloneJSON)

           if(!searchReducerClone.limit) searchReducerClone.limit = 50  

          //  console.log("===================================")
          //  console.log("FETCHING...")
           prevData.current = searchReducer
            // console.log(searchReducerClone)
            setLoadingProps(true)
            makeRequest("POST", URL.SEARCH, searchReducerClone)

          }

      },[searchReducer])

        useEffect(()=>{

            
          
            const searchReducerCloneJSON = JSON.stringify(searchReducer)
            const searchReducerClone = JSON.parse(searchReducerCloneJSON)

           if(!searchReducerClone.limit) searchReducerClone.limit = 50  

           if(!searchReducerClone.city && !searchReducerClone.postal_code){

             prevData.current = searchReducer
          //  console.log("===================================")
          //  console.log("INITIAL LOAD")

            searchReducerClone.city = "jacksonville"
            searchReducerClone.state_code = "FL"
            setAddress({city: "jacksonville", state_code: "FL"})
            setLoadingProps(true)
           }

          

      },[])

    useEffect(()=>{

      // console.log(reponse)

      if(reponse && status === 200){

         const homeSearch =  deepSearch(reponse,["body","data","home_search","results"],[])

          setPropertyList(homeSearch)

           if(Object.keys(reponse).length > 0){
        setLoadingProps(false)
      }
        
      }

     

      

    },[reponse])
   

    return(
        <div id={id} className={Class}>
          <div className="search-result wide-container">
    
            <PropertyFilter />
            <TopSearchFilter/>

           {!propertiesReducer || propertiesReducer.length === 0 ? <div style={{background: "#eef6f9",height: "87vh"}}></div> :
               <Map 
              properties={propertiesReducer}
            />
           }
            <ShowProperties 
              isLoading = {loadingProps}
            />

          </div>
          
        </div>
        
    )
}

export default Listings