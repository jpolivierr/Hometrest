import { useEffect, useState, useRef } from "react"
import deepCopy from "../Util/deepCopy"


const HttpRequest = (userConfig) =>{


    let abortController = useRef(null)

    const [response, setResponse] = useState(null)
    const [serverError, setServerError] = useState(null)
    const [fieldError] = useState(null)
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(null)
    const [config] = useState({
        credentials: 'include',
        mode: 'cors',
        cache: "no-cache",
        signal: false,
        ...userConfig
      });

const setSignal = () =>{

    if(abortController.current){
        abortController.current.abort();
    }

    abortController.current = new AbortController()

    const timeout = setTimeout(() => {
        if (abortController.current) {
            abortController.current.abort();
        }
    }, 20000);

    const signal = abortController.current.signal;
    return { signal, timeout };

}

const handleError = (error, setStatus) =>{

    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
          setStatus(500)
         // This error occurs when the request is blocked by CORS
         console.error('CORS error: Make sure the server allows cross-origin requests.');
         return
       }

       if (error.name === 'AbortError') {
         setStatus(504)
         console.log('Request aborted');
         return
       }

       setStatus(500)

       console.log(error)

}


    // Handle status
    useEffect(()=>{

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
    

const PrepareSignal = (config) =>{
        const { signal, timeout } = setSignal();
        config.signal = signal
        config.timeout = timeout;
        return config
    }

const responseHandler = async (response) => {

    let body;
    const payload = {
        status: null,
        body: null,
        headers: response.headers
    }

    if (response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('application/json')) {
        body = await response.json();
        setLoading(false)
        payload.status = response.status
        payload.body = body
    } else {
        body = await response.text();
        setLoading(false)
        payload.status = 500
        payload.body = body
    }

    return payload

} 

const get = async (url) => {
    try {
        setLoading(true) 
        const getConfig = deepCopy(config)
        PrepareSignal(getConfig)
        const response = await fetch(url,getConfig)
        clearTimeout(getConfig.timeout)
        return responseHandler(response)
    } catch (error) {
        setLoading(false)
        handleError(error, setStatus)
        console.error(error, error.message)
        return {status: 500, body: null, error: error}
    }
}

    const post = async (url,data) => {
        try {
            setLoading(true) 
            const postConfig = deepCopy(config)
            postConfig.body = data
            postConfig.method = "POST"
            PrepareSignal(postConfig)
            const response = await fetch(url,postConfig)   
            clearTimeout(postConfig.timeout)
            return responseHandler(response)
        } catch (error) {
            handleError(error, setStatus)
            setLoading(false)
            console.error(error, error.message)
            return {status: 500, body: null, error: error}
        }
    }

    const del = async (url,data) => {
        try {
            setLoading(true) 
            const postConfig = deepCopy(config)
            postConfig.body = data
            postConfig.method = "DELETE"
            PrepareSignal(postConfig)
            const response = await fetch(url,postConfig)   
            clearTimeout(postConfig.timeout)
            return responseHandler(response)
        } catch (error) {
            handleError(error, setStatus)
            setLoading(false)
            console.error(error, error.message)
            return {status: 500, body: null, error: error}
        }
    }


    return{
        get,
        post,
        del,
        serverError,
        fieldError,
        loading,
        status,
        response
    }

}

export default HttpRequest
