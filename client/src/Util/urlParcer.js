

export const urlParcer = () =>{
        
        const URL = window.location.href
        const HOST = window.location.hostname
        const DOMAIN = window.location.origin
        const PATH = window.location.pathname
        const param = window.location.search
        const HASH = window.location.hash

        const obj = {
            url : URL,
            host : HOST,
            domain : DOMAIN,
            path : PATH,
            hash : HASH,
            params : getParams()
        }

}

export const getParams = () =>{

    const search = window.location.search

    const paramValue = new URLSearchParams(search)

    const entries = paramValue.entries()


    if(search && entries){

         let paramObj = {}

        for(const entry of entries) {
            paramObj[entry[0]] = entry[1]
          }


        return paramObj

    
    }else{
        return null
    }
    
}

export const updateParam = (paramObj) =>{
    
    if(typeof paramObj === "object" && Object.keys(paramObj).length > 0){
        
        console.log(Object.keys(paramObj).length)
    }
}

