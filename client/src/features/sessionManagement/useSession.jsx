import { useState, useEffect, useRef } from "react"
import useCookies from "./cookies"
const useSession = () =>{

    const {getCookie, deleteCookie, activeCookie} = useCookies()


    return{
        getCookie,
        deleteCookie,
        activeCookie
    }
}

export default useSession