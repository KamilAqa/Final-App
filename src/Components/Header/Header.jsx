import { useState } from "react";
import "./Header.css"
import "./headerrespon.css"
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
                <Link className="header-logo" to="/"><h1>KG</h1></Link>
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
                <DropdownButton id="dropdown-basic-button" title="Menu">
                    <Dropdown.Item to="/about"><Link to="/about">Haqqımızda</Link></Dropdown.Item>
                    <Dropdown.Item to="/education"><Link to="/education">Tədris proqramları</Link></Dropdown.Item>
                    <Dropdown.Item to="/contact"><Link to="/contact">Əlaqə</Link></Dropdown.Item>
                    <Dropdown.Item to="#/action-4"><div className="open-modal">
                        <button onClick={() => SetIsOpen(true)}>Login/SignUp</button>
                        <SignModal open={iSopen} onClose={() => SetIsOpen(false)} />

                    </div></Dropdown.Item>
                </DropdownButton>
            </header>

        </div>
    )
}

export default Header;