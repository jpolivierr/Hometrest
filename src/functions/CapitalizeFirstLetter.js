const CapitalizeFirstLetter = (word) =>{
    return word.charAt(0).toUpperCase() + word.slice(1)
}

const getFirstLetter = (word) =>{
    return word.charAt(0)
}

export {CapitalizeFirstLetter, getFirstLetter}