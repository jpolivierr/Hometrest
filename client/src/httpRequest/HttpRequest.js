import { useEffect, useState } from "react"
import { handleError, setConfiguration } from "./HttpRequest.functions"


const HttpRequest = (defaultUrl,config) =>{


    const requestHeaders = new Headers();
    requestHeaders.set("Content-Type","application/json")


    const [response, setResponse] = useState(null)
    const [serverError, setServerError] = useState(null)
    const [fieldError, setFieldError] = useState(null)
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(null)
    const [defaultConfig] = useState(setConfiguration(config))


    useEffect(()=>{

        switch(true){
            case status >= 200 && status <= 299 :
                break
            case status === 404 :
                break
            case status >= 500 && status <= 599 :
                 setServerError("Oops something went wrong on our end. Please try again later.")
                 break
            default :
                return
        }

    },[status])
    
    useEffect(()=>{

        if(response){
            console.log("response --> ",response)
        }

        

    },[response])

    useEffect(()=>{

        if(serverError){
            console.log("server error -->", serverError)
        }

        

    },[serverError])

    useEffect(()=>{


    },[loading])


    const get = async (url) => {

                try {
                    
                    console.log("making GET request.....")
                    setLoading(true)
                    const assignUrl = url ? url : defaultUrl
                    defaultConfig.method = "GET"
                    const response = await fetch(assignUrl,defaultConfig)
                    setStatus(response.status)
                    setResponse(await response.json())
                    setLoading(false)

                } catch (error) {

                    handleError(error, setStatus)
                    
                }

            }

            const post = async (url,data) => {

                try {
                    console.log("making POST request.....")
                    setLoading(true)
                    const assignUrl = url ? url : defaultUrl
                    const assignConfig = data ?{...defaultConfig, body: JSON.stringify(data)} : defaultConfig
                    assignConfig.method = "POST"
                    console.log(assignConfig)
                    const response = await fetch(assignUrl,assignConfig)
                    setStatus(response.status)
                    setResponse(await response.json())
                    setLoading(false)

                } catch (error) {

                    handleError(error, setStatus)
                    
                }

            }


    return{
        get,
        post,
        // makeRequest,
        serverError,
        fieldError,
        loading,
        status,
        response,
    }

}

export default HttpRequest
