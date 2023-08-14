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
import HttpRequest from '../HttpRequest'


export default function SimilarPropertyRequest(propFeatures) {

  const [similarListings, setSimilarListings] = useState([])
  const similarPropertyRequest = HttpRequest(URL.SIMILAR_PROPS)

  const {response, post, loading,status} = similarPropertyRequest

  let prevState = useRef(null)

  useEffect(()=>{
    
    if(!compareObjects(prevState.current, propFeatures) && propFeatures){

      console.log("make request - similar properties")
         post(URL.SIMILAR_PROPS, propFeatures)
        prevState.current = propFeatures
    }

  },[similarListings])


   useEffect(()=>{ 

    if(status === 200 && response){

      const data = deepSearch(response[0],["data","home_search", "results"],[])
      console.log(data)
      setSimilarListings(data)
    }

   },[response])

  

  return {
            loading,
            status,
            similarListings
  }
  
}
