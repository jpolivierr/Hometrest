import { useRef, useState } from "react"

const useRequest = () =>{

    const [response, setResponse] = useState(null)
    const [serverError, setServerError] = useState(null)
    const [fieldError, setFieldError] = useState(null)
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    // const [abortController, setAbortController] = useState(null)

    let abortController = useRef(null)

    const makeRequest = async (method, url, data) => {


        if(abortController.current){

            abortController.current.abort()

        }

        abortController.current = new AbortController()

        const timeout = setTimeout(() => {
            console.log("timed out..")
            abortController.current && abortController.current.abort();
          }, 5000);


        let response
        const requestHeaders = new Headers();

        requestHeaders.set("Content-Type","application/json")

        const config = {
            credentials: 'include',
            mode: 'cors',
            headers: requestHeaders,
            method: method,
            signal: abortController.current && abortController.current.signal
        }

        try {
                    switch(method){
                    case "GET" :
                    case "DELETE" :
                            setLoading(true)
                            response = await fetch(url,config)
                            clearTimeout(timeout);
                            setStatus(response.status)
                            setLoading(false)
                            abortController.current = null
                            break
                    case "POST" :
                    case "PUT" :
                        if(data){
                            config.body = JSON.stringify(data)
                            setLoading(true)
                            response = await fetch(url,config)
                            clearTimeout(timeout);
                            setStatus(response.status)
                            setLoading(false)
                            abortController.current = null
                        }         
                        break
                    default :
                        response = await fetch(url)
                }

                 console.log(response.status)
                 console.log(response)
                

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
