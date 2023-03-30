import { useState } from "react"

const useRequest = () =>{

    const [response, setResponse] = useState({
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
        
        try {
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
                        setResponse(await request.json())
                        break
                    case 400 :
                        setResponse(await request.json()
                        )
                    case 500 :
                        setResponse(await request.json())
                }
        } catch (error) {

            console.log(error)

        }

        


    }

    return{
        makeRequest,
        response
    }

}

export default useRequest
