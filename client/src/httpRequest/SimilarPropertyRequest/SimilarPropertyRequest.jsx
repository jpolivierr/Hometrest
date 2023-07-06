import React, { useState, useEffect, useRef, useCallback } from 'react'
import useRequest from '../MakeRequest/MakeRequest'
import URL from '../../constants/urls'
import useReduxMng from '../../hooks/useReduxMng'
import { deepSearch } from '../../Util/getValueByKey'
import { useNavigate, useLocation } from "react-router-dom"
import propertiesDemo from '../../Mock/propertyDemo'
import { singleDemo } from '../../Mock/singleDemo'
import { getParams } from '../../Util/urlParcer'


export default function SimilarProperties() {

  const { makeRequest, response, serverError, loading, status } = useRequest()
  const [singleProperty, setSingleProperty] = useState({
    count : 0,
    photo_count: 0,
    photos : []
  })
  const navigate = useNavigate()
  const { pathname, search } = useLocation();
  

  useEffect(()=>{

    const paramId = getParams("prop_id")

    if(paramId){

        console.log("make request")
        // makeRequest("GET",URL.SINGLE_PROPERTY + "?prop_id=" + paramId)

    }

},[pathname, search])



useEffect(()=>{

    console.log(response)

        const property = deepSearch(singleDemo,["data","home"],{})

        setSingleProperty(property)


    // if(serverError){
    //     console.log("server error")
    //     return
    //   }
         
    // if(response){

    //     const property = deepSearch(response.body,["data","home"],{})

    //     setSingleProperty(property)

    // }

},[response])

  return {
            loading,
            status, 
            singleProperty
  }
  
}
