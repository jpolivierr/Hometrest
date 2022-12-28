export    const template = {
    fields : [
                {
                  name: "location",
                  placeholder : "Enter city or zip code",
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
                    placeholder : "Enter city or zip code",
                    stateProp : "location",
                    class : "search-input",
                    type: "location",
                    value: "",
                    handler: "input",
                    tag: <i className="fa-solid fa-location-dot"></i>
                    
                  },
                    {
                        stateProp : "searchType",
                        class : "search-type",
                        type: "search-type",
                        label: "Search Type",
                        name : "Search Type",
                        value : "",
                        tag: <i className="fa-sharp fa-solid fa-caret-down"></i>
                        
                      },
                      {
                        label : "Home type",
                        name: "Home Type",
                        stateProp : "homeType",
                        class : "home-type",
                        type: "home-type",
                        value: "",
                        tag: <i className="fa-sharp fa-solid fa-caret-down"></i>
                      },
                      {
                        label : "Price",
                        name: "",
                        placeholder : "",
                        stateProp : "prices",
                        class : "price-options",
                        type: "price-options",
                        value: "",
                        tag: <i className="fa-sharp fa-solid fa-caret-down"></i>
                      },
                      {
                        label : "Bedrooms",
                        name: "",
                        placeholder : "",
                        stateProp : "bedRooms",
                        class : "bed-options",
                        type: "bed-options",
                        value: "",
                        tag: <i className="fa-sharp fa-solid fa-caret-down"></i>
                      },
                      {
                        label : "Bathrooms",
                        name: "",
                        placeholder : "",
                        stateProp : "bathRooms",
                        class : "bed-options",
                        type: "bath-options",
                        value: "",
                        tag: <i className="fa-sharp fa-solid fa-caret-down"></i>
                      },

                      {
                        label : "Search",
                        type: "submit",
                        value: "",
                        handler: "submit",
                        tag: <i className="fa-solid fa-magnifying-glass"></i>,
                        class: "main-btn search-btn"
                        
                      },
                ]

}