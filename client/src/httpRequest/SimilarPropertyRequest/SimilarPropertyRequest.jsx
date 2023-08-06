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
import { getParams } from '../../Util/urlParcer'


export default function SimilarPropertyRequest() {

  const { makeRequest, response, serverError, loading, status } = useRequest()
  const [similarListings, setSimilarListings] = useState({})

  let prevState = useRef(null)


  useEffect(()=>{
    
    if(!compareObjects(prevState.current, similarListings)){

      console.log("make request - similar properties")
      const paramId = getParams("prop_id")
         makeRequest("GET",URL.SIMILAR_PROPS + paramId)
        prevState.current = similarListings
    }

  },[similarListings])


   useEffect(()=>{ 


    if(serverError){
      console.log("server error")
      return
    }

    if(status === 200 && response){

      const data = deepSearch(response[0],["data","home","related_homes", "results"],[])
      console.log(data)
      setSimilarListings(data)
    }

   },[serverError, response])

  console.log(response)

  return {
            loading,
            status,
            similarListings
  }
  
}
