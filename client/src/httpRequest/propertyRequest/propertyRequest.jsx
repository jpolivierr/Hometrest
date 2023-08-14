import React, { useEffect, useRef } from 'react'
import URL from '../../constants/urls'
import compareObjects from '../../Util/compareObjects'
import removeEmptyValues from '../../Util/removeEmptyValues'
import prepareObject from './Util/prepareObject'
import hardCopy from '../../Util/hardCopy'
import { deepSearch } from '../../Util/getValueByKey'
import propertiesDemo from '../../Mock/propertyDemo'
import HttpRequest from '../HttpRequest'
import { Reducers, Actions } from '../../Redux'


export default function PropertyRequest() {

  const {setPropertyList} = Actions()
  const {searchReducer} = Reducers()

  const propertyRequest = HttpRequest(URL.SEARCH)

  const {response, post, loading,status} = propertyRequest

  let prevState = useRef({})
  
  useEffect(()=>{
    
    if(!compareObjects(prevState.current, searchReducer)){
        const searchReducerCopy = hardCopy(searchReducer)
        const newObj = removeEmptyValues(searchReducerCopy)
        const preparedObj = prepareObject(newObj, "jacksonville","fl")
        preparedObj.limit = 50
        console.log("making POST request.....")
        console.log(preparedObj)
        post(URL.SEARCH, preparedObj)
        prevState.current = searchReducer
    }

  },[searchReducer])


   useEffect(()=>{

    if(response && status === 200){
      const init = {
        count: 0,
        total: 0,
        results : [],
}
      const data = deepSearch(response[0],["data","home_search"],init)
      console.log(data)
      setPropertyList(data)
    }

   },[response])



  return {
            loading,
            status
  }
  
}
