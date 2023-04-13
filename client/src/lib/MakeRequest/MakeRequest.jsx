import { useState } from "react"

const useRequest = () =>{

    const [formResponse, setFormResponse] = useState({
        status: null,
        message: "",
        error: null,
        body: {}
    })

    const [loading, setLoading] = useState(false)

    const redirection = (redirected) =>{

        if(redirected){
            window.location.href = redirected.url
        }

    }

    const makeRequest = async (method, url, data, callBackFunk) => {

        let response
        let status

        const config = {
            credentials: 'include',
            method: method
        }
        
        try {
                    switch(method){
                    case "GET" :
                        setLoading(true)
                        response = await fetch(url)
                        redirection(response.redirected)
                        status = response.status
                        setLoading(false)
                        break
                    case "POST" :
                        if(data){
                            const formData = new FormData()
                            formData.append("formData",JSON.stringify(data))
                            config.body = formData
                            setLoading(true)
                            response = await fetch(url,config)  
                            redirection(response.redirected)       
                            status = response.status
                            setLoading(false)
                        }         
                        break
                    default :
                        response = await fetch(url) 
                }

                switch(status){
                    case 200 :
                        setFormResponse(await response.json())
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
