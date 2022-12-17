class ClickEffect {
    constructor(){
        this.clickEffect = document.querySelectorAll('.click-effect')
    }

    init(){
        this.clickEffect.forEach(btn => {
            btn.addEventListener('click',(e)=>{
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples = document.createElement('span')
            ripples.style.left = 60 + '%'
            ripples.style.top = 50 + '%'
            btn.appendChild(ripples)

            setTimeout(()=>{
                ripples.remove()
            },500)       
        })
        })
        
    }
}

export {ClickEffect}