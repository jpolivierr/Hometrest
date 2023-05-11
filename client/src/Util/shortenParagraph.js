
const ShortenParagraph = (id, paragraph, maxCount) =>{

    console.log(paragraph.length)

    let defaultHeight = "100px"

    const style = {
        overflow: "hidden",
        height: defaultHeight,
    }

    const expStyle = {
                cursor: "pointer",
                marginTop: "1rem",
                fontWeight: 600,
                background: "var(--light-color)",
                width: "max-content",
                padding: ".5rem 1rem",
                borderRadius: "100px",
                fontSize: ".9rem",
                display: "flex",
                justfyContent: "center",
                alignItems: "center",
                gap: ".7rem"
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
            <div style={expStyle} onClick={expand}>Show more <i class="fa-solid fa-angle-down"></i></div>
        </>
            )

}

export default ShortenParagraph