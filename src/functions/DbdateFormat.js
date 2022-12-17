const DBdateFormat = (date) =>{
    const dateArray = date.split("/")
    return `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`
    
}

export {DBdateFormat}