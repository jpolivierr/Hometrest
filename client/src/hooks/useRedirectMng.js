import useReduxMng from "./useReduxMng"

const useRedirectMng = () =>{

    const {activeUserReducer} = useReduxMng()
    const userToken = activeUserReducer.token

    const pathMng = (path) =>{

        switch(true){
            case path === "/login" && userToken != null : 
               window.location.pathname = "/"
               break
            case path === "/signup" && userToken != null : 
                window.location.pathname = "/"
                break
            default :
                return 
        }

    }

    return {
        pathMng
    }

}

export default useRedirectMng