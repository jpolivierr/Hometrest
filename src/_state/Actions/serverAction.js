export const setServerMessage = (status, title, message) =>{
    return{
        type: "init",
        payload: {status, title, message}
    }
}
