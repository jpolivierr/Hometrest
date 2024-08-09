import { useEffect } from "react"

import {urlParcer} from "../Util/urlParcer"
import decor2 from "../assets/images/decor-2.jpg"
import couples from "../assets/images/couples.jpg"
import stylish from "../assets/images/stylish.jpg"
import wall from "../assets/images/wall.jpg"
import cart from "../assets/images/cart.jpg"
import womanMoving from "../assets/images/woman-moving.jpg"
import home3 from "../assets/images/home-3.jpg"
import mainHouse from "../assets/images/main-house.png"
import QuickSearch from "../components/quickSearch/QuickSearch.component"
import { Link } from "react-router-dom"


const Home = (props) =>{

    const { id} = props

    useEffect(()=>{
        urlParcer()
    },[])

    return(
      <main>
        <section id={id} className="hero">

          <div className="container-medium">
              <article className="padding-top-bottom-11x">
                <div>
                  <h1>Find your dream home</h1>
                  <p>
                    Our comprehensive platform allows you to search for properties in your desired location, 
                    using filters such as price, number of bedrooms, and square footage to find the perfect fit. 
                    You can also see recently sold homes and get a sense of the market.
                  </p>
                <QuickSearch />
                  
                </div>  
              </article>
          </div>
          <img src={mainHouse} alt="Main house" />
          
        </section>




        <section id={id} className="smart-search">

          <div className="container-medium">
              <article className="padding-top-bottom-8x padding-bottom-3x column-gap-5x display-flex">
                <div className="photo-grid w-60">
                  <figure style={{background: `url("${couples}") center center/cover`}}>
                     
                  </figure>
                  <figure style={{background: `url("${wall}") center center/cover`}}>
                     
                     </figure>
                     <figure style={{background: `url("${stylish}") center center/cover`}}>
                     
                     </figure>
               
                </div>
                
                <div className="content-area w-40">
                  <span className="s-header"><div></div>Smart Search</span>
                  <h2>The smart way to find your dream home</h2>
                  <p>
                  Search for properties in your desired location using a range of criteria. 
                  You'll be presented with a list of available homes.
                  </p>
                  <ul className="feature-list">
                    <li>
                    <i className="fa-solid fa-check"></i>
                       <h4>Your perfect rental</h4>
                       <p>
                        Whether you're looking for a cozy apartment, a spacious house, or a vacation rental, we've got you covered.
                        </p>
                    </li>
                    <li>
                    <i className="fa-solid fa-check"></i>
                       <h4>Get real-time market updates</h4>
                       <p>
                       Monitoring the market to ensure that our clients have the most current data at their fingertips
                        </p>
                    </li>
                    <li>
                    <i className="fa-solid fa-check"></i>
                       <h4>Sell for more than the home next door</h4>
                       <p>
                       We understand that selling a home is a big decision. That's why we go above and beyond to ensure that your home.
                        </p>
                    </li>
                  </ul>
                  <Link to="/listings">
                    <button className="main-btn">Find My Home</button>
                  </Link>
                </div>  
              </article>
          </div>

        </section>



        <section id={id} className="home-sale">

          <div className="container-medium">
              <article className="padding-top-bottom-8x padding-bottom-3x column-gap-5x display-flex">       
              
              <div className="content-area w-40">
              <span className="s-header"><div></div>Home for sale</span>
                  <h2>Homes For Sale in the United States</h2>
                  <p>
                  HomeTrest features homes for sale in all 50 states. HomeTrest's online search portal of property listings gives you the ability to refine your search criteria by different factors, including geographical location. If you're looking for homes for sale by owner, HomeTrest is a great resource.
                  </p>
                  <Link to="/listings">
                    <button className="main-btn">Find My Home</button>
                  </Link>
                </div> 
                <div className=" photo-column w-60">
                  <figure style={{background: `url("${home3}") center center/cover`}}>
                     
                  </figure>
                  <figure style={{background: `url("${decor2}") center center/cover`}}>
                     
                     </figure>
                     <figure style={{background: `url("${cart}") center center/cover`}}>
                     
                     </figure>
               
                </div>
                
          
              </article>
          </div>

        </section>


        <section id={id} className="your-home">

          <div className="container-medium">
              <article className="padding-top-bottom-8x column-gap-5x display-flex">    

                 <div className=" w-60">
                  <figure>
                     <img style={{maxWidth: "580px", borderRadius: "5px"}} src={womanMoving} alt="Woman moving"/>
                  </figure>          
                </div>
              
              <div className="content-area w-40">
              <span className="s-header"><div></div>Your Home</span>
                  <h2>Find what works for you and your family</h2>
                  <p>
                  HomeTrest features homes for sale in all 50 states. HomeTrest's online search portal of property listings gives you the ability to refine your search criteria by different factors, including geographical location. If you're looking for homes for sale by owner, HomeTrest is a great resource, whether you are a buyer or a seller.
                  </p>
                  <Link to="/listings">
                    <button className="main-btn">Find My Home</button>
                  </Link>
                  
                </div> 

              </article>
          </div>

        </section>

      </main>
        
        
    )
}

export default Home