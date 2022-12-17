import { useFetchRequest } from "../../components/Request/useFetchRequest"


export const loadAccountData = (data) =>{
    return{
        type: "load",
        payload: data
    }

}
 
export const fetchAccount = () =>{

    return async (dispatch) =>{
       const {isLoading, response, sendRequest} = useFetchRequest()

        const res = await sendRequest("GET", "http://localhost:8080/process/account", null)
        console.log(res)

        dispatch({
            type: 'fetchAccount',
            payload: res
        })
    }
}
