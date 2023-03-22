import TopNav from "../components/Navigaion/topNav"

const Login = (props) =>{

    const {Class, id} = props
    return(
        <div id={id} className={Class}>
            <TopNav />
            <div className="container">
                <h1>Login</h1>
          </div>
        </div>
    )
}

export default Login