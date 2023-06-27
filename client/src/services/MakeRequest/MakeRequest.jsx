import { useState } from "react"

const useRequest = () =>{

    const [response, setResponse] = useState(null)
    const [serverError, setServerError] = useState(null)
    const [fieldError, setFieldError] = useState(null)
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
                    case "DELETE" :
                        setLoading(true)
                        response = await fetch(url,config)
                        setStatus(response.status)
                        setLoading(false)
                        break
                    case "POST" :
                    case "PUT" :
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

                // console.log(response.status)
                // console.log(response)
                

                switch(response.status){
                     case 204 :
                     case 201 :
                     case 409 :
                        setServerError(await response.json())
                        break 
                     case 200 : 
                        setResponse(await response.json())
                        break
                      case 302 : 
                      console.log("found 302")
                        const redirecOption = await response.json()
                        if(redirecOption.redirect){
                            window.location.href = redirecOption.redirectLink
                        }
                     case 400 :
                        setFieldError(await response.json())
                        break
                     case 401 :
                        console.log("status 401")    
                        setServerError(await response.json())  
                        break
                     case 500 :
                        setServerError(await response.json()) 
                        break
                    default :
                        setServerError(await response.json())
 
                }
        } catch (error) {

            if (error.name === 'AbortError') {
                console.log('Request aborted');
                return
              }

        }

    }

    return{
        makeRequest,
        serverError,
        fieldError,
        loading,
        status,
        response,
    }

}

export default useRequest
