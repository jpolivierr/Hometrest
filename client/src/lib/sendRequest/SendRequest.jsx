import { useState } from "react"
import useReduxMng from "../../hooks/useReduxMng"
import useSessionMng from "../../hooks/useSessionMng"
import { AUTH_TOKENS } from "../../Config/authToken"

const useSendRequest = () =>{

    const [formResponse, setFormResponse] = useState({})
    const [status, setStatus] = useState(null)
    const {activeUserReducer} = useReduxMng()
    const [loading, setLoading] = useState(false)
    const {getTokens} = useSessionMng(AUTH_TOKENS)

    const POST = async ( url, data) => {

        const requestHeaders = new Headers();

        requestHeaders.set("Content-Type","application/json")

        const config = {
            credentials: 'include',
            mode: 'cors',
            headers: requestHeaders,
            method: "POST",
            body : data
        }
    
        try {
             
                // config.body = JSON.stringify(data)
                setLoading(true)
                let response = await fetch(url,config)
                setFormResponse(await response.json())
                setStatus(response.status)
                setLoading(false)       
                 
                
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
        POST,
        formResponse,
        loading,
        status
    }

}

export default useSendRequest
