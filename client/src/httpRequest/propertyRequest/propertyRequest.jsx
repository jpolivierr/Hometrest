import React, { useEffect, useRef, useCallback } from 'react'
import useRequest from './MakeRequest'
import URL from '../../constants/urls'
import useReduxMng from '../../hooks/useReduxMng'
import compareObjects from '../../Util/compareObjects'
import removeEmptyValues from '../../Util/removeEmptyValues'
import prepareObject from './Util/prepareObject'
import hardCopy from '../../Util/hardCopy'
import { deepSearch } from '../../Util/getValueByKey'
import propertiesDemo from '../../Mock/propertyDemo'


export default function PropertyRequest() {

  const { makeRequest, response, serverError, loading, status } = useRequest()
  const {searchReducer, setPropertyList, propertiesReducer} = useReduxMng()

  let prevState = useRef({})

  


  useEffect(()=>{
    
    if(!compareObjects(prevState.current, searchReducer)){
        console.log("making request")
        const searchReducerCopy = hardCopy(searchReducer)
        const newObj = removeEmptyValues(searchReducerCopy)
        const preparedObj = prepareObject(newObj, "miami")
        preparedObj.limit = 50
        preparedObj.state_code = "fl"
        console.log(preparedObj)
        //  makeRequest("POST",URL.SEARCH, preparedObj)
        prevState.current = searchReducer
    }

  },[searchReducer])


   useEffect(()=>{ 

    console.log(response)
  // delete when you done
  const mockObj = {
      count: 50,
      totoal : 3902,
      results : propertiesDemo
  }
  // console.log(propertiesDemo)
      setPropertyList(mockObj)

    if(serverError){
      console.log("server error")
      return
    }

    if(response){
      const data = deepSearch(response[0],["data","home_search"],{})
      setPropertyList(data)
    }

   },[serverError, response])



  return {
            loading,
            status
  }
  
}
