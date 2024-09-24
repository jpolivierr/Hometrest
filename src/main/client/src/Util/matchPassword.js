export const matchPassword = (pwd1, pwd2) =>{

    if(!pwd2){
        return "Passwords do not match"
    }
    if(pwd1 !== pwd2){
        return "Passwords do not match"
    }else{
        return false
    }

}