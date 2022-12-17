const uniqueId = (firstname, lastname) =>{
    
    const fnameLength = firstname.length;
    const lnameLength = lastname.length

    const fnameRandomLetter = firstname[Math.floor(Math.random() * fnameLength)]
    const lnameRandomLetter = lastname[Math.floor(Math.random() * lnameLength)]

    const date = new Date()

    return `${fnameRandomLetter}${Number(date.getMilliseconds()) * lnameLength / fnameLength }${lnameRandomLetter}`
}

export {uniqueId}