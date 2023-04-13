

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

export const updateParam = (paramObj,toJson, paramKey) =>{
    
    if(typeof paramObj === "object" && Object.keys(paramObj).length > 0){
        
        const url = new URL(window.location.href)

        const search_params = url.searchParams

        if(!toJson){

                    for( const key in paramObj){

                    const keyValue = paramObj[key]

                    
                        if(
                            typeof keyValue === "object" && 
                            Object.keys(keyValue).length > 0)
                            {

                                const myArr = Object.entries(keyValue)

                                search_params.set(key,myArr + "&")

                        }else if(keyValue !== "") {

                            search_params.set(key,keyValue)

                        }   
                        
                }

          }else{

              search_params.set(paramKey, JSON.stringify(paramObj) )

          }

      

        url.search = search_params.toString()

        const data = search_params

        const title = document.title
        
        const newUrl = url.toString()

        // This will create a new entry in the browser's history, without reloading
        // window.history.pushState(data, title, newUrl);

        // This will replace the current entry in the browser's history, without reloading
        window.history.replaceState(data, title, newUrl);

    }
}

