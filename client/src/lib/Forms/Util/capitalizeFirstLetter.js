

export const capitalizeFirstLetter = (value) =>{

    if(typeof value === "string" && value){

        const uppcased = value[0].toUpperCase() + value.slice(1,value.length)
        const dash = uppcased.replaceAll("-"," ")

        return dash

    }

}