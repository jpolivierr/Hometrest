import mainHouse from "../../media/images/main_house.jpg"
import house4 from "../../media/images/the_house-min.jpg"
import house2 from "../../media/images/house2.jpg"
import house6 from "../../media/images/home6.jpg"
import interior2 from "../../media/images/interior2.jpg"
import interior3 from "../../media/images/interior3.jpg"
import interior1 from "../../media/images/interior1.jpg"
import family from "../../media/images/family.jpg"
import WebFilter from "../Filter/WebFilter"
import "./style_home.css"
import { useFetchRequest } from "../Request/useFetchRequest"
import { useState, useEffect, useRef } from "react"
import { useSelector } from 'react-redux'
import { URL } from "../../VAR/var"
import Carousel from "../Carousel/Carousel"
import { useLocation } from "react-router-dom"

import { filterAction } from "../../_state/Actions/actionCollection"
import { bindActionCreators } from "redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Loading from "../Loading/Loading"


const Home = () =>{

    const location = useLocation();
     const path = location.pathname
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[path])

    const topNavRef = useRef(null)
    // const menuRef = useRef(null)

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {

       if(topNavRef.current){
        const position = window.pageYOffset;
   
        if(position >= 76){
            topNavRef.current.classList.add("bk-alt")
            topNavRef.current.classList.add("border-bottom")

        }else{
            topNavRef.current.classList.add("bk-transparent")
            topNavRef.current.classList.remove("bk-alt")
            topNavRef.current.classList.remove("border-bottom")
            
        }
        setScrollPosition(position);
       }
            
        
        
    };


    useEffect(()=>{
        if(path === "/"){
        window.addEventListener('scroll', handleScroll);
        }else{
            console.log("removed...")
            window.removeEventListener("scroll",handleScroll)
        }
    },[path])

    // Reducers
    const filterState = useSelector(state => state.filterReducer)
    const requestStatus = useSelector(state => state.requestStatusReducer)

    //Request Hook
    const { sendRequest} = useFetchRequest()

    const listingData = requestStatus.data

    // 
    useEffect(()=>{
        const url = URL.GET_PROPERTIES
        sendRequest("POST",url, filterState)
    },[])


    return(
        <>
        <header ref={topNavRef}className="web-nav">
            <section className="web-container">
                <section>
                <Link to="/">
                    <h2>
                       
                        <i className="fa-brands fa-pagelines"></i> HomeTrest
                         
                    </h2>
                </Link>
                </section>
                <section>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/search"><li>Listings</li></Link>
                        <Link to="/search"><li>Buy</li></Link>
                    </ul>
                </section>
                <section>
                    <menu className="menu-color">
                        <div></div>
                        <div></div>
                        <div></div>
                     </menu>
                </section>
                
            </section>

        </header>
            <article style={{background: `url(${house4}) no-repeat center center/cover`}} className="main-section">

            <section className="web-container block hero">

                        <section>
                                    <h1>Find Your Dream Home</h1>
                                    <p>Our comprehensive platform allows you to search for properties in your desired location, using filters such as price, number of bedrooms, and square footage to find the perfect fit. You can also see recently sold homes and get a sense of the market trends in your area.</p>
                                    <div className="btn-container">
                                            <Link to="/search">
                                            <button className="main-btn">
                                                Find my home
                                            </button>
                                            </Link>
                                            
                                    </div>
                        </section>

                        <section>
                            <figure>   
                            
                             </figure>
                        </section>
                        
                  <WebFilter />
            </section>

        </article>


        <article className="property-list">
            <section className="web-container featured-property h2-styling">
                <section>
                    {/* <h2>
                        <span>Listings</span>
                           Featured Properties
                        </h2>
                        <p>investments, and sales. Especially manage your customers' property to keep in Finding the apartment, condo, or house you'll love to rent just got easie. Finding the apartment, condo, or h</p> */}
                </section>
                <section style={{position: "relative", width: "100%",minHeight: "300px", marginBottom: "0rem", maxWidth: "1600px"}} className="similar-listings single-page-container">
                { !listingData.home_search ? <Loading/>: <Carousel relatedHomes={listingData.home_search.results} />}
                </section>
                        

            </section>

        </article>

        <article id="smart-search">
            <section className="web-container smart-search article block h2-styling h2-left">
                <section className="smar-search-content">
                    <h2>
                        <span>Smart Search</span>
                        Smart way to find your dream home
                    </h2>

                    <p>
                    Search for properties in your desired location using a range of criteria. You'll be presented with a list of available homes that meet your needs, making it easy to find the perfect fit. 
                    </p>

                    <ul className="smart-search-list">
                        <li>
                            <figure>
                                 1
                            </figure>
                            <h3>Your perfect rental</h3>
                            <p>Whether you're looking for a cozy apartment, a spacious house, or a vacation rental, we've got you covered.</p>
                        </li>

                        <li>
                            <figure>
                                 2
                            </figure>
                            <h3>Get real-time market updates</h3>
                            <p>Monitoring the market to ensure that our clients have the most current data at their fingertips</p>
                        </li>

                        <li>
                            <figure>
                                 3
                            </figure>
                            <h3>Sell for more than the home next door</h3>
                            <p>We understand that selling a home is a big decision. That's why we go above and beyond to ensure that your home stands out in the market.</p>
                        </li>
                    </ul>

                    {/* <div className="btn-container">
                                    <Link to="/search">
                                            <button className="main-btn shadow-btn">
                                                Find my home
                                            </button>
                                            </Link>
                                    </div> */}


                </section>
                <section className="article-img">
                       <figure style={{background: `url(${house2}) no-repeat center center/cover`}}/>
                </section>
                        

            </section>

        </article>

        <article className="section-bk" style={{position: "relative"}}>
            <div className="bk-design">
                  <figure style={{background: `url(${family}) no-repeat center center/cover`}} />
                  <div></div>
            </div>
            <section className="web-container find-it article reverse block h2-styling ">

                <section className="article-img">

                </section>

                <section className="find-it-content fit-v2">
                    <div>
                        <h2>
                        <span>Your Home</span>
                        Find what works for you and your family
                    </h2>

                    <p>
                    When it comes to finding the right home for your family, it's all about making sure it's the perfect fit. And we're here to help you every step of the way.
                    </p>


                    <div className="btn-container">
                                          <Link to="/search">
                                            <button className="main-btn shadow-btn">
                                                Find my home
                                            </button>
                                            </Link> 
                                    </div>
                    </div>

                </section>
                
                        

            </section>

        </article>


        <article>
            <section className="web-container find-it article  block h2-styling h2-left">

                
            <section className="find-it-content">
                                <div>
                                    <h2>
                                    <span>Home for sale</span>
                                    Homes For Sale in the United States
                                </h2>

                                <p>
                                HomeTrest features homes for sale in all 50 states. HomeTrest's online search portal of property listings gives you the ability to refine your search criteria by different factors, including geographical location. If you're looking for homes for sale by owner, HomeTrest is a great resource, whether you are a buyer or a seller.
                                </p>

                                <div className="btn-container">
                                                    <Link to="/search">
                                                        <button className="main-btn shadow-btn">
                                                            Find my home
                                                        </button>
                                                        </Link> 
                                                </div>
                                </div>
                            </section>
                <section className="article-img">

                <figure style={{background: `url(${interior2}) no-repeat center center/cover`}}/> 

                <figure style={{background: `url(${interior1}) no-repeat center center/cover`}}/>

                <figure style={{background: `url(${interior3}) no-repeat center center/cover`}}/>

                </section>
            </section>

        </article>

        <footer>
            <article className="web-container article footer">
                    <ul>
                        <Link to="/">
                           <li>Home</li>
                        </Link>

                        <Link to="/search">
                            <li>Listings</li>
                        </Link>

                        <Link to="/search">
                           <li>Buy</li>
                        </Link>
                        
                        
                        
                    </ul>
            </article>
        </footer>
        </>
    )
}

export default Home