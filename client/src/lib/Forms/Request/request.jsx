import { useState } from "react"

const useFormSubmit = () =>{

    const [formResponse, setFormResponse] = useState({
        status: null,
        message: "",
        error: null,
        body: {}
    })

    const makeRequest = async (method, url, data, callBackFunk) => {

        let request
        let status

        const config = {
            method: method,
        }
        

        switch(method){
            case "GET" :
                request = await fetch(url)
                status = request.status
                break
            case "POST" :
                if(data){
                    config.body = data
                    request = await fetch(url,config)          
                    status = request.status
                 }         
                 break
            default :
                request = await fetch(url) 
        }

        // console.log(await request.json())

        switch(status){
            case 200 :
                setFormResponse(
                    {
                       ...formResponse,
                        status,
                        message : "success",
                        body : await request.json()
                    }
                  )
                  break
            case 400 :
                setFormResponse(
                    {
                       ...formResponse,
                        status,
                        message : "server not found",
                        body : await request.json()
                    }
                  )
            case 500 :
                setFormResponse(
                    {
                       ...formResponse,
                        status,
                        message : "server not found",
                        body : await request.json()
                    }
                  )

        }


    }

    return{
        makeRequest,
        formResponse
    }

}

export default useFormSubmit
