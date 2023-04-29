export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const CLEAR_USER = "CLEAR_USER";

export const setUser = (payload) =>{
    
    return {
            type : SET_USER,
            payload
    }
    
}

export const setToken = (payload) =>{
    
    return {
            type : SET_TOKEN,
            payload
    }
    
}

export const clearUser = (payload) =>{
    
    return {
            type : CLEAR_USER,
            payload
    }
    
}