import React, { useEffect, useRef, useCallback } from 'react'
import useRequest from './MakeRequest'
import URL from '../../constants/urls'
import useReduxMng from '../../hooks/useReduxMng'
import compareObjects from '../../Util/compareObjects'
import removeEmptyValues from '../../Util/removeEmptyValues'
import prepareObject from './Util/prepareObject'
import hardCopy from '../../Util/hardCopy'


export default function PropertyRequest() {

  const { makeRequest, response, serverError, loading, status } = useRequest()
  const {searchReducer, setPropertyList, propertiesReducer} = useReduxMng()

  let prevState = useRef({})


  useEffect(()=>{
    
    if(!compareObjects(prevState.current, searchReducer)){
        console.log("making request")
        const searchReducerCopy = hardCopy(searchReducer)
        const newObj = removeEmptyValues(searchReducerCopy)
        const preparedObj = prepareObject(newObj)
        console.log(preparedObj)
        prevState.current = searchReducer
    }

  },[searchReducer])


   useEffect(()=>{ 

    if(serverError){
      console.log("server error")
      return
    }


   },[serverError, response])


  return {
            loading,
            status
  }
  
}
