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
                        stateProp : "status",
                        class : "select-status",
                        type: "status",
                        
                      },
                      {
                        label : "Property type",
                        name: "Property Type",
                        placeholder : "Location",
                        stateProp : "propertyType",
                        class : "property-list-type",
                        type: "list",
                        value: "",
                      },
                      {
                        label : "Price",
                        name: "",
                        placeholder : "",
                        stateProp : "prices",
                        class : "price-options",
                        type: "price-options",
                        value: "",
                      },
                      {
                        label : "Bedrooms",
                        name: "",
                        placeholder : "",
                        stateProp : "bedRooms",
                        class : "bed-options",
                        type: "bed-options",
                        value: "",
                      },
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