import LoginForm from "../components/Form/login/Login"
import house from "../assets/images/house6.jpg"
import LoginTopNav from "../components/navBar/topNav.login"

const Login = () =>{

   return(
    <>
        <section className="container-medium">
            <LoginTopNav />
             
            <LoginForm/>  
        </section>
        <section style={{background: `url(${house}) center center/cover`}}>
        </section>   
    </>
    )
}

export default Login