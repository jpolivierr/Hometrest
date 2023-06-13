import { useState } from "react"
import useReduxMng from "../../hooks/useReduxMng"
import useSessionMng from "../../hooks/useSessionMng"
import { AUTH_TOKENS } from "../../Config/authToken"

const useRequest = () =>{

    const [formResponse, setFormResponse] = useState({})
    const [status, setStatus] = useState(null)
    const {activeUserReducer} = useReduxMng()
    const [loading, setLoading] = useState(false)
    const {getTokens} = useSessionMng(AUTH_TOKENS)

    const makeRequest = async (method, url, data, callBackFunk) => {

        let response
        let status
        let headers

        const requestHeaders = new Headers();

        // requestHeaders.set('AuthorizationToken', getTokens("authorizationtoken"));
        requestHeaders.set("Content-Type","application/json")
        // requestHeaders.set('Authorization', 'Basic ' + btoa("jp@gmail.com" + ':' + "1"))

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
                        // console.log(response.text())
                        status = response.status
                        setLoading(false)
                        break
                    case "POST" :
                        if(data){
                            config.body = JSON.stringify(data)
                            setLoading(true)
                            response = await fetch(url,config)   
                            status = response.status
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
