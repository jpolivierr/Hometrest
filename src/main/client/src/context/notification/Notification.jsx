
import React, { createContext, useContext, useState } from 'react'

const NotificationContext = createContext();

export const MESSAGE_TYPE = {
    INFO: "INFO",
    ERROR: "ERROR",
}

export function NotificationProvider({children}) {

    const[isOpen, setIsOpen] = useState(false)

    const [message, setMessage] = useState({
        type: MESSAGE_TYPE.INFO,
        title: "Info",
        content: ""
    })

    const info = (content) => {
        setMessage((prevMessage) => ({
            ...prevMessage,
            type: MESSAGE_TYPE.INFO,
            title: "Info",
            content
        }))
        setIsOpen(true)
    }

    const error = (content) => {
        setMessage((prevMessage) => ({
            ...prevMessage,
            type: MESSAGE_TYPE.ERROR,
            title: "Oops!",
            content
        }))
        setIsOpen(true)
    }

    const getMessageicon = () => {
        switch(message.type){
            case MESSAGE_TYPE.INFO :
                return (<i className="fa-solid fa-circle-info"></i>)
            case MESSAGE_TYPE.ERROR :
                return (<i className="fa-solid fa-circle-exclamation"></i>)
            default :
            return (<i className="fa-solid fa-circle-info"></i>)
        }
    }

    const getMessageStyle = () => {
        switch(message.type){
            case MESSAGE_TYPE.INFO :
                return "info-message"
            case MESSAGE_TYPE.ERROR :
                return "info-error"
            default :
                return "info-message"
        }
    }

    const NotificationValue = {
            info,
            error
        }
  return (
    <NotificationContext.Provider value={NotificationValue}>
    {
        
    isOpen && 
    <div className={`message-service ${getMessageStyle()}`}>
        <span onClick={() => setIsOpen(false)} className='message-close-btn'>+</span>
        {getMessageicon()}
        <div className='message-content'>
            <h2>{message.title}</h2>
            <p>
                {message.content}
            </p>
        </div>
    </div>
    }
        {children}
    </NotificationContext.Provider>
  )
}

export const useMessageContext = () => useContext(NotificationContext)
