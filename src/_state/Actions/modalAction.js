export const openModal = (modalType, formType, data) =>{
    return{
        type: "init",
        payload: {modalType, formType, data}
    }

}