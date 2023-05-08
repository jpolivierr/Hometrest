export const SET_AUTHENTICATION = "SET_AUTHENTICATION";
export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const CLEAR_USER = "CLEAR_USER";
export const UPDATE_LIKES = "UPDATE_LIKES"

export const setAuthentication = (payload) =>{
    
    return {
            type : SET_AUTHENTICATION,
            payload
    }
    
}

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

export const updateLikes = (payload) =>{
    
    return {
            type : UPDATE_LIKES,
            payload
    }
    
}