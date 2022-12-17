
class Validator {
    constructor(){
        this.formFields = null
        this.errors = {}
    }

    next(fieldObj){
        switch(fieldObj.name){
            case "amount" :
                this.numValidation(fieldObj)
                break
            case "email" :
                this.emailValidation(fieldObj)
                break
            case "date" :
                this.dateValidation(fieldObj)
                break
        }
    }

    emptyInput(fieldObj){
        if(!fieldObj.value){
            this.errors[fieldObj.name] = `${this.format(fieldObj.name)} is empty`
            return false
        }else{
            this.next(fieldObj)
            return true
        }
    }

    numValidation(fieldObj){
        if(isNaN(fieldObj.value)){
            this.errors[fieldObj.name] = `${this.format(fieldObj.name)} is not a valid input`
            return false
        }else{
            return true
        }
       
    }

    emailValidation(fieldObj){
        console.log(fieldObj.name)
    }

    dateValidation(fieldObj){
        if(!fieldObj.value){
            this.errors[fieldObj.name] = `${this.format(fieldObj.name)} is not a valid date`
            return false
        }else{
            return true
        }
    }

    processChain(fieldObj){
      this.emptyInput(fieldObj)
    }

    format(value){
        return value.charAt(0).toUpperCase() + value.slice(1).replace("_"," ")
    }


    getFieldSets(){
        const fieldSets = this.formFields.querySelectorAll('fieldset')
        fieldSets.forEach(fieldset => {
            const fieldObj = {}
            fieldObj["type"] = fieldset.querySelector('input').type.trim()
            fieldObj["name"] = fieldset.querySelector('input').name.trim()
            fieldObj["value"] = fieldset.querySelector('input').value.trim()
            this.processChain(fieldObj)
        });
        
    }

    init(formClass){
        this.formFields = document.querySelector(formClass)
        this.getFieldSets()
        return this.errors
    }
}

export default Validator