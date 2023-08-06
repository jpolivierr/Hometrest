import React, { useState, useEffect, useRef, useCallback } from 'react'
import useRequest from '../MakeRequest/MakeRequest'
import URL from '../../constants/urls'
import useReduxMng from '../../hooks/useReduxMng'
import { deepSearch } from '../../Util/getValueByKey'
import { useNavigate, useLocation } from "react-router-dom"
import propertiesDemo from '../../Mock/propertyDemo'
import { singleDemo } from '../../Mock/singleDemo'
import { getParams } from '../../Util/urlParcer'


export default function SinglePropertyRequest() {

  const { makeRequest, response, serverError, loading, status } = useRequest()
  const [singleProperty, setSingleProperty] = useState({})
  const navigate = useNavigate()
  const { pathname, search } = useLocation();
  

  useEffect(()=>{

    const paramId = getParams("prop_id")

    if(paramId){

        makeRequest("GET",URL.SINGLE_PROPERTY + paramId)

    }

},[pathname, search])



useEffect(()=>{

    // console.log(response)

    // const property = deepSearch(singleDemo,["data","home"],{})

    // setSingleProperty(property)

    if(serverError){
        console.log("server error")
        return
      }
         
    if(response){

        const property = deepSearch(response[0],["data","home"],{})

        setSingleProperty(property)

    }

},[response])

  return {
            loading,
            status, 
            singleProperty
  }
  
}
