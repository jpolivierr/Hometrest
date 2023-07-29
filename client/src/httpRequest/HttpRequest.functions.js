  export const setConfiguration = (config) =>{

        const requestHeaders = new Headers();
        requestHeaders.set("Content-Type","application/json")

        const defaultConfig =  {
            credentials: 'same-origin',
            mode: 'cors',
            headers: requestHeaders,
            method: "GET",
            body: {},
            cache: "no-cache",
            // signal: new AbortController()
        }

        if(config && Object.keys(config).length > 0){

            const newConfig = {...defaultConfig, ...config}
            return newConfig

        }

        return defaultConfig
    }


export const handleError = (error, setStatus) =>{

          setStatus(500)

       if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
            // This error occurs when the request is blocked by CORS
            console.error('CORS error: Make sure the server allows cross-origin requests.');
          }

          if (error.name === 'AbortError') {
            console.log('Request aborted');
            return
          }

          console.log(error)

}