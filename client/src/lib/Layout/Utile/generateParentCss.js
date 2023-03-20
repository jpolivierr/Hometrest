import { convertKey } from "./convertKey"



export const generateParentCss = (key, id, props) =>{

 if(key === "parent"){
            return `
                            .${id}{
                                ${props}
                            }
                        `
    }else{
        return ""
    }

}

export const generateChildCss = (key, id, props) =>{


    if(typeof Number(key) === "number" && Number(key) > 0){
    
        return `
                 .${id} div:nth-child(${key}){
                    ${props}
                 }
                 `
            
     }else{
        return ""
     }

}

export const generateMobileStyle = (id, mobile, elKey) =>{
 
       if(Array.isArray(mobile) && mobile.length > 0 && elKey === "parent"){

        let mobileStyle = ""
        let styleProps = ""

            mobile.forEach((propsObj)=> {
      
                if(propsObj.screenWidth){

                    const split = propsObj.screenWidth.split("_")
                    const minMax = split[0]
                    const pixels = split[1]

                    mobileStyle += `@media(${minMax}-width: ${pixels}px){`

                    for(let key in propsObj){

                    if(key !== "screenWidth"){
   
                        styleProps = `${mobileProps(id, propsObj)}`
                     }

                }

                }
                
                
            })

        
            return mobileStyle + styleProps + "}"
       }else{

              return ""

       }
        
   
}


const mobileProps = (id, elementStyle) =>{

    if(elementStyle){
        let props = ""
        for(let parentKey in elementStyle){
        
            props += !elementStyle[parentKey] ? "" :  `${convertKey(parentKey)} : ${elementStyle[parentKey]}; `
        
    }

    return `
          .${id}{
             ${props}
          }
    `  
    }            
    

}



export const generateMobileChildStyle = (id, mobile, elKey) =>{

    if(Array.isArray(mobile) && mobile.length > 0 &&
    typeof Number(elKey) === "number" && Number(elKey) > 0){

        let mobileStyle = ""
        let styleProps = ""

            mobile.forEach((propsObj)=> {
      
                if(propsObj.screenWidth){

                    const split = propsObj.screenWidth.split("_")
                    const minMax = split[0]
                    const pixels = split[1]

                    mobileStyle += `@media(${minMax}-width: ${pixels}px){`

                    for(let key in propsObj){

                    if(key !== "screenWidth"){
   
                        styleProps = `${mobileChildProps(id, propsObj, elKey)}`
                     }

                }

                }
                         
            })
        
            return mobileStyle + styleProps + "}"
       }else{

              return ""

       }
        

}

const mobileChildProps = (id, elementStyle, elKey) =>{

    if(elementStyle){

        let props = ""
        for(let parentKey in elementStyle){
        
            props += !elementStyle[parentKey] ? "" :  `${convertKey(parentKey)} : ${elementStyle[parentKey]}; `
        
    }

    return  `
    .${id} div:nth-child(${elKey}){
       ${props}
    }
    `
    } else{
        return ""
    }

}


export const generateCssProps = (elementStyle) =>{

    let props = ""
                
                for(let parentKey in elementStyle){
                    
                    if(parentKey !== "mobile"){
                        props += !elementStyle[parentKey] ? "" :  `${convertKey(parentKey)} : ${elementStyle[parentKey]}; `
                    }
                    
                }

      return props         
}