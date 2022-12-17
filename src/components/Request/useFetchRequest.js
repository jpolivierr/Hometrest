import { useState} from "react";


//Actions
import { bindActionCreators } from 'redux'
import { useDispatch } from "react-redux";
import { requestStatusAction } from "../../_state/Actions/actionCollection";
//Reducer


const useFetchRequest = () =>{

    const { setRequestStatus, setLoading } = bindActionCreators(requestStatusAction, useDispatch())

     const [isLoading, setIsLoading] = useState(true)
     const [response, setResponse] = useState({})

     const res = {
        status: null,
        message: "",
        response: {},
        csMessage: {
                    header: "",
                    text: ""
                  }
     }

    const sendRequest = async (method, url, data) =>{
        
        setLoading(true)
        
        console.log(":::: SENDING REQUEST - "+url)
        
        
            try{

                const config = {
                    method
                }

                if(method === "POST"){
                    if(!data){

                    }else{
                        console.log("Payload :")
                        console.log(data)
                       const formData = new FormData()
                       
                       formData.append("formData", JSON.stringify(data))
                       
                       config.body = formData
                    } 
                    
                }
                const resp = await fetch(url, config)
                const respData = await resp.json()
                // const respData = await resp.json()
                let serverResp

                switch(resp.status){
                    case 200 :
                        setLoading(false)
                        serverResp = {...respData, 
                                            header: "success",
                                            csMessage: ""
                                        }
                        console.log(serverResp)
                        // setRequestStatus(type, serverResp)
                        break
                    case 400 :
                        setLoading(false)
                        serverResp = {...respData, 
                                            header: "Error",
                                            csMessage: "Oops!Something went wrong"
                                        }
                        console.log(serverResp)
                        // setRequestStatus(type, serverResp)
                        break
                    case 417 :
                        setLoading(false)
                        serverResp = {...respData, 
                                            header: "Error",
                                            csMessage: "Oops!Something went wrong"
                                        }
                        console.log(serverResp)
                        break
                    case 404 :
                        setLoading(false)
                        serverResp = {...respData, 
                                            header: "Error",
                                            csMessage: "Oops!Something went wrong"
                                        }
                        console.log(serverResp)
                        break
                    case 500 :
                        setLoading(false)
                        serverResp = {...respData, 
                                            header: "Error",
                                            csMessage: "Oops!Something went wrong"
                                        }
                        console.log(serverResp)
                        break
                    default :
                    setLoading(false)
                        serverResp = {...respData, 
                                            header: "Error",
                                            csMessage: "Oops!Something went wrong"
                                        }
                        console.log(serverResp)
                    break
                }


            }catch(error){
                console.log(error.message)
                    if(error.message.includes("JSON.parse: ")){
                        setLoading(false)
                        setRequestStatus(500,
                                         "Error",
                                         "Oops! Something went wrong",
                                           null
                                         )    
                            }else{
                                res.status = 505
                                res.message = error.message
                                 setIsLoading(false)
                                setResponse(res)
                                return res
                            }

            }
        
    }

    return {isLoading, response, sendRequest}
}

export {useFetchRequest}