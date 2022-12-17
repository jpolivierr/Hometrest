import FlexLayout from "../Layouts/FlexLayout";
import Lists from "../Lists/Lists";
import Forms from "../Forms/Form";
import "./style_Filter.css"

//form Fields
import { template } from "../Forms/JsonFormFields";

//Actions
import { modalAction } from "../../_state/Actions/actionCollection";
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { URL, PATH_TYPE,MODAL_TYPE , COMPONENT } from "../../VAR/var";

function Filter(){

    const {openModal} = bindActionCreators(modalAction, useDispatch())


    return (
            <FlexLayout classname ={"container filter"}>    
               <li onClick={()=>openModal(MODAL_TYPE.SELECT, COMPONENT.FILTER_FORM)} className="more-filter">
               <i className="fa-solid fa-ellipsis-vertical"></i>
                    Filter
                </li>      
                <ul>
                    
                    <li>
                    <Forms 
                            classname="flex-form"
                            title="" 
                            template = {template} 
                            url={URL.GET_PROPERTIES}
                            method="POST"
                            />
                    </li>
                </ul>
                {/* <Lists classname = "" lists={filterList}/> */}
            </FlexLayout>
     );
}

export default Filter;