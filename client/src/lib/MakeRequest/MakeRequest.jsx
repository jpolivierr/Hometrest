import { useState } from "react"
import useReduxMng from "../../hooks/useReduxMng"
import useSessionMng from "../../hooks/useSessionMng"

const useRequest = () =>{

    const [formResponse, setFormResponse] = useState({})
    const {activeUserReducer} = useReduxMng()
    const [loading, setLoading] = useState(false)
    const {getTokens} = useSessionMng()


    const redirection = (response) =>{

        if(response.redirected){

            window.location.href = response.url

        }

    }

    const makeRequest = async (method, url, data, callBackFunk) => {

        let response
        let status
        let headers

        const requestHeaders = new Headers();

        requestHeaders.append('AuthorizationToken', getTokens("authorizationtoken"));

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
                        redirection(response.redirected)
                        status = response.status
                        headers = response.headers
                        setLoading(false)
                        break
                    case "POST" :
                        if(data){
                            const formData = new FormData()
                            formData.append("formData",JSON.stringify(data))
                            config.body = formData
                            setLoading(true)
                            response = await fetch(url,config)
                            console.log(response.url)
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

            console.log(error)

        }

    }

    return{
        makeRequest,
        formResponse,
        loading
    }

}

export default useRequest
