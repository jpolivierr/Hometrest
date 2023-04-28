export const SET_PROPERTIES = "SET_PROPERTIES";

export const setPropertyList = (payload) =>{

    console.log("running..")
    return {
        type : SET_PROPERTIES,
        payload
    }

}