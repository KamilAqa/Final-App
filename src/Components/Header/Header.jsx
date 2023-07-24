import { useState } from "react";
import "./Header.css"
import "./headerrespon.css"

// Route
import { Link } from "react-router-dom";
import SignModal from "../SignModal/SignModal";


const Header = () => {
    const [iSopen, SetIsOpen] = useState(false);

    if (iSopen) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
    return (
        <div className="header-respon">
            <header>
                <Link className="header-logo" to="/"><h1>King Academy</h1></Link>
                <ul className="menu">
                    <li><Link to="/about">Haqqımızda</Link></li>
                    <li><Link to="/education">Tədris proqramları</Link></li>
                    {/* <li><Link to="/">Careers</Link></li> */}
                    <li><Link to="/contact">Əlaqə</Link></li>
                    <li><div className="open-modal">
                        <button onClick={() => SetIsOpen(true)}>Login/SignUp</button>
                        <SignModal open={iSopen} onClose={() => SetIsOpen(false)} />

                    </div></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;