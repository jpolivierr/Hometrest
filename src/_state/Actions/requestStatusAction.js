export const setRequestStatus = (data) =>{
    return{
        type : "send",
        payload: data
    }
}

export const setLoading = (loading) =>{
    return{
        type: "isLoading",
        payload: loading
    }
}