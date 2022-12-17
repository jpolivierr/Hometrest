const init = {

        isShowing: false,
        modalType: "",
        formType: "",
        data : null
}

const modalReducer = (state = init, action) =>{
    switch(action.type){
        
        case "init":
            return { 
                     ...state, 
                     isShowing: !state.isShowing, 
                     modalType: action.payload.modalType, 
                     formType: action.payload.formType,
                     data: action.payload.data
                    }
        default :
            return state
    }
    
}

export default modalReducer