export  const myFormFieds = (fields) => {

    let formFields = {}
    let formErrors = {
        errors: false
    }

    fields.forEach((field)=>{
    
       if(field.name){

          formFields[field.name] = !field.defaultValue ?"": field.defaultValue
          formErrors[field.name] = false
          
       }
 })

 return {fields: formFields, errors: formErrors}

}
