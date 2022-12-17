import FlexLayout from "../Layouts/FlexLayout";
import Lists from "../Lists/Lists";
import Forms from "../Forms/Form";
import "./style_Filter.css"

//Actions
import { modalAction } from "../../_state/Actions/actionCollection";
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { URL, PATH_TYPE,MODAL_TYPE , COMPONENT } from "../../VAR/var";

function Filter(){

    const {openModal} = bindActionCreators(modalAction, useDispatch())

    const template = {
        fields : [
                    {
                      name: "location",
                      placeholder : "Location",
                      stateProp : "merchantName",
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

    return (
            <FlexLayout classname ={"container filter"}>    
               <li onClick={()=>openModal(MODAL_TYPE.SELECT, COMPONENT.RECURRING_CREATE_FORM)} className="more-filter">
               <i className="fa-solid fa-ellipsis-vertical"></i>
                    Filter
                </li>      
                <ul>
                    
                    <li>
                    <Forms title="" template = {template} actionType={COMPONENT.RECURRING_CREATE_FORM} />
                    </li>
                </ul>
                {/* <Lists classname = "" lists={filterList}/> */}
            </FlexLayout>
     );
}

export default Filter;