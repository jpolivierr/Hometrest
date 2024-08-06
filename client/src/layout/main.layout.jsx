import ScrollTop from "../components/ScrollTop/ScrollTop";
import Footer from "../footer/footer.component";
import { useUserContext } from "../context/user/UserContext";
import TopNav from "../components/navBar/topNav";

const MainLayout = ({ children }) => {

    const {getUser} = useUserContext();

    return (
    <>
    <ScrollTop />
        <TopNav />
        <div>
            {children}
        </div> 
    <Footer container="container" />
    </>
    );
  };
  
  export default MainLayout;