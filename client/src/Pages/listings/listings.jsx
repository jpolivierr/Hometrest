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

const Listings = (props) =>{

    const {Class, id} = props

    const {makeRequest, formResponse, loading } = useRequest()

    const{
      setPropertyList,
      propertiesReducer,
      setSearch,
      searchReducer
    } = useReduxMng()  

    const [loadingProps, setLoadingProps] = useState(true)

    useEffect( ()=>{

            if(getParams("search")){
  
                  const filterOptions = getParams("search")
                  console.log("--> Get Param")
                  console.log(filterOptions)
        
                  setSearch(filterOptions)
        
          }
  
      },[])

      
      useEffect(()=>{
      
      
        if(Object.keys(searchReducer) > 0){

         console.log("--> Update Param")

          updateParam(searchReducer, true, "search")

        }
        


      },[searchReducer])

      const prevData = useRef({});

       useEffect(()=>{

        const prevDataJSON = JSON.stringify(prevData.current)

        const currentDataJSON = JSON.stringify(searchReducer);
      

        if ((prevDataJSON !== currentDataJSON)) {

          console.log("=============END============")

             console.log(prevDataJSON, currentDataJSON)

            setLoadingProps(true)
          
            const searchReducerCloneJSON = JSON.stringify(searchReducer)
            const searchReducerClone = JSON.parse(searchReducerCloneJSON)

           if(!searchReducerClone.limit) searchReducerClone.limit = 50  

           prevData.current = searchReducer

           console.log(searchReducerClone)
           makeRequest("POST", URL.SEARCH, searchReducerClone)
              // setTimeout(()=>{

              //   // setPropertyList(propertiesDemo)

              //   setLoadingProps(false)

              // },2000)

          }

      },[searchReducer])




        useEffect(()=>{

          console.log("Initial load request...", searchReducer)

          console.log("=============END============")

            setLoadingProps(true)
          
            const searchReducerCloneJSON = JSON.stringify(searchReducer)
            const searchReducerClone = JSON.parse(searchReducerCloneJSON)

           if(!searchReducerClone.limit) searchReducerClone.limit = 50  

           prevData.current = searchReducer

          

      },[])

  


    useEffect(()=>{

     

      if(formResponse && formResponse.status === 200){
           console.log(formResponse)
         const homeSearch =  deepSearch(formResponse,["body","data","home_search","results"],[])

         console.log(homeSearch)

          setPropertyList(homeSearch)


      }

      setLoadingProps(false)

    },[formResponse])



   

    return(
        <div id={id} className={Class}>
          <div className="search-result wide-container">
    
            <TopSearchFilter/>
            <Map 
              properties={propertiesReducer}
            />
            <ShowProperties 
              isLoading = {loadingProps}
            />

          </div>
          
        </div>
        
    )
}

export default Listings