import "./Aboutpage.css";
import "./AboutRespon.css";

// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Route
import { useSpring, animated } from "react-spring";


// Icons
import { BsArrowRight } from "react-icons/bs";




function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}


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
                    <div className="numbers">
                        <div className="number">
                            <h4>
                                <Number n={750} />+
                            </h4>
                            <p>Məzun</p>
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
                </section>

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