import { useEffect, useState, useCallback, useRef, createContext } from "react"
import useReduxMng from "../../../hooks/useReduxMng";
import { deepSearch } from "../../../Util/getValueByKey";
import { parseAddress2 } from "../../../Util/parseAddress";
import topFilter from "./propertyFilter.view";
import getAddressValue from "../../../Util/getAddressValue";


export const TOPFILTER = "TOPFILTER"

const PropertyFilter = createContext()

export const ProperTyFilerProvider = (children) =>{

     const here = "here"

    return(
          <PropertyFilter.Provider value={{here}}>
           {children}
          </PropertyFilter.Provider>
    )

}

export default PropertyFilter