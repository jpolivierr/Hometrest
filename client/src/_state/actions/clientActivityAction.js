

 export const  SET_INACTIVE = "set_inactive"
 export const  SET_ACTIVE = "set_active"
 export const   GET_INACTIVE_TIME = "get_inactive_time"


export const setInactive = () =>{

    const date = new Date()
return{
    type: SET_INACTIVE,
    payload : date.getTime()
}
}

export const setActive = () =>{

    const date = new Date()

    return{
        type: SET_ACTIVE,
        payload : date.getTime()
    }
}



