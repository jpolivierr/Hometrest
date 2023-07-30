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
             signal: false
        }

        if(config && Object.keys(config).length > 0){

            const newConfig = {...defaultConfig, ...config}
            return newConfig

        }

        return defaultConfig
    }

export const setSignal = (newAbortController) =>{

        if(newAbortController.current){

          newAbortController.current.abort()

      }

      newAbortController.current = new AbortController()

      const timeout = setTimeout(() => {

        newAbortController.current && newAbortController.current.abort();

      }, 3000);


      const abortController = newAbortController.current
      
      return {abortController, timeout}


}    


export const handleError = (error, setStatus) =>{

          

       if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
             setStatus(500)
            // This error occurs when the request is blocked by CORS
            console.error('CORS error: Make sure the server allows cross-origin requests.');
            return
          }

          if (error.name === 'AbortError') {
            setStatus(504)
            console.log('Request aborted');
            return
          }

          setStatus(500)

          console.log(error)

}