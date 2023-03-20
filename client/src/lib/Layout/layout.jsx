import { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import nestedObject from '../../Util/nestedObject';
import { convertKey } from './Utile/convertKey';
import { generateParentCss } from './Utile/generateParentCss';
import { generateCssProps } from './Utile/generateParentCss';
import { generateChildCss } from './Utile/generateParentCss';
import { generateMobileStyle } from './Utile/generateParentCss';
import { generateMobileChildStyle } from './Utile/generateParentCss';
const Layout = (props) =>{

    const {id, children, column, row, elementStyle, Class, Style} = props


    useLayoutEffect(()=>{
         
        if(!document.querySelector("#compStyle")){
            const head = document.head
            const firstStyleElement = head.querySelectorAll("style")
            const el = document.createElement("style")
                el.id = "compStyle"

        
            if(!firstStyleElement){

                head.appendChild(el)

            }else if(firstStyleElement[0]){

                const first = firstStyleElement[0]
                head.insertBefore(el, first)

            }
            
            
        }

        generateClass()
 
    },[])



    const generateClass = () =>{

        if(id){

        let childStyle = ""
        let parentStyle = ""
        let mobileStyle
        let mobileChildStyle



        for(const key in elementStyle){
            
                 const props  = generateCssProps(elementStyle[key])

                 parentStyle = generateParentCss(key,id, props)

                 childStyle += generateChildCss(key,id, props)

                 let mobile = nestedObject(elementStyle[key], "mobile")

                 mobileStyle = generateMobileStyle(id, mobile, key)

                 mobileChildStyle += generateMobileChildStyle(id, mobile, key)
      
        }


        const style = `

            ${parentStyle}
             ${childStyle}
             ${mobileStyle}
             ${mobileChildStyle.replace("undefined","")}
            

        `
    

        if(document.querySelector("#compStyle")){

             const mainElement = document.querySelector("#compStyle")

             mainElement.innerHTML += style
   
          }

        }
       

    }


   
    return(
        <>
        <section className={`${id} ${Class}`}>
             {
               children.length > 0 &&

                  children.map((element, index) =>(
                    <div 
                             key={index}  
                             >
                        {element}
                    </div>
                  ))
                    
            } 

            {
                !children.length && children
            }
        </section>
        </>
        
    )
}

export default Layout