const init = {
    isShowing: false,
    status: null,
    title: "",
    message: ""
}

const serverMessageReducer = (state = init, action) =>{
switch(action.type){
    case "init":
        return { 
                 ...state, 
                 isShowing: !state.isShowing, 
                 status: action.payload.status, 
                 title: action.payload.title,
                 message: action.payload.message,
                }
    default :
        return state
}

}

export default serverMessageReducer