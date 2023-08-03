import capitalizeFirstLetter from "./capitalizeFirstLetter"

const errorFromServer = (response) =>{
         

    if(response){

       if(response.status === 409){

          const responseBody = response.body

          if(responseBody){

            for(const key in responseBody){
   
                responseBody[key] = capitalizeFirstLetter(responseBody[key]).replace("_"," ")
   
             }

                return responseBody
          }
 

       }else if(response.status === 403){

        const responseBody = response.body

        if(responseBody){

          for(const key in responseBody){
 
              responseBody[key] = capitalizeFirstLetter(responseBody[key]).replace("_"," ")
 
           }

              return responseBody
        }


     }{

          return false
          
       }
    }
 }

 export default errorFromServer