import makeRequest from "../../Util/MakeRequest"

export const getUser = () =>{
    
    return async (dispatch) =>{


         const response = await makeRequest("GET","https://jsonplaceholder.typicode.com/posts")

        dispatch({
            type : "getUser",
            payload : response
        })
    }
}