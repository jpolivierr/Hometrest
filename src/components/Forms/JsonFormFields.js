export    const template = {
    fields : [
                {
                  name: "location",
                  placeholder : "Location",
                  stateProp : "location",
                  class : "search-input",
                  type: "text",
                  value: "",
                  handler: "input",
                  tag: <i className="fa-solid fa-location-dot"></i>
                  
                },
                {
                  label: "Search",
                  type: "submit",
                  value: "",
                  handler: "submit",
                  tag: "",
                  class: "main-btn"
                  
                },
             ]
}

export const filterFields = {

                fields : [
                    {
                        name: "location",
                        placeholder : "Location",
                        stateProp : "location",
                        class : "search-input",
                        type: "text",
                        value: "",
                        handler: "input",
                        tag: <i className="fa-solid fa-location-dot"></i>
                        
                      },

                      {
                        label : "Submit",
                        type: "submit",
                        value: "",
                        handler: "submit",
                        tag: "",
                        class: "main-btn"
                        
                      },
                ]

}