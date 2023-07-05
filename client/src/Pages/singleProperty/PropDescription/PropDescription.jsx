import React from 'react'
import { formatNumber } from '../../../Util/formatNumber'
import { cleanInput } from '../../../Util/cleanInput'
import { shortenParagraph } from '../../../Util/shortenParagraph'
import { expandElement } from '../../../Util/shortenParagraph'
import { deepSearch } from '../../../Util/getValueByKey'
import map from "../../../assets/images/map.jpg"
import "./PropDescription.style.css"

export default function PropDescription({singleProperty}) {

    const description = deepSearch(singleProperty,["description", "text"], "")
    const baths = deepSearch(singleProperty,["description", "baths"], "")
    const beds = deepSearch(singleProperty,["description", "beds"], "")
    const sqft = deepSearch(singleProperty,["description", "sqft"], "")
    const yearBuilt = deepSearch(singleProperty,["description", "year_built"], "")
    const details = deepSearch(singleProperty,["details"], [])
    const status = deepSearch(singleProperty,["status"],"")
    const monthlyEstimate = deepSearch(singleProperty,["mortgage","estimate","monthly_payment"],"")
    const price = deepSearch(singleProperty,["list_price"], "")
    const address = deepSearch(singleProperty,["location","address","line"],"")
    const state = deepSearch(singleProperty,["location","address","state_code"],"")
    const zip = deepSearch(singleProperty,["location","address","postal_code"],"")

 
  return (
    <div className="prop_info">
                        <div className="prop_info_header">
                            <figure className="mini-map">
                               <img src={map}/>
                            </figure>
                            <div className="prop_header_details">
                                <p>Status - {cleanInput(status)}</p>
                            <h2>{`${address}, ${state}, ${zip}`}</h2>
                                <h3>{`$${formatNumber(price)}`} <span>Est. ${formatNumber(monthlyEstimate)}/month</span></h3>
                                
                                <ul className="prop_info_list">
                                <li>
                                    <h4>Beds <span>{`${beds}`}</span></h4>

                                </li>
                                <li>
                                    <h4>Baths <span>{`${baths}`}</span></h4>        
                                </li>
                                <li>
                                    <h4>Sqft <span>{`${formatNumber(sqft)}`}</span></h4>
                                </li>

                                <li>
                                    <h4>Year built <span>{`${yearBuilt}`}</span></h4>                           
                                </li>
                              
                            </ul>
                            </div>


                        </div>
                        <div className="prop_description">
                            <h2>Description</h2>
                            
                                {shortenParagraph("description", description) }
                            
                        </div>
                        
                            {expandElement("details",details)}
                    
                    </div>
  )
}
