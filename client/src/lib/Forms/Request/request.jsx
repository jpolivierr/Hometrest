import { useState } from "react"
import useReduxMng from "../../../hooks/useReduxMng"

const useFormSubmit = () =>{

    const [formResponse, setFormResponse] = useState({})
    const {activeUserReducer} = useReduxMng()
    
    const redirection = (redirected) =>{

        if(redirected){

            window.location.href = redirected.url

        }

    }

    const makeRequest = async (method, url, data, callBackFunk) => {

        let response
        let status
        let headers

        const requestHeaders = new Headers();
        requestHeaders.append('AuthorizationToken', activeUserReducer.token);

        const config = {
            credentials: 'include',
            headers: requestHeaders,
            method: method
        }
        
        try {
                    switch(method){
                    case "GET" :
                        response = await fetch(url)
                        redirection(response.redirected)
                        status = response.status
                        headers = response.headers
                        break
                    case "POST" :
                        if(data){
                            const formData = new FormData()
                            formData.append("formData",JSON.stringify(data))
                            config.body = formData
                            response = await fetch(url,config)
                            redirection(response.redirected)             
                            status = response.status
                            headers = response.headers
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
    }

}

export default useFormSubmit
