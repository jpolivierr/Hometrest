import { useState } from "react"

const useFormSubmit = () =>{

    const [formResponse, setFormResponse] = useState({
        status: null,
        message: "",
        error: null,
        body: {}
    })

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
                        response = await fetch(url)
                        status = response.status
                        break
                    case "POST" :
                        if(data){
                            const formData = new FormData()
                            formData.append("formData",JSON.stringify(data))
                            config.body = formData
                            response = await fetch(url,config) 
                            console.log(await response.text())
                            status = response.status
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
        formResponse
    }

}

export default useFormSubmit
