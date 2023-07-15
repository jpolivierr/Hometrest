
export const getGrade = (arr) =>{

    if(!Array.isArray(arr)) return ""

    if(arr.length === 1) return arr[0]

    if(arr.length > 1) return arr[0] + " - " + arr[arr.length -1]

    return ""

}