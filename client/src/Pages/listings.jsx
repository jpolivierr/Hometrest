import TopNav from "../components/Navigaion/topNav"

const Listings = (props) =>{

    const {Class, id} = props

    return(
        <div id={id} className={Class}>
          <TopNav />
          <div className="container">
            <h1>Listings</h1>
          </div>
          
        </div>
        
    )
}

export default Listings