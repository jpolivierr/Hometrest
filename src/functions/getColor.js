const getColor = (letter) =>{
    let color = null

    switch(letter){
        case "J" :
            color = "rgb(81, 124, 191)";
            break
        case "C" :
            color = "rgb(33, 107, 221)";
            break
        case "Y" :
            color = "rgb(234, 23, 141)";
            break
        case "G" :
            color = "rgb(23, 234, 234)";
            break
        case "R" :
            color = "rgb(42, 204, 83)";
            break
        break
        default :
            color = "#7d2ae8"
    }

    return color
}

export {getColor}