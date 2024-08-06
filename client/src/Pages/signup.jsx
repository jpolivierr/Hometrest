import SignupForm from "../components/Form/signup/SignupForm"
import house from "../assets/images/house6.jpg"
import LoginTopNav from "../components/navBar/topNav.login"

const Signup = () =>{

   return(
    <>
        <section className="container-medium">
            <LoginTopNav />
            <SignupForm/>  
        </section>
        <section style={{background: `url(${house}) center center/cover`}}>
        </section>   
    </>
    )
}

export default Signup