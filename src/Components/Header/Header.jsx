import "./Header.css"

// Route
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <header className="container">
                <Link to="/"><img className="logo" src="https://efcgroup.com/assets/images/logo.svg" alt="" /></Link>
                <ul className="menu">
                    <li><Link to="/about">Haqqımızda</Link></li>
                    <li><Link to="/education">Tədris proqramları</Link></li>
                    {/* <li><Link to="/">Careers</Link></li> */}
                    <li><Link to="/contact">Əlaqə</Link></li>
                </ul>
            </header> 
        </>
    )
}

export default Header;