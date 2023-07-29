export const getSearchValue = (searchReducer, properties) =>{

    const city = searchReducer.city || ""
    const postal_code = searchReducer.postal_code || ""
    const state_code = searchReducer.state_code || ""
    const state = searchReducer.state || ""

    let myState

    if(state_code && state){
        myState = state_code
    }else{
        myState = state_code ? state_code : state
    }

    const str = `${city} ${myState} ${postal_code}`

    return  (<h2>{`${properties.length} result found for "${str.trim()}"`}</h2>)

}