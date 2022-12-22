import "./style_listing.css"

const Listings = ({id, status, img, price, beds,baths, sqft, street, city, state, zip}) =>{
    return(
        <div key={id} id={id} className="slider-block">
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
                <p>{street}, {city}, <br></br>{state} {zip}</p>
            </div>
        </div>
    )
}

export default Listings