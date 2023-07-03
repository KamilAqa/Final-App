import "./Education.css"


//Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Router
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// Image
import Bckndv from "../../image/bckndv.jpg"
import Frntdv from "../../image/frntdv.jpg"


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
                <div className="frntdv-box">
                    <div className="frntdv-left">
                        <div className="frntdv-title">
                            <h1>Front-end Developer</h1>
                            <p ><strong>“Front”</strong>  termini <strong>“ön hissə” </strong> deməkdir. İstifadəçilərin veb-saytda əlaqə saxladıqları və
                                gördükləri bütün dizaynlar front-end ilə əlaqəlidir. Bu dizaynları kodlayan insanlar <strong>"Front-End Developers"</strong>  adlanır.
                                Front-end tərtibatçıları layihələrini kodlaşdırmadan əvvəl öz layihələrini <strong>UI</strong>  (İstifadəçi İnterfeysi ) ilə
                                tərtib edə bilərlər. Kodlaşdırmaya gəldikdə, onlar front-end üçün əsas olan <Link to="https://az.wikipedia.org/wiki/HTML">HTML,</Link>  <Link to="https://www.google.com/">CSS</Link>
                                və  Javascript texnologiyalarından istifadə edirlər. Bu texnologiyalardan əlavə, onlar Bootstrap, <strong>Material-ul,</strong> <strong>Jquery,</strong> <strong>Angularjs,</strong>
                                <strong>React,</strong> <strong>VueJs</strong> və <strong>KnockoutJs</strong> kimi kitabxanalardan da istifadə edə bilərlər.
                                Front-end tərtibatçıları veb-saytların üzünü dizayn edərkən dizaynerlər və istifadəçi təcrübəsi analitikləri ilə də işləyə bilərlər. Bu səbəbdən veb-saytların dizaynı zamanı onlar
                                üçün istifadəyə yararlılıq və dizayn böyük əhəmiyyət kəsb edir. Zəruri hallarda, front-end tərtibatçılarından dizaynda görünən səhvləri müəyyən etmələri və bu səhvlər üçün həllər
                                təklif etmələri gözlənilir.
                                Front-end termini veb-saytların görünən siması olsa da, back-end isə veb-saytların dayanmasına imkan verən hissədir.
                                <br />
                                <h3>Yekun olaraq</h3>
                                Front-end developer istifadəçi dostu və gözə xoş gələn interfeyslər dizayn edərkən, back-end developer vebsaytların sağ qalmasını və istifadəçinin qarşılıqlı əlaqəsindən yaranan
                                məlumatların saxlanması və işlənməsi proseslərinin hamar və sürətli olmasını təmin etmək üçün çalışır. Bənzətmə aparsaq, evin görünüşü və dizaynı ön tərəfdirsə, evin dayanmasına
                                imkan verən skelet arxa tərəfdir.</p>
                        </div>

                    </div>
                    <div className="frntdv-right">
                        <img src={Frntdv} alt="" />
                    </div>
                </div>

                {/* Backend */}
                <div className="bckndv-box">
                    <div className="bckndv-left">
                        <img src={Bckndv} alt="" />
                    </div>
                    <div className="bckndv-right">
                        <div className="bckndv-title">
                            <h1>Back-end Developer</h1>
                            <p > <strong>“Back-end”</strong> termini <strong>“arxa hissə”</strong>  deməkdir. Back-end,
                                istifadəçilərin görmədiyi fonda işləyən proqramdır. Veb saytların arxa hissəsi 3 hissədən ibarətdir;
                                bunlar <strong>server,</strong> <strong>proqram</strong> <strong>verilənlər bazasıdır</strong> və .

                                Bu hissələrin ahəngdar və sürətli işləməsini təmin edən şəxslər,
                                yəni bu hissəni inkişaf etdirənlər <strong>"Back-End Developers"</strong>  adlanır.
                                Back-end tərtibatçıları bu hissələri inkişaf etdirərkən aşağıda verilmiş dillərdən
                                və texnologiyalardan istifadə edirlər.
                                <br />

                                <strong>PHP (Laravel, Cake PHP, Symfony, CodeIgniter)</strong> <br />
                                <strong>Python (Django, Flask, Pyramid, CherryPy)</strong> <br />
                                <strong>Ruby (Ruby on Rails, Sinatra, Grape, Padrino)</strong> <br />
                                <strong>Java (Bahar, Grails, Blade, Dropwizard)</strong> <br />
                                <strong>C# (.NET, Xamarin)</strong>

                                <h4>Məlumat bazası kimi;</h4>
                                <h6>MySql</h6>
                                <h6>PostgreSQL</h6>
                                <h6>Oracle</h6>
                                <br />
                                Bu texnologiyalara əlavə olaraq, Git, CVN və CVS kimi versiyaya nəzarətdə təcrübəli olması və Linux əsaslı əməliyyat sistemlərindən istifadə edə bilməsi back-end tərtibatçıları üçün əhəmiyyətli bir artıdır.
                                <br />
                                Bəzi insanlar hər iki tərəfi inkişaf etdirməkdə bacarıqlı ola bilərlər. Bu tip inkişaf etdirən insanlar "Full-Stack Developer" adlanır.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Education;