import { useEffect, useState, useRef } from "react"
import { handleError, setConfiguration, setSignal } from "./HttpRequest.functions"


const HttpRequest = (defaultUrl,config) =>{


    const requestHeaders = new Headers();
    requestHeaders.set("Content-Type","application/json")

    let abortController = useRef(null)

    const [response, setResponse] = useState(null)
    const [serverError, setServerError] = useState(null)
    const [fieldError] = useState(null)
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(null)

    const [defaultConfig] = useState(setConfiguration(config))

    

    // Handle status
    useEffect(()=>{

        // console.log(status)

        switch(true){
            case status >= 200 && status <= 299 :
                break
            case status === 404 :
                break
            case status === 504 :
                setServerError("Request timed out")
                break
            case status >= 500 && status <= 599 :
                 setServerError("Oops something went wrong on our end. Please try again later.")
                 break
            default :
                return
        }

    },[status])
    

 const PrepareRequest = (url,method,data) =>{
        const assignUrl = url ? url : defaultUrl
        const signal = setSignal(abortController)
        defaultConfig.method = method
        const assignConfig = data ? 
                           {
                            ...defaultConfig, 
                            body: JSON.stringify(data)
                           } : 
                            defaultConfig

       assignConfig.signal = signal.abortController && signal.abortController.signal

       return{assignUrl,assignConfig}

    }


    const postResponse = async(response, signal) =>{
        
                    setStatus(response.status)
                    setResponse(await response.json())
                    clearTimeout(signal.timeout)
                    setLoading(false)

    }


    const get = async (url) => {
                try {
                    console.log("making GET request.....")

                    const {assignUrl,assignConfig} = PrepareRequest(url,"GET")

                    const response = await fetch(assignUrl,assignConfig)

                    postResponse(response, assignConfig.signal) 

                } catch (error) {

                    handleError(error, setStatus)
                    
                }

            }

    const post = async (url,data) => {

        try {
            
            const {assignUrl,assignConfig} = PrepareRequest(url,"POST",data)
            setLoading(true) 
            const response = await fetch(assignUrl,assignConfig)

            clearTimeout(assignConfig.signal.timeout)
            setLoading(false)
            return {
                status: response.status,
                body : await response.json(),
            }


        } catch (error) {

            handleError(error, setStatus)
            return {status: 500, body: null}
        }

    }


    return{
        get,
        post,
        serverError,
        fieldError,
        loading,
        status,
        response,
    }

}

export default HttpRequest
