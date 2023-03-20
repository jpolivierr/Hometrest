  // Form Settings
  const [formSetting] = useState({

      config : {
                 url: "https://jsonplaceholder.typicode.com/posts",
                 method: "GET",
                 data : null,
                 buttonLabel: "Submit",
      },
      state: {
      
      },
      info : {
                title: "Quick Search",
                Class: "avalon text-left"
             },

      fields : [
                {
                  type : "options",
                  label : "Property",
                  placeHolder : "Search Properties",
                  name : "property",
                  fieldToUpdate : setLocation,
                  icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                  list : myList,
                  defaultValue : location,
                  onSubmitFunc: [emptyField],
                  // listPreventExit: true
                },
                {
                  type : "options",
                  label : "Search Type",
                  placeHolder : "Search Type",
                  name : "search-type",
                  fieldToUpdate : setLocation,
                  icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                  list : myList2,
                  onSubmitFunc: [emptyField],
                },
                {
                  type : "multi-select",
                  label : "Amenities",
                  placeHolder : "Amenities",
                  name : "amenities",
                  fieldToUpdate : setLocation,
                  icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                  list : myList3,
                  onSubmitFunc: [emptyField],
                },
                {
                  type : "list-option",
                  label : "toys",
                  placeHolder : "toys",
                  name : "toys",
                  fieldToUpdate : setLocation,
                  icon : <i className="fa-sharp fa-solid fa-caret-down"></i>,
                  list : myList3,
                  onSubmitFunc: [emptyField],
                },
                  {
                    type : "input",
                    label : "Location",
                    placeHolder : "Enter city or Zip",
                    name : "location",
                    // onChangefunc : numValidate,
                    fieldToUpdate : setLocation,
                    onSubmitFunc: [emptyField, numValidate],
                    required : true,
                    icon : <i className="fa-solid fa-location-dot"></i>
                  },
                  {
                    type : "input",
                    label : "Job",
                    placeHolder : "Enter city or Zip",
                    name : "job",
                    onSubmitFunc: [emptyField],
                    fieldToUpdate : setLocation,
                    defaultValue : theJob
                  }
               ]
  })


    const [myList] = useState({
              info: {
                        title: "Property Type",
                        Class: "listStyle",
              },
              lists: [
                      {
                        name: "list 1",
                        el: <p>List 1</p>,
                        handleClick: [listFunc],
                        href: [],
                        Class: "listClass"
                      },
                      {
                        name: "list 2",
                        el: <p>List 2</p>,
                        handleClick: listFunc,
                        href: [],
                        Class: "listClass"
                      },
                    ] 
  })

  const [myList2] = useState({
    info: {
              title: "Property Type",
              Class: "listStyle",
    },
    lists: [
            {
              name: "list 1",
              el: <span>List 1</span>,
              // handleClick: [formatInput],
              href: [],
              Class: "listClass"
            },
            {
              name: "list 2",
              el: <span>List 2</span>,
              // handleClick: [formatInput],
              href: [],
              Class: "listClass"
            },
            {
              name: "list 3",
              el: <span>List 3</span>,
              // handleClick: [formatInput],
              href: [],
              Class: "listClass"
            },
            {
              name: "list 4",
              el: <span>List 4</span>,
              // handleClick: [formatInput],
              href: [],
              Class: "listClass"
            },
          ] 
})


const [myList3] = useState({
  info: {
            title: "Property Type",
            Class: "listStyle",
  },
  lists: [
          {
            name: "list 1",
            el: <span>List 1</span>,
             handleClick: [formatInput],
            href: [],
            Class: "listClass"
          },
          {
            name: "list 2",
            el: <span>List 2</span>,
            handleClick: [formatInput],
            href: [],
            Class: "listClass"
          },
          {
            name: "list 3",
            el: <span>List 3</span>,
            handleClick: [formatInput],
            href: [],
            Class: "listClass"
          },
          {
            name: "list 4",
            el: <span>List 4</span>,
            handleClick: [formatInput],
            href: [],
            Class: "listClass"
          },
        ] 
})