export const GET_PROPERTIES = "GET_PROPERTIES";

export const getPropertyList = (payload) =>{

    return {
        type : GET_PROPERTIES,
        payload
    }

}