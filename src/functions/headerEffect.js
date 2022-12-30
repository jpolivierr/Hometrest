export const HeaderEffect = (headerClass) =>{
    console.log("ran top nav")
    let header =  headerClass
    let menu = header.querySelector('menu')

    window.addEventListener("scroll",()=>{
            console.log(document.body.scrollTop)
    if (document.body.scrollTop >= 76 || document.documentElement.scrollTop >= 76) {
        menu.classList.add("menu-color")
        header.classList.add("bk-alt");
        header.classList.add("border-bottom");
        header.classList.add("main-shadow");
        header.classList.remove("bk-transparent");
    } else {
        
        header.classList.add("bk-transparent");
        header.classList.remove("border-bottom");
        header.classList.remove("bk-alt");
        menu.classList.remove("menu-color");
        header.classList.remove("main-shadow");
    }
    })

 
   
     
    

}