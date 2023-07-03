import "./Aboutpage.css"

// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import design from "../../image/pngwing.com.png";

// Router
// import { Link } from "react-router-dom";

// Icons
import { BsArrowRight } from "react-icons/bs";


const Aboutpage = () => {
    return (
        <>
            <Header />
            {/* SECTION1 */}
            <div className="about-image">
                <div className="overlay"></div>
                <section className="about container">
                    <h1>Haqqımızda</h1>
                    <p>A team of enthusiastic young professionals to tackle niche problems of the industry.</p>
                </section>
                <section className="we-are container">
                    <div className="we-are-title">
                        <h3>niyə</h3>
                        <h1>King Academy?</h1>
                        <p>We are a group of professionals who gathered to tailor solutions to niche problems in the construction industry. Based in Dubai, UAE, and Headquartered in Baku, Azerbaijan, we work with 260+ companies in 40+ countries. We assist our clients in projects financed by Multilateral Development Banks (MDBs). With a team of engineers, bankers, and business analysts, we specialize in three main directions: business development, financial support, and project management.</p>
                    </div>
                </section>
                {/* <section className="aboutus">
                    <div className="aboutus-left">
                        <div className="abouts-title">
                            <h1>About Us</h1>
                            <p>We support construction companies to achieve their objectives utilizing business development, financial, and project management tools. While our background lets us grasp the essence of the industry in-depth, we comprehend the significance of time and money for successful project implementation. Thus, our solutions are swift and tailored for your needs.</p>
                        </div>
                        <button>Learn more <BsArrowRight /></button>
                    </div>
                    <div className="abouts-right">
                        <img src="https://efcgroup.com/images/cache/19/197c0c_about-home.jpg" alt="" />
                    </div>
                </section> */}

                {/* SECTION2 */}
                {/* <section className="careers">
                    <div className="careers-left">
                        <div className="careers-img">
                            <img src="https://efcgroup.com/images/cache/ce/ce02a9_career-home.jpg" alt="" />
                        </div>
                    </div>
                    <div className="careers-right">
                        <div className="careers-right-title">
                            <h1>Careers</h1>
                            <p>We are always looking for highly skilled, committed, and enthusiastic people to join our team.</p>
                        </div>

                        <ul className="careers-list">
                            <li><Link to="">Lead Specialist / Business Development Department <span>Read more</span> <BsArrowRight />
                            </Link></li>
                            <li><Link to="">Head of Technical Office <span>Read more</span> <BsArrowRight /> </Link></li>
                            <li><Link to="">Lead Project Control Engineer <span>Read more</span> <BsArrowRight /> </Link></li>
                        </ul>
                        <button>All vacancies <span><BsArrowRight /></span></button>
                    </div>
                </section> */}
                {/* SECTION4 */}
                <section className="business container">
                    <div className="business-box container">
                        <div className="business-title">
                            <h3>Pulsuz Konsultasiya</h3>
                            <p>Tədris sahəsinin seçimi ilə bağlı çətinlik çəkirsinizsə, pulsuz konsultasiya xidmətimizdən istifadə edin. Biz sizə doğru seçim etməkdə yardımçı olacayıq</p>
                        </div>
                        {/* <img src={design} alt="" /> */}
                        <button>Daha çox <BsArrowRight /></button>
                    </div>
                </section>
                <Footer />
            </div> 
        </>
    )
}

export default Aboutpage;