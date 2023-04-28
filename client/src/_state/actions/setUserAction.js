export const SET_USER = "SET_USER";

export const setUser = (payload) =>{

    console.log(payload)
    
    return {
            type : SET_USER,
            payload
    }
    
}