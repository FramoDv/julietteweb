import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import hero from '../images/hero.jpg';
import Nails from "../assets/nailsService.svg";
import Lashes from "../assets/lashesService.svg";
import Spa from "../assets/spaService.svg";
import Face from "../assets/faceService.svg";
import Body from "../assets/bodyService.svg";
import Makeup from "../assets/makeupService.svg";
import Phone from '../assets/phone.svg';
import {Link} from "gatsby";
import ImageComponent from "../components/Ui/ImageComponent.js";
import InstagramFeed from "../components/InstagramFeed/InstagramFeed.js";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel.js";
import Fade from "react-reveal/Fade.js";

const IndexPage = () => {
    const keywords = "nails, unghie, manicure, gel, ricostruzione unghie, corpo, spa, viso, makeup, massaggi, pressoterapia, lashes, ciglia, epilazione, lampada, epilazione laser, appuntamenti, servizi, estetica, shusa, sora, centro estetico, solarium, home".split(',') || [];

    return <div className={'homeWrapper'}>
        <Seo title="Juliette estetica & benessere - Home" lang={"it"} description={"Juliette, il tuo centro Estetico e del Benessere a Sora. Miglioriamo la bellezza individuale con tecnologie e prodotti all'avanguardia e un servizio personalizzato. " +
        "Il nostro team di professionisti è pronto a fornirti il miglior servizio che tu abbia mai avuto."} keywords={keywords}/>
        <div className="hero" style={{backgroundImage: `url(${hero})`}}>
            <div className='container h-100'>
                <h1 style={{display:"none"}}> Juliette estetica & benessere - Home </h1>
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-12">
                        <Fade bottom delay={400}>
                            <h1> Lascia sempre spazio ad un po' di bellezza nella tua vita </h1>
                        </Fade>

                        <div className="d-md-flex justify-content-center d-sm-block text-center ">
                            <Fade bottom delay={500}>
                                <a href={'tel:0776 831060'} target={'_blank'} rel="noreferrer"
                                   className="my-btn primary-btn mb-sm-0 mb-3 btn-home">
                                    <Phone/> Prenota ora
                                </a>
                                <Link to={"/services"} className="my-btn secondary-btn  btn-home">
                                    Lista Servizi
                                </Link>
                            </Fade>
                        </div>

                    </div>
                </div>

                <div className="row d-md-flex d-none justify-content-center align-items-start"
                     style={{
                         position: "absolute", bottom: 24, width: 800,
                         left: "50%", WebkitTransform: "translateX(-50%)",
                         transform: "translateX(-50%)"
                     }}>
                    <Fade bottom delay={700}>
                        <div className="col-md-4 info-item">
                            <span>Contattaci</span>
                            <p>Tel: 0776 831060<br/>info@juliettebenessere.com</p>
                        </div>
                        <div className="col-md-4 info-item">
                            <span>Orario</span>
                            <p>Lun: Chiuso
                                <br/>Mar - Ven: 9:00 am — 18:30 pm
                                <br/>Sab: 9:00 am — 17:00 pm
                            </p>
                        </div>
                        <div className="col-md-4 info-item">
                            <span>Location</span>
                            <p>Via Cesare Balbo 40
                                <br/>Sora, Frosinone<br/>
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>

        <div className="section-big pink-section d-md-none d-block">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-4 info-item text-center mb-4">
                        <strong className="text-uppercase" style={{fontSize: 13}}>Contattaci</strong>
                        <p>Tel: 0776 831060<br/>info@juliettebenessere.com</p>
                    </div>
                    <div className="col-md-4 info-item text-center mb-4">
                        <strong className="text-uppercase" style={{fontSize: 13}}>Orario</strong>
                        <p>Lun: Chiuso
                            <br/>Mar - Ven: 9:00 am — 18:30 pm
                            <br/>Sab: 9:00 am — 17:00 pm
                        </p>
                    </div>
                    <div className="col-md-4 info-item text-center">
                        <strong className="text-uppercase" style={{fontSize: 13}}>Location</strong>
                        <p>Via Cesare Balbo 40
                            <br/>Sora, Frosinone<br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-big white-section">
            <div className='container'>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1> Servizi </h1>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 col-12 text-center">
                        <Nails width={50} height={50}/>
                        <p className="text-uppercase mt-2" style={{fontSize: 14, fontWeight: 500}}> Nails </p>
                        <p className="text-desc service-desc">Unghie sempre perfette con i notri
                            semipermanenti e gel.</p>
                    </div>
                    <div className="col-md-4 col-12 text-center mt-md-0 mt-5">
                        <Lashes width={50} height={50}/>
                        <p className="text-uppercase mt-2" style={{fontSize: 14, fontWeight: 500}}> Ciglia </p>
                        <p className="text-desc service-desc">Le ciglia possono cambiare il tuo
                            sguardo! prova le nostre tecniche.</p>
                    </div>
                    <div className="col-md-4 col-12 text-center mt-md-0 mt-5">
                        <Spa width={50} height={50}/>
                        <p className="text-uppercase mt-2" style={{fontSize: 14, fontWeight: 500}}> Spa </p>
                        <p className="text-desc service-desc"> Massaggi trattamenti corpo e
                            lampade, scopri in dettaglio i nostri servizi.</p>
                    </div>
                </div>

                <div className="row mt-md-5 mt-4">
                    <div className="col-md-4 col-12 text-center mt-md-0 mt-5">
                        <Face width={50} height={50}/>
                        <p className="text-uppercase mt-2" style={{fontSize: 14, fontWeight: 500}}> Viso </p>
                        <p className="text-desc service-desc">Una vasta selezione di soluzioni per dare nuova luce al tuo viso.</p>
                    </div>
                    <div className="col-md-4 col-12 text-center mt-md-0 mt-5">
                        <Body width={50} height={50}/>
                        <p className="text-uppercase mt-2" style={{fontSize: 14, fontWeight: 500}}> Corpo </p>
                        <p className="text-desc service-desc">Tecnologie avanzate come la nostra SlimPress e trattamenti idratanti di ultima generazione.</p>
                    </div>
                    <div className="col-md-4 col-12 text-center mt-md-0 mt-5">
                        <Makeup width={50} height={50}/>
                        <p className="text-uppercase mt-2" style={{fontSize: 14, fontWeight: 500}}> Makeup </p>
                        <p className="text-desc service-desc"> Trucco personalizzato e studiato appositamente per il tuo viso. Perfetta in ogni occasione. </p>
                    </div>

                    <div className="col-12 mt-5 text-center d-flex justify-content-center">
                        <Link to={"/services"} className="my-btn primary-black-btn"> Lista Servizi</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-big pink-section">
            <div className='container'>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-5 col-12">
                        <ImageComponent alt={'Giulia'} filename={'team.webp'}/>
                    </div>
                    <div className="col-md-1 d-md-block d-none"/>
                    <div className="col-md-6 col-12 mt-md-0 mt-5">
                        <h1> La nostra storia </h1>
                        <p className="mt-4 text-desc">
                            Abbiamo iniziato come un piccolo centro di bellezza, Ma la nostra idea
                            principale era quella di creare il miglior centro di bellezza. Possono esserci
                            compromessi nel miglior centro estetico? La nostra risposta è sempre no, ci preoccupiamo
                            di offrire la migliore qualità, assumiamo i migliori specialisti e forniamo il miglior
                            servizio ai nostri
                            clienti. Questo approccio ci ha permesso di crescere e creare un team fantastico che è
                            appassionato in tutto ciò che facciamo, e faremo.
                        </p>
                        <small className="d-block mt-2"><strong className="fst-italic text-capitalize"> Giulia Savona (
                            Founder )</strong></small>
                        <Link to={"/about"} className="my-btn secondary-btn-black mt-5" style={{marginLeft: 0}}> Scopri
                            di più</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-big white-section-section">
            <div className='container'>
                <div className="row mb-5 text-center">
                    <div className="col-12">
                        <h1> I nostri partner </h1>
                    </div>
                    <div className="col-md-4 offset-md-4 col-12">
                        <p className="mt-4 text-desc">
                            Abbiamo scelto partner leader a livello mondiale nei vari ambiti dell'estetica per fornirvi
                            sempre la miglior qualità sul mercato.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-12">
                        <div className="row justify-content-between align-items-center d-flex">
                            <div className="col-md-3 col">
                                <ImageComponent alt={'indigo'} filename={'indigo.webp'}/>
                            </div>
                            <div className="col-md-3 col">
                                <ImageComponent alt={'shusa'} filename={'logo-shusa.webp'}/>
                            </div>
                            <div className="col-md-3 col">
                                <ImageComponent alt={'artdeco'} filename={'artdeco.webp'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-big black-section">
            <div className='container'>
                <div className="row text-center">
                    <div className="col-12">
                        <h1> Seguici </h1>
                    </div>
                    <div className="col-md-4 offset-md-4 col-12 mt-4">
                        <p style={{color: "#fff"}} className="mt-4 text-desc"> Non farti scappare le ultime promozioni!
                            seguici sui nostri social per tutte le novità.</p>
                    </div>
                    <div className="col-md-12 d-md-block d-none mt-5">
                        <InstagramFeed />
                        {/*<ImageCarousel images={['recut.jpg', '1.jpeg', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp']}
                                       dots={3}/>*/}
                    </div>
                    <div className="col-12 d-block d-md-none mt-5">
                        <ImageCarousel images={['recut.jpg', '1.jpeg', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp']}
                                       dots={3}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(IndexPage);
