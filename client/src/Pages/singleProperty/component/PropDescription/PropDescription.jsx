import React from 'react'
import { formatNumber } from '../../../../Util/formatNumber'
import { cleanInput } from '../../../../Util/cleanInput'
import { deepSearch } from '../../../../Util/getValueByKey'
import map from "../../../../assets/images/map.jpg"
import { getStatusColor } from '../../SingleProperty.Util'
import ExpandElement from '../../../../components/expandElement/ExpandElement'
import { capitalizeFirstLetter } from '../../../../Util/capitalizeFirstLetter'
import { getGrade } from './PropDescription.script'

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
    const schools = deepSearch(singleProperty,["schools", "schools"],[])
    const propertyHistory = deepSearch(singleProperty,["property_history"],[])
    const taxHistory = deepSearch(singleProperty,["tax_history"],[])

 
  return (
    <div className="prop_info">

                        <div className="prop_info_header">
                         
                        <div id={0} className="prop_header_details">
                            <span className={`prop_status`}>
                                <div className={`prop_status_marker ${getStatusColor(status)}`}></div>
                                {cleanInput(status)}
                            </span>
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
                            <div className="mini-map">
                                <figure>
                                    <img src={map}/>
                                </figure>
                               
                               <div className='commute'>
                                    <i className="fa-solid fa-car"></i>
                                        {/* <h3>Commute Time: </h3> */}
                                        <p>Add a commute</p>
                               </div>
                            </div>


                        </div>



                     {
                        description && 

                        <div className="prop_description">
                            <h2>Description</h2>
                            
                                {/* {shortenParagraph("description", description) } */}
                                <ExpandElement offSet={3} paragraph={true}>
                                    <p>
                                        {description} 
                                    </p>
                                </ExpandElement>
                            
                        </div>

                     }
                       



                      {
                        details.length > 0 &&

                          <div id={1}>
                               <h2>Property Details</h2>
                               <ExpandElement offSet={3}>
                                    <div className="prop_details">
                                    {
                                        details.map((detail,index)=>(
                                            <div key={index}>
                                                <h3>{detail.category}</h3>
                                                <p>{detail.text.join(", ")}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                               </ExpandElement>

                        </div>
                      }

                      



                        {
                           
                           schools.length > 0 && 

                           <div id={2}>
                            <h2>Nearby Schools</h2>
                        
                                 <div className='school_options_container'>
                                     
                                    <table className='school_option'>
                                        <thead>
                                            <tr>
                                                <th>Rating</th>
                                                <th>Name</th>
                                                <th>Students</th>
                                                <th>Grades</th>
                                                <th>Type</th>
                                                <th>Distance</th>
                                            </tr>
                                            
                                        </thead>
                                        <tbody>
                                               { schools.map((school, index)=>(
                                         <tr key={index}>
                                            <td><b>{school.rating}</b>/10</td>
                                            <td>{school.name}</td>
                                            <td>{formatNumber(school.student_count)}</td>
                                            <td>{getGrade(school.grades)}</td>
                                            <td>{capitalizeFirstLetter(school.funding_type)}</td>
                                            <td>{school.distance_in_miles} mi</td>
                                        </tr> 
                                         )) }
                                        </tbody>
                                     
                                    </table>
                              
                            </div>
                        </div>

                        }

                        

                       {
                        propertyHistory.length > 0 &&

                        <div id={3}>

                            <h2>Property History</h2>
                            <ExpandElement offSet={3}>
                                   <div className='property_history_container'>
                                {
                                    propertyHistory.map((history, index)=>(
                                        <div key={index} className='property_history'>
                                            <h3>{history.date}</h3>
                                            <ul>
                                                <li>
                                                    <h4>Event</h4>
                                                    <p>{history.event_name}</p>
                                                </li>
                                                <li>
                                                    <h4>Price</h4>
                                                    <p>${formatNumber(history.price)}</p>
                                                </li>
                                                <li>
                                                    <h4>Source name</h4>
                                                    <p>{history.source_name}</p>
                                                </li>
                                            </ul>

                                         </div>
                                    ))
                                }

                            </div>
                            </ExpandElement>
                         

                        </div>

                       }

{
                        taxHistory.length > 0 &&

                        <div id={4}>

                            <h2>Tax History</h2>
  
                            <div className='property_history_container'>
                            

                                 <div className='school_options_container'>
                                <ExpandElement offSet={1} setHeight={240}>
                                     <table className='school_option'>
                                         <thead>
                                             <tr>
                                                 <th>Year</th>
                                                 <th>Price</th>
                                                 <th>Building</th>
                                                 <th>Land</th>
                                                 <th>Total</th>
                                             </tr>
                                             
                                         </thead>
                                         <tbody>
                                                { taxHistory.map((tax, index)=>(
                                          <tr key={index}>
                                             <td><b>{tax.year}</b></td>
                                             <td>${tax.tax}</td>
                                             <td>{tax.assessment.building && "$" + formatNumber(tax.assessment.building) }</td>
                                             <td>{tax.assessment.land && "$" + formatNumber(tax.assessment.land) }</td>
                                             <td>{tax.assessment.total && "$" + formatNumber(tax.assessment.total) }</td>
                                               
                                         </tr> 
                                          )) }
                                         </tbody>
                                      
                                     </table>
                               </ExpandElement>
                             </div>
                            
                           

                            </div>
                         

                        </div>

                       }
                        
                    
                    </div>
  )
}
