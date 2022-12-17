import "./style_topNav.css"
import FlexLayout from "../Layouts/FlexLayout";
import Lists from "../Lists/Lists";
import { navList } from "../Lists/listData";

const TopNav = () =>{

    return(
        <header className="top_nav">
            <FlexLayout classname={"container flex_nav"} >
                <figure className="Logo"><h2>Hometrest</h2></figure>
                <Lists classname={"flex_list"} lists={navList}/>
                <i className="fa-solid fa-bars"></i>
           </FlexLayout>
        </header>
        
    )

}

export default TopNav