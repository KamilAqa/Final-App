import "./Homepage.css";

// Icons
import { SiXdadevelopers } from "react-icons/si";
import { SiTryhackme } from "react-icons/si";
import { CgDesignmodo } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";

// Route
import { Link } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";

// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import data from "../../store/data"

// Image
import Frontendimg from "../../image/frontend-img.jpg"
import Backendimg from "../../image/backend-img.jpg"
import Designimg from "../../image/design-img.jpg"
import Daziymillar from "../../image/daziymillar.jpg"
import Jonas from "../../image/jonas.jpg"
import Maximilian from "../../image/Maximilan.jpg"



function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}


const Homepage = () => {


    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <Header />
            <div className="h-image">
                <div className="overlay"></div>
                <section className="beskope container">
                    <h1>King Education</h1>
                    <p>We are a team of professionals that assists contractors and other stakeholders in acquiring bank guarantees, providing Joint Venture solutions, mitigating project risks, finding suitable projects, expanding to new markets, and financing projects.
                    </p>
                    {/* <button>Our services</button> */}
                </section>
            </div>

            {/* SECTION2 */}

            <section className="services container text-center">
                <h1>Tədris Proqramları</h1>
                <div className="services-boxs">
                    <div className="services-box">
                        {/* BOX1 */}
                        <div className="services-box-title">
                            <div className="services-icn">
                                <SiXdadevelopers size="54px" />
                            </div>
                            <div>
                                <h3>Front-end</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <Link className="button" to="/education">Daha çox</Link >
                            </div>
                        </div>
                        <Link to="">
                            <img src={Frontendimg} alt="" />
                        </Link>
                    </div>
                    {/* BOX2 */}
                    <div className="services-box">
                        <div className="services-box-title">
                            <div className="services-icn">
                                <SiTryhackme size="54px" />
                            </div>
                            <div>
                                <h3>Back-end</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <Link className="button" to="/education">Daha çox</Link >
                            </div>
                        </div>
                        <Link to="">
                            <img src={Backendimg} alt="" />
                        </Link>
                    </div>
                    {/* BOX3 */}
                    <div className="services-box">
                        <div className="services-box-title">
                            <div className="services-icn">
                                <CgDesignmodo size="54px" />
                            </div>
                            <div>
                                <h3>Dizayn</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <Link className="button" to="/education">Daha çox</Link >
                            </div>
                        </div>
                        <Link to="">
                            <img src={Designimg} alt="" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION3 */}
            <section className="aboutus">
                <div className="aboutus-left">
                    <div className="abouts-title">
                        {/* <h1>Haqqımızda</h1> */}
                        <h3>niyə</h3>
                        <span>King Academy?</span>
                        <p>We support construction companies to achieve their objectives utilizing business development, financial, and project management tools. While our background lets us grasp the essence of the industry in-depth, we comprehend the significance of time and money for successful project implementation. Thus, our solutions are swift and tailored for your needs.</p>
                    </div>
                    <div className="numbers">
                        <div className="number">
                            <h4>
                                <Number n={750} />+
                            </h4>
                            <p>Tələbə</p>
                        </div>
                        <div className="number">
                            <h4><Number n={450} />+
                            </h4>
                            <p>Real Layihə</p>
                        </div>
                        <div className="number">
                            <h4><Number n={40} />+
                            </h4>
                            <p>Bağlantı</p>
                        </div>
                    </div>
                    <button>Daha çox <BsArrowRight /></button>
                </div>
                <div className="abouts-right">
                    <img src="https://efcgroup.com/images/cache/19/197c0c_about-home.jpg" alt="" />
                </div>
            </section>

            {/* SECTION3 */}
            <section className="careers">
                <div className="careers-left">
                    <div className="careers-img">
                        <img src="https://efcgroup.com/images/cache/ce/ce02a9_career-home.jpg" alt="" />
                    </div>
                </div>
                <div className="careers-right">
                    <div className="careers-right-title">
                        <h1>Karyera</h1>
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
            </section>

            {/* SECTION4 */}
            <section className="blog container">
                <div className="blog-title">
                    <h1>Müəllimlərimiz</h1>
                    {/* <button>Daha çox <span><BsArrowRight /></span></button> */}
                </div>
                <div className="blog-boxs">
                    {/* BOX1 */}
                    <div className="blog-box">
                        <img src={Daziymillar} alt="Daziy Millar" />
                        <div className="teacher">
                            <h3>Daziy Millar</h3>
                            <p>Front-end Developer</p>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, dolore!</span>
                        </div>
                    </div>
                    {/* BOX2 */}
                    <div className="blog-box">
                        <img src={Jonas} alt="Jonas Schmedtmann" />
                        <div className="teacher">
                            <h3>Jonas Schmedtmann</h3>
                            <p>Front-end Developer</p>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, dolore!</span>
                        </div>
                    </div>
                    {/* BOX3 */}
                    <div className="blog-box">
                        <img src={Maximilian} alt="" />
                        <div className="teacher">
                            <h3>Maximilian Schwarzmüller</h3>
                            <p>Front-end Developer</p>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, dolore!</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION5 - BUSINESS */}
            <section className="business container">
                <div className="business-box container">
                    <div className="business-title">
                        <h3>Pulsuz Konsultasiya</h3>
                        <p>Tədris sahəsinin seçimi ilə bağlı çətinlik çəkirsinizsə, pulsuz konsultasiya xidmətimizdən istifadə edin. Biz sizə doğru seçim etməkdə yardımçı olacayıq</p>
                    </div>
                    {/* <img src={} alt="" /> */}
                    <Link to="/contact"><button>Əlaqə<BsArrowRight /></button></Link>

                </div>
            </section>
            <Route>
                <Footer />
            </Route>
        </>
    )
}

export default Homepage;