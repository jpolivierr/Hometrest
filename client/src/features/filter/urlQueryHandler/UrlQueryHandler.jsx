import React from 'react'
import useReduxMng from '../../../hooks/useReduxMng'
import { useEffect } from 'react'
import { updateParam, getParams } from '../../../Util/urlParcer'

export default function UrlQueryHandler() {


  const getUrlSearchQuery = (searchReducer)=>{

                   if(getParams("search")){
   
                  const searchParam = getParams("search")

                  if(Object.keys(searchParam).length === 0) return null

                  const searchReducerCopy = contructObject({...searchReducer}, searchParam)
        
                  return searchReducerCopy
        
               }

               return null

     }

     

     const newQueryObject = (searchReducer) =>{

        if(Object.keys(searchReducer).length === 0) return

        return contructObject({},searchReducer)

        // updateParam(newObject, true, "search")

       }



      const contructObject = (newObject, currentObject) => {

        for(const key in currentObject){

            const value = currentObject[key]

            if(value && typeof value !== "object") newObject[key] = value

            if(Array.isArray(value) && value.length > 0) newObject[key] = value

            if(value && Object.keys(value).length > 0){

                if(value.min > 0 && value.max > 0)  newObject[key] = value

                if(value.min > 0 && value.max === 0)  newObject[key] = {min: value.min}

                if(value.max > 0 && value.min === 0)  newObject[key] = {max: value.max}

            }

        }


        return newObject

      }



      return{
        getUrlSearchQuery,
        newQueryObject
      }

}
