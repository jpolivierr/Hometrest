
const FormX = () => {

    const Form = ({children}) => {
        return(
            <div>
               <h2>This is a form</h2>
               {children}
            </div>
        )
    }

    return {
        Form
    }
}

export default FormX