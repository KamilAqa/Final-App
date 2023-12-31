import "./Education.css";
import "./EducationRespon.css";


//Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const Education = () => {
    return (
        <>
            <Header />
            <div className="education-image">
                <div className="overlay"></div>
                <section className="education container">
                    <h1>King Education</h1>
                    <p>We are a team of professionals that assists contractors and other stakeholders in acquiring bank guarantees, providing Joint Venture solutions, mitigating project risks, finding suitable projects, expanding to new markets, and financing projects.
                    </p>
                    {/* <button>Our services</button> */}
                </section>
            </div>

            <section className="education-about">
                <div className="frntdv">
                    <div className="frntdv-title">
                        <h1>Front-end Developer</h1>
                        <p >Frontend veb proqramlaşdırma kursunun sonunda siz HTML, CSS, Javascript, Jquery,
                            React.Js,Bootstrap, Ant Design texnologiyaları vasitəsilə müasir veb saytların
                            interfeys hissəsinin necə yaradılması, vebsaytın istifadəçinin ekran ölçülərinə
                            uyğunlaşdırılması və Javascript vasitəsilə funksional saytların proqramlaşdırılması,
                            animasiyaların yaradılması üzrə işlək bilik və bacarıqlara sahib olacaqsınız.
                            Tədris proqramı 60 faiz praktiki məşğələ, 40 faiz nəzəri dərslərdən ibarətdir.</p>
                    </div>
                </div>

                {/* Backend */}
                <div className="bckndv">
                    <div className="bckndv-title">
                        <h1>Back-end Developer</h1>
                        <p > C# proqramlaşdırma dili dünyanın Top 5 ən populyar proqramlaşdırma dillərindən biridir.
                            Back-End C# /.NET proqramçılara bütün dünyada tələbat çox yüksəkdir, siz də Microsoft
                            C# üzrə mütəxəssis olun və hər zaman axtarılan, yüksək qazanclı bir peşəyə sahib olacaqsınız.
                            Bu sahədə təcrübə topladıqan sonra siz dünyanın istənilən nöqtəsindən distant olaraq
                            istədiyiniz şirkət/şirkətlər ilə çalışa biləcəksiniz. Sərbəst rejim ilə çalışaraq yüksək
                            əmək haqqı alacaqsınız və bundan əlavə olaraq öz layihələrinizin üzərində də çalışa biləcəksiniz.
                            <br />

                            Bu texnologiyalara əlavə olaraq, Git, CVN və CVS kimi versiyaya nəzarətdə təcrübəli
                            olması və Linux əsaslı əməliyyat sistemlərindən
                            istifadə edə bilməsi back-end tərtibatçıları üçün əhəmiyyətli bir artıdır.
                            <br />
                            Bəzi insanlar hər iki tərəfi inkişaf etdirməkdə bacarıqlı ola bilərlər.
                            Bu tip inkişaf etdirən insanlar "Full-Stack Developer" adlanır.</p>
                    </div>
                </div>
                <div className="dizayn">
                    <div className="dizayn-title">
                        <h1>Dizayn</h1>
                        <h3>Nələri öyrənəcəksiniz</h3>
                        <div className="dizayn-about">
                            <p> <strong>Gözəl reklamlar yaratmağı</strong>
                                <br />
                                Rastr və vektor qrafikasının istifadəsi ilə çöl və daxili reklamların hazırlanması
                            </p>
                            <p> <strong>Şirkət üslubunun tərtib olunması
                            </strong>
                                <br />
                                Korporativ üslubun, brendbukun, "guideline"-ların və hətta brend
                                personajlarının yaradılması
                            </p>
                            <p> <strong>Foto və video çəkilişlərin aparılması</strong>
                                <br />
                                İstənilən məqsədə uyğun peşəkar foto və video sessiyaların
                                həyata keçirilməsi; retouch və çəkilmiş materialların işlənilməsi.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Education;