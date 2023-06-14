import { useState } from "react"
import useReduxMng from "../../hooks/useReduxMng"
import useSessionMng from "../../hooks/useSessionMng"
import { USER_AUTH_TOKEN } from "../../Config/authToken"

const useRequest = () =>{

    const [formResponse, setFormResponse] = useState({})
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    const makeRequest = async (method, url, data) => {

        let response
        const requestHeaders = new Headers();

        requestHeaders.set("Content-Type","application/json")

        const config = {
            credentials: 'include',
            mode: 'cors',
            headers: requestHeaders,
            method: method
        }

        try {
                    switch(method){
                    case "GET" :
                        setLoading(true)
                        response = await fetch(url,config)
                        setStatus(response.status)
                        setLoading(false)
                        break
                    case "POST" :
                        if(data){
                            config.body = JSON.stringify(data)
                            setLoading(true)
                            response = await fetch(url,config)   
                            setStatus(response.status)
                            setLoading(false)
                        }         
                        break
                    default :
                        response = await fetch(url) 
                }


                switch(status){
                     case 204 :
                        setFormResponse({})
                        break   
                    default :
                        setFormResponse(await response.json())
 
                }
        } catch (error) {

            if (error.name === 'AbortError') {
                console.log('Request aborted');
                return
              } else {
                console.error('Error:', error);
              }
            setFormResponse({status: 500, message: error.getMessage})

        }

    }

    return{
        makeRequest,
        formResponse,
        loading,
        status
    }

}

export default useRequest
