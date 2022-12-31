import house4 from "../../media/images/house4.jpg"
import house1 from "../../media/images/house_1.jpg"
import house2 from "../../media/images/house2.jpg"
import interior2 from "../../media/images/interior2.jpg"
import interior3 from "../../media/images/interior3.jpg"
import interior1 from "../../media/images/interior1.jpg"
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


const Home = () =>{

    const location = useLocation();
     const path = location.pathname
     console.log(path)
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

    // console.log(scrollPosition)

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

    const {setLimit} = bindActionCreators(filterAction, useDispatch())

    // 
    useEffect(()=>{
        setLimit(2)
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
            <article style={{background: `url(${house4}) no-repeat center center/cover`}} className="">

            <section className="web-container block hero">

                        <section>
                                    <h1>Find Your Dream Home</h1>
                                    <p>We are a nonprofit organization dedicated to provide not only an educational pathways for the youth in Haiti but also to enrich their lives and communities through training and education beyond school.</p>
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


        <article>
            <section className="web-container featured-property h2-styling">
                <section>
                    <h2>
                        <span>Listings</span>
                           Featured Properties
                        </h2>
                </section>

                <section style={{position: "relative", width: "100%", marginBottom: "0rem", maxWidth: "1600px"}} className="similar-listings single-page-container">
                { !listingData.home_search ? null : <Carousel relatedHomes={listingData.home_search.results} />}
                </section>
                        

            </section>

        </article>

        <article>
            <section className="web-container smart-search article block h2-styling h2-left">
                <section className="smar-search-content">
                    <h2>
                        <span>Smart Search</span>
                        Smart way to find your dream home
                    </h2>

                    <p>
                    The CRM system tracks the level of service to each customer for their needs, similarly in real estate. For instance, tracking your customers is essential for any business to have long-term success. With our CRM, you will be able to take customer's information and also follow up with them through email, phone.
                    </p>

                    <div className="btn-container">
                                    <Link to="/search">
                                            <button className="main-btn shadow-btn">
                                                Find my home
                                            </button>
                                            </Link>
                                    </div>


                </section>
                <section className="article-img">
                       <figure style={{background: `url(${house1}) no-repeat center center/cover`}}/> 
                       <figure style={{background: `url(${house2}) no-repeat center center/cover`}}/>
                </section>
                        

            </section>

        </article>


        <article>
            <section className="web-container find-it article reverse block h2-styling h2-left">

                <section className="article-img">

                <figure style={{background: `url(${interior2}) no-repeat center center/cover`}}/> 

                <figure style={{background: `url(${interior1}) no-repeat center center/cover`}}/>

                <figure style={{background: `url(${interior3}) no-repeat center center/cover`}}/>

                </section>

                <section className="find-it-content">
                    <div>
                        <h2>
                        <span>Find what</span>
                        Find what works for you 
                    </h2>

                    <p>
                    Manage all the aspects of your business from leasing, investments, and sales. Especially manage your customers' property to keep in order the maintenance of the property and its winnings.
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