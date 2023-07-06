import React from 'react'
import { formatNumber } from '../../../Util/formatNumber'
import { cleanInput } from '../../../Util/cleanInput'
import { shortenParagraph } from '../../../Util/shortenParagraph'
import { expandElement } from '../../../Util/shortenParagraph'
import { deepSearch } from '../../../Util/getValueByKey'
import map from "../../../assets/images/map.jpg"
import { getStatusStyle, getTypeStyle } from '../../../components/propertyCard/util'

import "./PropDescription.style.css"

export default function PropDescription({singleProperty}) {

    const description = deepSearch(singleProperty,["description", "text"], "")
    const baths = deepSearch(singleProperty,["description", "baths"], "")
    const beds = deepSearch(singleProperty,["description", "beds"], "")
    const sqft = deepSearch(singleProperty,["description", "sqft"], "")
    const yearBuilt = deepSearch(singleProperty,["description", "year_built"], "")
    const details = deepSearch(singleProperty,["details"], [])
    const status = deepSearch(singleProperty,["status"],"")
    const type = deepSearch(singleProperty,["description","type"])
    const monthlyEstimate = deepSearch(singleProperty,["mortgage","estimate","monthly_payment"],"")
    const price = deepSearch(singleProperty,["list_price"], "")
    const address = deepSearch(singleProperty,["location","address","line"],"")
    const state = deepSearch(singleProperty,["location","address","state_code"],"")
    const zip = deepSearch(singleProperty,["location","address","postal_code"],"")

 
  return (
    <div className="prop_info">
                        <div className="prop_info_header">
                         
                            <div className="prop_header_details">
                            <span className='prop_status'>{cleanInput(status)}</span>
                            <h2>{`${address}, ${state}, ${zip}`}</h2>
                                <h3>{`$${formatNumber(price)}`} <span>Est. ${formatNumber(monthlyEstimate)}/month</span></h3>
                                
                                <ul className="prop_info_list">
                                <li>
                                <i className="fa-solid fa-bed"></i> 
                                    <h4><span>{`${beds}`}</span> Beds </h4>
                                </li>
                                <li>
                                <i className="fa-solid fa-bath"></i>
                                    <h4><span>{`${baths}`}</span> Baths </h4>        
                                </li>
                                <li>
                                <i className="fa-brands fa-unity"></i>
                                    <h4><span>{`${formatNumber(sqft)}`}</span> Sqft </h4>
                                </li>

                                {/* <li>
                                    <h4><span>{`${yearBuilt}`}</span> Year built </h4>                           
                                </li> */}
                              
                            </ul>
                            <div className='button_container'>
                                <button className='button main-btn offer_button'>Make an Offer</button>
                                <button className='button secondary-btn offer_button'>
                                        Share this home
                                </button>
                            </div>
                            
                            </div>
                            <figure className="mini-map">
                               <img src={map}/>
                            </figure>


                        </div>
                        <div className="prop_description">
                            <h2>Description</h2>
                            
                                {shortenParagraph("description", description) }
                            
                        </div>
                        
                            {expandElement("details",details)}
                    
                    </div>
  )
}
