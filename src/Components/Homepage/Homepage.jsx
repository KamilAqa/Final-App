import "./Homepage.css";
import "./style.css";

// Icons
import { SiXdadevelopers } from "react-icons/si";
import { SiTryhackme } from "react-icons/si";
import { CgDesignmodo } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";

// Route
import { Link } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
// import { useSpring, animated } from "react-spring";
// import React, { useState } from "react";

// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import data from "../../store/data"

// Image
import Frontendimg from "../../image/frontend-img.jpg"
import Backendimg from "../../image/backend-img.jpg"
import Designimg from "../../image/design-img.jpg"
import Daziymillar from "../../image/daziymillar.jpg"
import Jonas from "../../image/jonas.jpg"
import Maximilian from "../../image/Maximilan.jpg"
import Careerimg from "../../image/proqramlasdirma-kursu-1.png"
import Practicalimg from "../../image/proqramlasdirma-kursu-2.png"
import Mentorimg from "../../image/proqramlasdirma-kursu-3.png"
import Internshipimg from "../../image/proqramlasdirma-kursu-4.png"
import Bootcampimg from "../../image/proqramlasdirma-kursu-5.png"


const Homepage = () => {


    // const [modal, setModal] = useState(false);

    // const toggleModal = () => {
    //     setModal(!modal)
    // }

    return (
        <div className="home-respon">
            <Header />
            <div className="h-image">
                <div className="overlay"></div>
                <section className="beskope">
                    <h1>King Academy</h1>
                    <p>We are a team of professionals that assists contractors and other stakeholders in acquiring bank guarantees, providing Joint Venture solutions, mitigating project risks, finding suitable projects, expanding to new markets, and financing projects.
                    </p>
                    {/* <button>Our services</button> */}
                </section>
            </div>

            {/* SECTION2 */}

            <section className="services text-center">
                <h1>Tədris Proqramları</h1>
                <div className="services-boxs">
                    <div className="services-box">
                        {/* BOX1 */}
                        <div className="services-box-title">
                            <div className="services-icn">
                                <SiXdadevelopers size="54px" />
                                <h3>Front-end</h3>
                            </div>
                            <div>
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
                                <h3>Back-end</h3>
                            </div>
                            <div>
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
                                <h3>Dizayn</h3>
                            </div>
                            <div>
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
                <div className="abouts-title">
                    <div className="abouts-titlee">
                        <h2>niyə biz?</h2>
                    </div>
                    <Link className="button" to="/about"> Daha çox <BsArrowRight /></Link>
                </div>
                <div className="abouts-boxs">
                    <div className="abouts-box1">

                        {/* BOX1 */}
                        <div className="abouts-box">
                            <div className="abouts-box-img">
                                <img src={Careerimg} alt="" />
                            </div>
                            <div className="abouts-box-title">
                                <h3>Karyera Mərkəzi</h3>
                            </div>
                        </div>
                        {/* BOX2 */}
                        <div className="abouts-box">
                            <div className="abouts-box-img">
                                <img src={Practicalimg} alt="" />
                            </div>
                            <div className="abouts-box-title">
                                <h3>Hər gün praktik məşq</h3>
                            </div>
                        </div>
                        {/* BOX3 */}
                        <div className="abouts-box">
                            <div className="abouts-box-img">
                                <img src={Mentorimg} alt="" />
                            </div>
                            <div className="abouts-box-title">
                                <h3>Mentor dəstəyi</h3>
                            </div>
                        </div>
                    </div>
                    <div className="abouts-box2">
                        {/* BOX4 */}
                        <div className="abouts-box">
                            <div className="abouts-box-img">
                                <img src={Internshipimg} alt="" />
                            </div>
                            <div className="abouts-box-title">
                                <h3>Təcrübələrə qəbul</h3>
                            </div>
                        </div>
                        {/* BOX5 */}
                        <div className="abouts-box">
                            <div className="abouts-box-img">
                                <img src={Bootcampimg} alt="" />
                            </div>
                            <div className="abouts-box-title">
                                <h3>Boot Camp sistemi</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* SECTION3 */}
            <section className="blog">
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
            {/* SECTION4 - BUSINESS */}
            <section className="business">
                <div className="business-box">
                    <div className="business-title">
                        <h3>Pulsuz Konsultasiya</h3>
                        <p>Tədris sahəsinin seçimi ilə bağlı çətinlik çəkirsinizsə, pulsuz konsultasiya xidmətimizdən istifadə edin. Biz sizə doğru seçim etməkdə yardımçı olacayıq</p>
                    </div>
                    {/* <img src={} alt="" /> */}
                    <Link className="button" to="/contact">Əlaqə<BsArrowRight /></Link>

                </div>
            </section>
            <Route>
                <Footer />
            </Route>
        </div>
    )
}

export default Homepage;