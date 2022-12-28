import "./style_listing.css"
import { Link } from "react-router-dom";

const Listings = ({callBack, id, classname, style, status, img, price, beds,baths, sqft, street, city, state, zip}) =>{
    return(
      
        <div
       
            onClick={!callBack ? null : ()=>callBack(id)}
           key={id} id={id} 
           className={`${classname} slider-block`}
            style={style}
           >
  <Link to={`/property?id=${id}`}>
            <figure>
                <span>{status}</span>
                <img src={img} alt=""/>
            </figure>
            <div className="av-property-details">
                <h4>${price}</h4>
                <i className="fa-regular fa-heart"></i>
                <h5><span>{beds}</span> <span>Beds</span></h5>
                <h5><span>{baths}</span> <span>Baths</span></h5>
                <h5><span>{sqft}</span> <span>Sq.Ft.</span></h5>
                <p>{street}, {city},{state} {zip}</p>
            </div>
            </Link>
        </div>
        
        
    )
}

export default Listings