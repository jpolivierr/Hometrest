import SearchForm from "../components/Forms/SearchForm"

const Listings = (props) =>{

    const {Class, id} = props

    return(
        <div id={id} className={Class}>
          <div className="container center-content padding-bottom-2x">
    
            <SearchForm />
            
          </div>
          
        </div>
        
    )
}

export default Listings