

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

export const getParams = (paramKey) =>{
 
    const search = window.location.search

    if(!search){
        return null
    }else{
            const paramValue = new URLSearchParams(search)
            
            const entries = paramValue.entries()

            if(search && entries){

                try {
                let paramObj = {}

                for(const entry of entries) {
                    paramObj[entry[0]] = entry[1]
                }
                
                    if(paramObj[paramKey]){
                        return JSON.parse(paramObj[paramKey])
                    }
                 

                } catch (error) {
                    console.log(error)
                    return null
                }             

            
            }else{
                return null
            }
    }


    
    
}

export const updateParam = (paramObj, toJson, paramKey) => {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;

    if (typeof paramObj === "object" && Object.keys(paramObj).length === 0) {
        searchParams.delete(paramKey);
    } else if (typeof paramObj === "object" && Object.keys(paramObj).length > 0) {
        if (toJson) {
            searchParams.set(paramKey, JSON.stringify(paramObj));
        } else {
            for (const key in paramObj) {
                const keyValue = paramObj[key];
                if (typeof keyValue === "object" && Object.keys(keyValue).length > 0) {
                    searchParams.set(key, JSON.stringify(keyValue));
                } else if (keyValue !== "") {
                    searchParams.set(key, keyValue);
                }
            }
        }
    }

    url.search = searchParams.toString();
    const newUrl = url.toString();
    const title = document.title;
    const data = { params: searchParams.toString() };

    window.history.replaceState(data, title, newUrl);
};


