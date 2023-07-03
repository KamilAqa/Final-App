import "./Services.css"


// Components
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Education from "../Education/Education";

const Services = () => {
    return (
        <>
            <Header />
            <div className="our-services-image">
                <div className="overlay"></div>
                <section className="our-services container">
                    <h1>Our Services</h1>
                    <p>Our expertise and tools will assist you throughout the entire project cycle.</p>
                </section>

                <Education />

                <Footer />
            </div>
        </>
    )
};

export default Services;