import { useState } from "react"
import useReduxMng from "../../hooks/useReduxMng"
import useSessionMng from "../../hooks/useSessionMng"
import { AUTH_TOKENS } from "../../Config/authToken"

const useRequest = () =>{

    const [formResponse, setFormResponse] = useState({})
    const {activeUserReducer} = useReduxMng()
    const [loading, setLoading] = useState(false)
    const {getTokens} = useSessionMng(AUTH_TOKENS)


    const redirection = (response) =>{

        console.log(response)
        if(response.redirected){

            window.location.href = response.url

        }

    }

    const makeRequest = async (method, url, data, callBackFunk) => {

        let response
        let status
        let headers

        const requestHeaders = new Headers();

        // requestHeaders.set('AuthorizationToken', getTokens("authorizationtoken"));
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
                        // console.log(response.text())
                        redirection(response.redirected)
                        status = response.status
                        headers = response.headers
                        setLoading(false)
                        break
                    case "POST" :
                        if(data){
                            config.body = JSON.stringify(data)
                            setLoading(true)
                            response = await fetch(url,config)
                            console.log(response)
                            redirection(response)       
                            status = response.status
                            headers = response.headers
                            setLoading(false)
                        }         
                        break
                    default :
                        response = await fetch(url) 
                }

                switch(status){
                    case 200 :
                        const serverResponse = await response.json()
                        serverResponse.headers = headers
                        setFormResponse(serverResponse)
                        break
                    case 400 :
                        setFormResponse(await response.json())
                        break
                    case 500 :
                        setFormResponse(await response.json())
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
        loading
    }

}

export default useRequest
