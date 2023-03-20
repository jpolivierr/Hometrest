import "./style.css"
const NavList = (props) =>{

    const {Class} = props

    return(
        <ul className={Class}>
            <li>Home</li>
            <li>About</li>
            <li>Listings</li>
        </ul>
    )
}

export default NavList