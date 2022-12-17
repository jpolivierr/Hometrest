import "./style_Form.css"
import { useState } from "react"
import Validator from "../../functions/Validator"
import { useFetchRequest } from "../Request/useFetchRequest"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import useDropDown from "../DropDown/useDropDown.js"

// Actions
import { modalAction } from "../../_state/Actions/actionCollection"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { URL, PATH_TYPE, COMPONENT } from "../../VAR/var"

const Forms = ({title, template, actionType}) =>{

    const {fields} = template
    const {dropDown} = useDropDown()
    const requestState = useSelector(state => state.requestStatusReducer)

    const {openModal} = bindActionCreators(modalAction, useDispatch())
    const navigate = useNavigate()

    const validator = new Validator()

     const [errors, setErrors] = useState({})

     const { sendRequest} = useFetchRequest()


    // Generate a dynamic state
    const generateState = () =>{
            const formSate = {}
            fields.forEach( field => {
                if(field.type !== "submit"){
                    formSate[field.stateProp] = field.value
                }
                
            })
            return formSate
        }
    const [ formInputs, setFormInputs] = useState(generateState())

    const [selectState, setSelectState] = useState({
        category: false,
        frequency: false,
        date: false
    })

    const toggleSelectState = (element) =>{
        setSelectState({...selectState, [element]: !selectState[element]})
    }
    

    const handleInput = (e,stateProp) =>{
        setFormInputs({...formInputs, [stateProp] : e.target.value})
    }

    const handleDropwDown = (name, stateProp) =>{
        setFormInputs({...formInputs, [stateProp] : name})
    }
       // ********************************************************************
    // Submit actions
    // ********************************************************************
    
    const submitCreateRecurring = async (e) =>{
        e.preventDefault()
        const errorResult = validator.init(".the-recurring-form")
        if(Object.keys(errorResult).length !== 0){
             setErrors(errorResult)
        }else{
            setErrors(errorResult)
            const url = URL.CREATE_RECURRING
            let dataCopy = JSON.parse(JSON.stringify(formInputs))
            dataCopy["clientDate"] = new Date().toLocaleDateString('sv')

            //message to show if created successfully
            const message = {
                header: "Success",
                text : "Created successfully"
            }

            await sendRequest(PATH_TYPE.RECURRING,"POST",url, dataCopy, message )

            if(requestState.status === 600){
                openModal(null)
                // reset()
                navigate('/recurring')
            }
            if(requestState.status === 200){
                 openModal(null)
                //  reset()
                 navigate('/recurring')
            } 
           
        }

    }

    const getSubmitButton = (e, actionType) =>{
        switch(actionType){
            case COMPONENT.RECURRING_CREATE_FORM :
                  submitCreateRecurring(e)
                  break
            default :
                return null
        }
    }

    // ********************************************************************
    // set field type
    // ********************************************************************
   const fieldSet = (props, id) =>{
    console.log(props)

    switch(props.type){
        case "text" :
                return  ( <fieldset key={id} className={props.class}>
                              {props.label && props.type !=="submit" && <label>{props.label}</label>}
                              <input type={props.type} 
                                name={props.name}
                                value={formInputs[props.stateProp]}
                                onChange={(e)=> handleInput(e, props.stateProp)}
                                placeholder={props.placeholder}
                                />
                                {props.tag && props.tag}
                         </fieldset>)
                         
        case "select" :
                return <fieldset key={id} className={`select-field dr-style ${props.class}`}>
                            {props.label && props.type !=="submit" && <label>{props.label}</label>}
                            <input type={props.type} 
                                name={props.name}
                                value={formInputs[props.stateProp]}
                                readOnly={true}
                                onChange={handleDropwDown}
                                onClick={()=> toggleSelectState(props.name)}
                                />
                                {selectState[props.name] && dropDown(handleDropwDown,props.stateProp,props.name,toggleSelectState)}
                                <i className="fa-solid fa-chevron-down"></i>
                       </fieldset>
        case "submit" :
        return <button key={id} onClick={(e)=> getSubmitButton(e,actionType)} 
                       className={props.class}>
                        {props.label}
                        {props.tag && props.tag}
                </button>
                          
        default :
            return null        
    }
   }

   // ********************************************************************
    // Render form
    // ********************************************************************

    return(
        <form className="">
            <h2>{title}</h2>

                {fields.map((field, index)=>(

                        fieldSet( field, index)
                    
               ))}

        </form>
    )
}

export default Forms