const init = {
    userLoggedIn : false,
    userInfo : null
}

const activeUser = (state = init, action) =>{

    

    switch(action.type){

        case "getUser" :
                   const payload = action.payload
                    if(payload){
                        return {...state, 
                                userLoggedIn : true,
                                userInfo : payload
                                }
                            }
                            return state
            
        default : 
                    return state

    }
}

export default activeUser