
export const shortenParagraph = (id, paragraph, maxCount) =>{


    let defaultHeight = paragraph.length >= 640 ? "120px" : "max-content"

    const style = {
        overflow: "hidden",
        height: defaultHeight,
    }

    const expand = (e) =>{

        const button = e.target
        const paragraph = document.querySelector(`#${id}`)
        const height = paragraph.style.height

        if(height === "max-content"){

            paragraph.style.height = defaultHeight

            button.innerHTML = `Show more <i class="fa-solid fa-angle-down"></i>`

        }else{

            paragraph.style.height = "max-content" 

            button.innerHTML = `Show less <i class="fa-solid fa-angle-up"></i>`

        }

    }

    return(
        <>
            <p id={id} onClick={()=>{console.log("here")}} style={style} className="">
                    {paragraph}
            </p>
            <div className="expand-btn" onClick={expand}>Show more <i className="fa-solid fa-angle-down"></i></div>
        </>
            )

}


export const expandElement = (id, elementArray) =>{


    let defaultHeight = elementArray.length >= 4 ? "560px" : "max-content"

    const style = {
        overflow: "hidden",
        height: defaultHeight,
    }

    const expand = (e) =>{

        const button = e.target
        const element = document.querySelector(`#${id}`)
        const height = element.style.height

        if(height === "max-content"){

            element.style.height = defaultHeight

            button.innerHTML = `Show more <i class="fa-solid fa-angle-down"></i>`

        }else{

            element.style.height = "max-content" 

            button.innerHTML = `Show less <i class="fa-solid fa-angle-up"></i>`

        }

    }

    return(
        <>
        <div>
        <h2>Property Details</h2>
            <div id={id} className="prop_details" style={style}>
              {
                elementArray.length > 0 &&
                elementArray.map((detail,index)=>(
                    <div key={index}>
                        <h3>{detail.category}</h3>
                        <p>{detail.text.join(", ")}</p>
                    </div>
                ))
            }
             </div>
             
            <div>
                <div className="expand-btn" onClick={expand}>Show more <i className="fa-solid fa-angle-down"></i></div>
            </div>
            
        </div> 
        </>
            )

}
