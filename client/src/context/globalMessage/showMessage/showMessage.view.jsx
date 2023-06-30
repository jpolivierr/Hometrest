

const ShowMessageView = ({value}) =>{

    const {
        modalBkRef, 
        visible, 
        toggle, 
        modalRef, 
        backgrounAnimation, 
        animation} = value

    return(
        <>
        <div ref={modalBkRef}  className={` ${backgrounAnimation} ${visible}`} onClick={toggle}/>
    <div ref={modalRef} className={` ${animation} ${visible}`}>
        <div style={{cursor : "pointer"}} className={`close-btn close_btn`} onClick={toggle}><span>+</span>
        </div>
        testing
            {/* <UserSettings /> */}
    </div>
    </>
    )

}

export default ShowMessageView