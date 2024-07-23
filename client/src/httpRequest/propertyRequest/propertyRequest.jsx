import { useEffect, useRef, useState } from 'react'
import URL from '../../constants/urls'
import compareObjects from '../../Util/compareObjects'
import removeEmptyValues from '../../Util/removeEmptyValues'
import prepareObject from './Util/prepareObject'
import hardCopy from '../../Util/hardCopy'
import { deepSearch } from '../../Util/getValueByKey'
import HttpRequest from '../HttpRequest'
import { Reducers, Actions } from '../../Redux'


export default function PropertyRequest() {

  const {setPropertyList, setSearch} = Actions()

  const {searchReducer} = Reducers()

  const httpRequest = HttpRequest(URL.SEARCH)

  const {response, post, loading, status} = httpRequest

  let prevState = useRef({})
  
  useState(()=>{

  },[searchReducer])
  
  useEffect(()=>{

    // if(!searchReducer.city && !searchReducer.state_code) return
    if(!compareObjects(prevState.current, searchReducer)){
        const searchReducerCopy = hardCopy(searchReducer)
        const preparedObj = prepareObject(searchReducerCopy, "jacksonville","fl")
        preparedObj.limit = 50
        setSearch(preparedObj)
        post(URL.SEARCH, removeEmptyValues(preparedObj))
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
      console.log(response)
      const data = deepSearch(response,["data","home_search"],init)
      console.log(data)
      setPropertyList(data)
    }

   },[response])



  return {
            loading,
            status
  }
  
}
