import { useState} from "react";


//Actions
import { bindActionCreators } from 'redux'
import { useDispatch } from "react-redux";
import { serverAction } from "../../_state/Actions/actionCollection";
import { requestStatusAction } from "../../_state/Actions/actionCollection";
//Reducer
import {useSelector} from 'react-redux'

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

                        if(!data.city){
                            delete data.city
                        }
                        if(!data.postal_code ){
                           delete data.postal_code
                        }
                        
                       const formData = new FormData()
                       console.log(data)
                       formData.append("formData", JSON.stringify(data))
                       
                       config.body = formData
                    } 
                    
                }
                const resp = await fetch(url, config)
                    // const respData = await resp.json()
                  const respData = await resp.json()
                  console.log(respData)
                let serverResp

                switch(resp.status){
                    case 200 :
                        setLoading(false)
                        serverResp = {...respData, 
                                            status: resp.status,
                                            header: "success",
                                            csMessage: ""
                                        }
                    
                                      setRequestStatus(serverResp)
                        break
                    case 400 :
                        setLoading(false)
                        serverResp = {...respData, 
                                            status: resp.status,
                                            header: "Error",
                                            csMessage: "Oops!Something went wrong"
                                        }
                    
                                     setRequestStatus(serverResp)
                        break
                    case 417 :
                        setLoading(false)
                        serverResp = {...respData, 
                                            status: resp.status,
                                            header: "Error",
                                            csMessage: "Oops!Something went wrong"
                                        }
                                    setRequestStatus(serverResp)
                        break
                    case 404 :
                        setLoading(false)
                        serverResp = {...respData, 
                                            status: resp.status,
                                            header: "Error",
                                            csMessage: "Oops!Something went wrong"
                                        }
                                        setRequestStatus(serverResp) 
                        break
                    case 500 :
                        setLoading(false)
                        serverResp = {...respData, 
                                            status: resp.status,
                                            header: "Error",
                                            csMessage: "Oops!Something went wrong"
                                        }
                                        setRequestStatus(serverResp) 
                    
                        break
                    default :
                    setLoading(false)
                        serverResp = {...respData, 
                                            status: resp.status,
                                            header: "Error",
                                            csMessage: "Oops!Something went wrong"
                                        }
                                        setRequestStatus(serverResp) 
                    
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