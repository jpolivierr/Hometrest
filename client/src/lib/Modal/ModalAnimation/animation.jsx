
const ModalAnimation = (props) =>{

    const {type, seconds, from, to} = props


    const fade = `
                .fadeIn{
                    animation: fadeIn ${seconds}  forwards;
                }
                
                @keyframes fadeIn {
                    from{
                        opacity: 0;
                    }to{
                        opacity: 1;
                    }
                }
                
                .fadeOut{
                    animation: fadeOut ${seconds} forwards;
                }
                
                @keyframes fadeOut {
                    from{
                        opacity: 1;
                    }to{
                        opacity: 0;
                    }
                }
    `



    const renderStyle = () =>{

        switch(type){
            case "fade" :
                return fade

            default :
                return null
        }

    }

    return(
        <style>
            {renderStyle()}
        </style>
    )
}

export default ModalAnimation