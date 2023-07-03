import "./Contact.css";

// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Contact = () => {
    return (
        <>
            <Header />
            <div className="contact-us-image">
                <div className="overlay"></div>
                <section className="contact-us container">
                    <h1>Bizimlə Əlaqə</h1>
                    <p>Tədris sahəsinin seçimi ilə bağlı çətinlik çəkirsinizsə, pulsuz konsultasiya xidmətimizdən istifadə edin. Biz sizə doğru seçim etməkdə yardımçı olacayıq</p>
                </section>
                <section className="contact-us-form container">
                    <h1>Zəhmət olmasa, formu doldurun.</h1>
                    <form action="" className="d-flex">
                        <input type="name" id="name" name="name" placeholder="Ad Soyad" />
                        <input type="email" id="email" name="email" placeholder="E-mail" />
                        <input type="phone" id="phone" name="phone" placeholder="Nömrə" />
                    </form>
                    <textarea name="text" id="text" cols="30" rows="10" className="w-100 mb-4" placeholder="Sualınızı qeyd edin"></textarea>
                    <button>Müraciət et</button>
                </section>
                <section className="contact-us-info">
                    <div className="">

                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Contact;