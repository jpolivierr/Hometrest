import useReduxMng from "./useReduxMng"

const useRedirectMng = () =>{

    const {activeUserReducer} = useReduxMng()
    const userToken = activeUserReducer.token

    const pathMng = (path) =>{
        console.log(path)
        switch(true){
            case path === "/login" && userToken : 
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