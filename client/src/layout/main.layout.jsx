import TopNav from "../components/navBar/topNav";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import Footer from "../footer/footer.component";
import { useUserContext } from "../context/user/UserContext";

const MainLayout = ({ children }) => {

    const {getUser} = useUserContext();
    console.log(getUser())

    return (
    <>
    <ScrollTop />
        <TopNav  
            elementStyle={"top-nav-stick"}
            container="container"
        />
            {children}
    <Footer container="container" />
    </>
    );
  };
  
  export default MainLayout;