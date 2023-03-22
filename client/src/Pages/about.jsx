import TopNav from "../components/Navigaion/topNav"

const About = (props) =>{

    const {Class, id} = props
    return(
        <div id={id} className={Class}>
          <TopNav />
          <div className="container">
            <h1>About</h1>
          </div>
        </div>
    )
}

export default About