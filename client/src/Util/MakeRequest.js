


    const makeRequest = async (method, url, data, callBackFunk) => {

        let response
        let status

        const config = {
            method: method,
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
                            status = response.status
                        }         
                        break
                    default :
                        response = await fetch(url) 
                }

                switch(status){
                    case 200 :
                        return await response.json()
                    case 400 :
                        return await response.json()
                    case 500 :
                        return await response.json()
                    default :
                        return await response.json()
 
                }
        } catch (error) {

            console.log(error)
        }

    }



export default makeRequest
