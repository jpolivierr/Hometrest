import {useState, useRef } from "react"
import deepCopy from "../Util/deepCopy"


const HttpRequest = (userConfig) =>{

    let abortController = useRef(null)
    const [loading, setLoading] = useState(true)
    const [config] = useState({
        credentials: 'include',
        mode: 'cors',
        cache: "no-cache",
        signal: false,
        ...userConfig
      });   

const PrepareSignal = (config) =>{

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
        config.signal = signal
        config.timeout = timeout;
        return config
}

const responseHandler = async (response) => {

    let body;
    const payload = {
        status: response.status,
        body: null,
        headers: response.headers
    }

    if (
        (response.ok && response.headers.get('Content-Type') && 
        response.headers.get('Content-Type').includes('application/json')) ||
        (!response.ok && response.headers.get('Content-Type') && 
        response.headers.get('Content-Type').includes('application/json'))
    ) {
        body = await response.json();
        setLoading(false)
        payload.body = body
    } 
    else if (response.ok && response.headers.get('Content-Type') && !response.headers.get('Content-Type').includes('application/json')) {
        body = await response.text();
        setLoading(false)
        payload.status = 500
        payload.body = body
    }

    return payload

}

const errorHandler = (error) => {
    if (error.name === 'AbortError') {
        console.error('Fetch aborted:', error.message)
        return {status: 500, body: null, error: error}
    } else {
        setLoading(false)
        console.error('Unexpected error:', error.message)
        return {status: 500, body: null, error: error}
    }
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
        return errorHandler(error)
    }
}

    const post = async (url,data = {}, isFormData = false) => {
        try {
            setLoading(true) 
            const postConfig = deepCopy(config)
            postConfig.body = isFormData ? data : JSON.stringify(data)
            postConfig.method = "POST"
            PrepareSignal(postConfig)
            const response = await fetch(url,postConfig)   
            clearTimeout(postConfig.timeout)
            return responseHandler(response)
        } catch (error) {
            return errorHandler(error)
        }
    }

    const del = async (url,data = {}, isFormData = false) => {
        try {
            setLoading(true) 
            const postConfig = deepCopy(config)
            postConfig.body = isFormData ? data : JSON.stringify(data)
            postConfig.method = "DELETE"
            PrepareSignal(postConfig)
            const response = await fetch(url,postConfig)   
            clearTimeout(postConfig.timeout)
            const responseBody = responseHandler(response)
            return responseBody
        } catch (error) {
            return errorHandler(error)
        }
    }


    return{
        get,
        post,
        del,
        loading
    }

}

export default HttpRequest
