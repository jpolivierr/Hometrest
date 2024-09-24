import ScrollTop from "../components/ScrollTop/ScrollTop";
import Footer from "../footer/footer";
import TopNav from "../components/navBar/topNav";

const ListingLayout = ({ children }) => {

    return (
    <>
    <ScrollTop />
        <TopNav />
        <div className="main-window">
            {children}
        </div> 
    {/* <Footer container="container" /> */}
    </>
    );
  };
  
  export default ListingLayout;