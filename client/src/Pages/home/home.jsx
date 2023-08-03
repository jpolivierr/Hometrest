import { useEffect } from "react"

import {urlParcer} from "../../Util/urlParcer"
import "./home.style.css"
import home from "../../assets/images/house.jpg"
import decor from "../../assets/images/decor.jpg"
import shelf from "../../assets/images/shelf.jpg"
import tub from "../../assets/images/tub.jpg"
import couples from "../../assets/images/couples.jpg"
import stylish from "../../assets/images/stylish.jpg"
import wall from "../../assets/images/wall.jpg"
import womanMoving from "../../assets/images/woman-moving.jpg"
const Home = (props) =>{

    const {Class, id} = props

    useEffect(()=>{
        urlParcer()
    },[])

    return(
      <main>
        <section id={id} className="white-text" style={{background: `url("${home}") center center/cover`}}>

          <div className="container-medium">
              <article className="padding-top-bottom-12x">
                <div>
                  <h1>Find your dream home</h1>
                  <p>
                    Our comprehensive platform allows you to search for properties in your desired location, 
                    using filters such as price, number of bedrooms, and square footage to find the perfect fit. 
                    You can also see recently sold homes and get a sense of the market trends in your area.
                  </p>
                  <button className="main-btn">Find My Home</button>
                </div>  
              </article>
          </div>
          
        </section>




        <section id={id} className="">

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
                  Search for properties in your desired location using a range of criteria. You'll be presented with a list of available homes that meet your needs, making it easy to find the perfect fit. Lorem here it is.
                  </p>
                  <ul className="feature-list">
                    <li>
                    <i class="fa-solid fa-check"></i>
                       <h4>Your perfect rental</h4>
                       <p>
                        Whether you're looking for a cozy apartment, a spacious house, or a vacation rental, we've got you covered.
                        </p>
                    </li>
                    <li>
                    <i class="fa-solid fa-check"></i>
                       <h4>Get real-time market updates</h4>
                       <p>
                       Monitoring the market to ensure that our clients have the most current data at their fingertips
                        </p>
                    </li>
                    <li>
                    <i class="fa-solid fa-check"></i>
                       <h4>Sell for more than the home next door</h4>
                       <p>
                       We understand that selling a home is a big decision. That's why we go above and beyond to ensure that your home.
                        </p>
                    </li>
                  </ul>
                  {/* <button className="main-btn">Find My Home</button> */}
                </div>  
              </article>
          </div>

        </section>



        <section id={id} className="">

          <div className="container-medium">
              <article className="padding-top-bottom-8x padding-bottom-3x column-gap-5x display-flex">       
              
              <div className="content-area w-40">
              <span className="s-header"><div></div>Home for sale</span>
                  <h2>Homes For Sale in the United States</h2>
                  <p>
                  HomeTrest features homes for sale in all 50 states. HomeTrest's online search portal of property listings gives you the ability to refine your search criteria by different factors, including geographical location. If you're looking for homes for sale by owner, HomeTrest is a great resource, whether you are a buyer or a seller.
                  </p>
                  <button className="main-btn">Find My Home</button>
                </div> 
                <div className=" photo-column w-60">
                  <figure style={{background: `url("${tub}") center center/cover`}}>
                     
                  </figure>
                  <figure style={{background: `url("${decor}") center center/cover`}}>
                     
                     </figure>
                     <figure style={{background: `url("${shelf}") center center/cover`}}>
                     
                     </figure>
               
                </div>
                
          
              </article>
          </div>

        </section>




        <section id={id} className="">

          <div className="container-medium">
              <article className="padding-top-bottom-8x column-gap-5x display-flex">    

                 <div className=" w-60">
                  <figure>
                     <img style={{maxWidth: "650px", borderRadius: "5px"}} src={womanMoving} />
                  </figure>          
                </div>
              
              <div className="content-area w-40">
              <span className="s-header"><div></div>Your Home</span>
                  <h2>Find what works for you and your family</h2>
                  <p>
                  HomeTrest features homes for sale in all 50 states. HomeTrest's online search portal of property listings gives you the ability to refine your search criteria by different factors, including geographical location. If you're looking for homes for sale by owner, HomeTrest is a great resource, whether you are a buyer or a seller.
                  </p>
                  <button className="main-btn">Find My Home</button>
                </div> 



               
                
          
              </article>
          </div>

        </section>

      </main>
        
        
    )
}

export default Home