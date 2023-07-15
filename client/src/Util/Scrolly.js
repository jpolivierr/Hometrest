
 export const scrolly = (id) =>{

    const element = document.getElementById(`${id}`)

    if(!element) return

    const distance = element.getBoundingClientRect().top - 95

    window.scrollBy(
        {
            top: distance,
            left: 0,
            behavior: 'smooth'
        }
    )

}

export const scrollWithClass = (headerRef) =>{

    if(!headerRef) return

    const headerElement = headerRef.current
    const rect = headerElement.getBoundingClientRect()
    const distanceFromTop = rect.top + window.scrollY

    const scrollHandler = () =>{

        const distanceScrolled = window.scrollY || document.documentElement.scrollTop;

        if(distanceFromTop <= distanceScrolled && !headerElement.classList.contains("stick_top") ){
          headerElement.classList.add("stick_top")
        }
        
        if(distanceFromTop >= distanceScrolled && headerElement.classList.contains("stick_top") ){
          headerElement.classList.remove("stick_top")
        }

    }

    // window.addEventListener('scroll', scrollHandler)

    return {
        init : ()=> window.addEventListener('scroll', scrollHandler),
        clear : ()=> window.removeEventListener('scroll',scrollHandler)
    }



}

