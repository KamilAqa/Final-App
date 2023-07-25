import "./Contact.css";
import "./ContactRespon.css"; 
// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, { useState, useRef } from "react";


// style import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [firstName, setFirstname] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");
    const fname = useRef("");
    const email = useRef("");
    const number = useRef("");
    const texts = useRef("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fname.current.value = "";
        email.current.value = "";
        number.current.value = "";
        texts.current.value = "";
        // setFirstname("");
    }

    const addToast = () => {
        toast.success("Successfull");
    }

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
                    <form onSubmit={handleSubmit} className="d-flex">
                        <input type="name" id="name" ref={fname} name="firstName" value={firstName} onChange={(e) => setFirstname(e.target.value)} placeholder="Ad Soyad" />
                        <input type="email" ref={email} id="email" name="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="E-mail" />
                        <input type="phone" ref={number} id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Nömrə" />
                        <button onClick={addToast} className="contact-button">Müraciət et
                        </button>
                        <ToastContainer />
                    </form>
                    <textarea name="text" ref={texts} id="text" cols="30" rows="10" className="mb-4" value={text} onChange={(e) => setText(e.target.value)} placeholder="Sualınızı qeyd edin"></textarea>
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