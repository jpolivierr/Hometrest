import React from 'react'
import { createContext, useState } from 'react'
import ShowMessage from './showMessage/showMessage.component'

const GlobalMessageContext = createContext()

export const GlobalMessageProvider = ({children}) =>{

    const [showMessages, setShowMessage] = useState(null)


    const toggleShowMessage = () =>{
        setShowMessage(!showMessages)
    }

  return (
        <GlobalMessageContext.Provider value={{toggleShowMessage}}>
           {children}
           <ShowMessage  isShowing={showMessages} toggle={toggleShowMessage} />
        </GlobalMessageContext.Provider>
  )
}

export default GlobalMessageContext
