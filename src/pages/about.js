import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import SmallHero from "../components/SmallHero/SmallHero.js";
import aboutHero from "../images/storybg.jpg";
import Formula from '../assets/formula.svg';
import Innovation from '../assets/innovation.svg';
import Love from '../assets/Love.svg';
import Nature from '../assets/nature.svg';
import Personalized from '../assets/personalized.svg';
import Professional from '../assets/professional.svg';
import Phone from "../assets/phone.svg";
import ImageComponent from "../components/Ui/ImageComponent.js";

const AboutPage = () => {
    const keywords = "nails, unghie, manicure, gel, ricostruzione unghie, corpo, spa, viso, makeup, massaggi, pressoterapia, lashes, ciglia, epilazione, lampada, epilazione laser, appuntamenti, servizi, estetica, shusa, sora, centro estetico, solarium, storia, filosofia".split(',') || [];

    return <div className={'homeWrapper'}>
        <Seo title="Su di noi" description={"Un team di professioniste, per creare un angolo di benessere unico. Scopri la nostra storia e la nostra filosofia."}
             keywords={keywords}
             lang={"it"}/>
        <SmallHero title={"La nostra storia"} bgImage={aboutHero}
                   description={"Il nostro obiettivo principale era creare un angolo di benessere unico. Ci possono essere compromessi nel miglior centro benessere?"}/>

        <div className="section-big white-section">
            <div className='container'>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1> Filosofia </h1>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 col-12 text-center">
                        <Nature width={50} height={50}/>
                        <p className="mt-2 art-title"> Bellezza Naturale </p>
                        <p className="text-desc service-desc">Tutte le formule dei cosmetici sono biologiche. La maggior parte di tutti gli ingredienti è naturale.</p>
                    </div>
                    <div className="col-md-4 col-12 text-center mt-md-0 mt-5">
                        <Innovation width={50} height={50}/>
                        <p className="mt-2 art-title">Innovazione </p>
                        <p className="text-desc service-desc">Innoviamo continuamente le nostre tecniche, seguendo ed imparando il meglio per voi.</p>
                    </div>
                    <div className="col-md-4 col-12 text-center mt-md-0 mt-5">
                        <Professional width={50} height={50}/>
                        <p className="mt-2 art-title"> Prodotti professionali </p>
                        <p className="text-desc service-desc"> Tutti i prodotti che utilizziamo sono professionali
                            e hanno comprovata efficacia.</p>
                    </div>
                </div>

                <div className="row mt-md-5 mt-4">
                    <div className="col-md-4 col-12 text-center mt-md-0 mt-5">
                        <Formula width={50} height={50}/>
                        <p className="mt-2 art-title"> Formula controllata </p>
                        <p className="text-desc service-desc">Non preoccuparti, tutti i nostri prodotti non sono tossici. Prenderci cura di te e dei nostri specialisti è una priorità.</p>
                    </div>
                    <div className="col-md-4 col-12 text-center mt-md-0 mt-5">
                        <Personalized width={50} height={50}/>
                        <p className="mt-2 art-title"> Esperienza personalizzata </p>
                        <p className="text-desc service-desc">Ogni ospite è il nostro ospite preferito.
                            Vieni e scoprirai che il nostro servizio è eccezionale.</p>
                    </div>
                    <div className="col-md-4 col-12 text-center mt-md-0 mt-5">
                        <Love width={50} height={50}/>
                        <p className="mt-2 art-title"> Amiamo quello che facciamo </p>
                        <p className="text-desc service-desc"> Il Personale che incontrerai nel nostro studio
                            sta facendo il lavoro che ama. Provaci e sentirai la differenza.</p>
                    </div>

                    <div className="col-12 mt-5 text-center d-flex justify-content-center">
                        <a href={'tel:0776 831060'} target={'_blank'} rel="noreferrer"
                           className="my-btn primary-black-btn mb-sm-0 mb-3 btn-home">
                            <Phone/> Prenota ora
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-big pink-section">
            <div className='container'>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-5 col-12">
                        <ImageComponent alt={'Team'} filename={'team.jpg'}/>
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
                    </div>
                </div>
            </div>
        </div>

        <div className="section-big white-section">
            <div className='container'>
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1> Il nostro Team </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-12">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-12 text-center mb-5">
                                <div style={{maxHeight: 400, overflow: "hidden"}}>
                                    <ImageComponent alt={'Giulia'} filename={'juli1.jpg'}/>
                                </div>
                                <p className="mt-4 art-title" style={{fontSize:16}}> Giulia Savona </p>
                                <p className="text-desc service-desc mt-1" style={{fontSize:16}}>Founder - Nail artist and Lash master</p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 text-center mb-5">
                                <div style={{maxHeight: 400,overflow: "hidden"}}>
                                    <ImageComponent alt={'Giulia'} filename={'vale3.jpg'}/>
                                </div>
                                <p className="mt-4 art-title" style={{fontSize:16}}> Valentina Di Cocco </p>
                                <p className="text-desc service-desc mt-1" style={{fontSize:16}}>Nail specialist</p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 text-center">
                                <div style={{maxHeight: 400,overflow: "hidden"}}>
                                    <ImageComponent alt={'Giulia'} filename={'anna1.jpg'}/>
                                </div>
                                <p className="mt-4 art-title" style={{fontSize:16}}> Anna Coratti </p>
                                <p className="text-desc service-desc mt-1" style={{fontSize:16}}> Beauty therapist </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 text-center">
                                <div style={{maxHeight: 400,overflow: "hidden"}}>
                                    <ImageComponent alt={'Giulia'} filename={'melania.jpg'}/>
                                </div>
                                <p className="mt-4 art-title" style={{fontSize:16}}> Melania Maltesi </p>
                                <p className="text-desc service-desc mt-1" style={{fontSize:16}}>
                                    Master di Lashlifting, microblading & Pmu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(AboutPage);
