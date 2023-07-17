import React, { useEffect, useRef, useState, useCallback } from 'react'
import useRequest from '../MakeRequest/MakeRequest'
import URL from '../../constants/urls'
import useReduxMng from '../../hooks/useReduxMng'
import compareObjects from '../../Util/compareObjects'
import removeEmptyValues from '../../Util/removeEmptyValues'
import prepareObject from '../../Util/prepareObject'
import hardCopy from '../../Util/hardCopy'
import { deepSearch } from '../../Util/getValueByKey'
import propertiesDemo from '../../Mock/propertyDemo'


export default function SimilarPropertyRequest() {

  const { makeRequest, response, serverError, loading, status } = useRequest()
  const [similarListings, setSimilarListings] = useState({})

  let prevState = useRef({})


  useEffect(()=>{
    
    if(!compareObjects(prevState.current, similarListings)){
        console.log("making request")
        const similarListingsCopy = hardCopy(similarListings)
        const newObj = removeEmptyValues(similarListingsCopy)
        const preparedObj = prepareObject(newObj, "miami")
        preparedObj.limit = 50
        preparedObj.state_code = "fl"
        console.log(preparedObj)
        // makeRequest("POST",URL.SEARCH, preparedObj)
        prevState.current = similarListings
    }

    // console.log(similarListings)

  },[similarListings])


   useEffect(()=>{ 

  // delete when you done
  const mockObj = {
      count: 50,
      totoal : 3902,
      results : propertiesDemo
  }
   console.log(mockObj)
      setSimilarListings(mockObj.results)

    if(serverError){
      console.log("server error")
      return
    }

    if(response){
      const data = deepSearch(response[0],["data","home_search"],{})
    
      setSimilarListings(data)
    }

   },[serverError, response])



  return {
            loading,
            status,
            similarListings
  }
  
}
