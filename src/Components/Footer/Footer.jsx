import "./Footer.css";
import "./footerrespon.css"


// Link
import { Link } from "react-router-dom";

// Icon
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-box">

                <div className="footer-logo">
                    <Link className="logo" to="/"><h1>KG</h1></Link>

                    {/* <img className="logo" src="https://efcgroup.com/assets/images/logo.svg" alt="" /> */}
                </div>
                <div className="footer-address">
                    <div className="address">
                        <h4>Address</h4>
                        <p>Abşeron ray. Xırdalan şəhəri</p>
                    </div>
                    <div className="contact">
                        <h4>Contact</h4>
                        <Link className="phone" to="tel:994558381999">+994558381999</Link>
                        <p>kgeducation@mail.ru</p>
                    </div>
                </div>
                <div className="explore">
                    <h4>Akademiya</h4>
                    <ul>
                        <li><Link to="/about">Haqqımızda</Link></li>
                        <li><Link to="/education">Tədris proqramları</Link></li>
                        <li><Link to="/contact">Əlaqə</Link></li>
                    </ul>
                </div>
                <div className="subscribe">
                    <h2>Subscribe to our newsletter</h2>
                    <input type="email" id="email" name="email" placeholder="E-mail" />
                    <button>Subscribe</button>
                    <p>You may unsubscribe from our monthly newsletter at any time.</p>
                </div>
            </div>
            <div className="footer-end">
                <p>© 2023 King Academy. Bütün hüquqlar qorunur</p>
                <Link to=""><FaLinkedinIn color="white" /></Link>

            </div>
        </footer>
    )
}

export default Footer;