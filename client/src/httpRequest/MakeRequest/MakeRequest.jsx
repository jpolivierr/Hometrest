import { useState } from "react"

const useRequest = () =>{

    const [response, setResponse] = useState(null)
    const [serverError, setServerError] = useState(null)
    const [fieldError, setFieldError] = useState(null)
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)


    const makeRequest = async (method, url, data) => {

        console.log("making request")

        let response
        const requestHeaders = new Headers();

        requestHeaders.set("Content-Type","application/json")

        const config = {
            credentials: 'include',
            mode: 'cors',
            headers: requestHeaders,
            method: method
        }

        const get = () => {

        }

        try {
                    switch(method){
                    case "GET" :
                    case "DELETE" :
                        if(data){
                            config.body = JSON.stringify(data)
                            setLoading(true)
                            response = await fetch(url,config)
                            setStatus(response.status)
                            setLoading(false)
                        } else{
                             setLoading(true)
                            response = await fetch(url,config)
                            
                            setStatus(response.status)
                            setLoading(false)
                        }
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

                            const currentPath = window.location.pathname;
                            let redirectUri

                            console.log(currentPath)
                            if(currentPath === "/login" || currentPath === "/signup"){
                                redirectUri = redirecOption.redirectLink
                            }else{
                                redirectUri = window.location.href
                            }

                            window.location.href = redirectUri
                        }
                     case 400 :
                        const responseObj= await response.json()
                        setFieldError(responseObj)
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
