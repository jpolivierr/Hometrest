export const setRequestStatus = (type,data) =>{
    return{
        type,
        payload: data
    }
}

export const setLoading = (loading) =>{
    return{
        type: "isLoading",
        payload: loading
    }
}