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
import HttpRequest from '../HttpRequest'


export default function PropertyRequest() {

  const {searchReducer, setPropertyList, propertiesReducer} = useReduxMng()

  const url = "https://jsonplaceholder.typicode.com/posts"

  const propertyRequest = HttpRequest(URL.SEARCH)

  const {response, post, loading,status} = propertyRequest

  let prevState = useRef({})
  
  useEffect(()=>{
    
    if(!compareObjects(prevState.current, searchReducer)){
        const searchReducerCopy = hardCopy(searchReducer)
        const newObj = removeEmptyValues(searchReducerCopy)
        const preparedObj = prepareObject(newObj, "miami")
        preparedObj.limit = 50
        preparedObj.state_code = "fl"
        post(URL.SEARCH, preparedObj)
        prevState.current = searchReducer
    }

  },[searchReducer])


   useEffect(()=>{

  // delete when you done
  // const mockObj = {
  //     count: 50,
  //     totoal : 3902,
  //     results : propertiesDemo
  // }

  //   setPropertyList(mockObj)

    // if(response){
    //   const data = deepSearch(response[0],["data","home_search"],{})
    //   setPropertyList(data)
    // }
    if(response && status === 200){
      const data = deepSearch(response[0],["data","home_search"],{})
      console.log(data)
      setPropertyList(data)
    }

   },[response])



  return {
            loading,
            status
  }
  
}
