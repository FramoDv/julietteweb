import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import SmallHero from "../components/SmallHero/SmallHero.js";
import ServiceItem from "../components/ServiceItem/ServiceItem.js";
import servicesHero from "../images/innersechero.jpg";
import Nails from '../assets/nailsService.svg';
import Lashes from '../assets/lashesService.svg';
import Spa from '../assets/spaService.svg';
import Phone from "../assets/phone.svg";

const ServicesPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Servizi"/>
        <SmallHero title={"Lista Servizi"} bgImage={servicesHero}
                   description={"Miglioriamo la bellezza individuale con tecnologie e prodotti all'avanguardia e un servizio personalizzato. " +
                   "Il nostro team di professionisti è pronto a fornirti il miglior servizio che tu abbia mai avuto."}/>

        <div className="section-big white-section">
            <div className='container'>
                <div className="row">
                    <div className="col-12 text-center">
                        <Nails data-color className="d-md-none d-block mb-2" width={30} height={30}
                               style={{margin: "0 auto"}}/>
                        <h1> Nails </h1>
                        <p className="mt-3 text-desc">Unghie sempre perfette con i notri
                            semipermanenti e gel.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-10 offset-md-1 col-12">
                        <div className="row">
                            <div className="col-12 mt-4 mb-0">
                                <h5 style={{fontWeight: 500, margin:0}}>Mani</h5>
                            </div>
                            <ServiceItem title={"Manicure"} time={20} price={"15"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Ricostruzione in gel"} time={60} price={"70"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Gel su unghia naturale"} time={60} price={"50"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Ritocco entro 3 settimae"} time={60} price={"33"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Semipermanente"} time={60} price={"23"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Semipermanente rinforzato"} time={60} price={"25"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Rimozione gel/semipermanente"} time={60} price={"20"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"French su richiesta"} time={60} price={"35"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <div className="col-12 mt-4 mb-0">
                                <h5 style={{fontWeight: 500, margin:0}}>Piedi</h5>
                            </div>
                            <ServiceItem title={"Pedicure"} time={40} price={"25"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Semipermanente"} time={40} price={"23"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Applicazione smalto"} time={15} price={"5"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4 offset-md-4 col-12 justify-content-center d-flex">
                                <a className="my-btn primary-black-btn" href={'tel:0776 831060'}
                                   target={'_blank'} rel="noreferrer" style={{maxWidth: 212}}>
                                    <Phone/> Prenota ora
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-big pink-section">
            <div className='container'>
                <div className="row">
                    <div className="col-12 text-center">
                        <Lashes data-color className="d-md-none d-block mb-2" width={30} height={30}
                                style={{margin: "0 auto"}}/>
                        <h1> Extension Ciglia </h1>
                        <p className="mt-3 text-desc">Le ciglia possono cambiare il tuo
                            sguardo! prova le nostre tecniche.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-10 offset-md-1 col-12">
                        <div className="row">
                            <ServiceItem title={"Volume lashes (3D, 4D, 5D, 7D)"} time={120} price={"70"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Ritocchi ogni 3 settimane"} time={45} price={"35"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-4 offset-md-4 col-12 justify-content-center d-flex">
                                <a className="my-btn secondary-btn-black" href={'tel:0776 831060'}
                                   target={'_blank'} rel="noreferrer" style={{maxWidth: 212}}>
                                    <Phone/> Prenota ora
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-big white-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <Spa data-color className="d-md-none d-block mb-2" width={30} height={30}
                             style={{margin: "0 auto"}}/>
                        <h1> Spa & Benessere </h1>
                        <p className="mt-3 text-desc">Massaggi e trattamenti corpo e lampade, scopri in dettaglio i
                            nostri servizi.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10 offset-md-1 col-12">
                            <div className="row">
                                <div className="col-12 mt-4 mb-0">
                                    <h5 style={{fontWeight: 500, margin:0}}>Massaggi</h5>
                                </div>
                                <ServiceItem title={"Massaggio relax total body"} time={40} price={"50"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio nuvola di spezie (Pinda)"} time={45} price={"60"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Decontratturante schiena"} time={45} price={"30"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Linfodrenaggio gambe"} time={45} price={"25"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio sensoriale"} time={45} price={"45"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio a 4 mani"} time={60} price={"100"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio di coppia"} time={60} price={"100"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio anticellulite gambe"} time={30} price={"30"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio anticellulite addome"} time={30} price={"30"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio anticellulite addome"} time={30} price={"30"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>

                                <div className="col-12 mt-4">
                                    <h5 style={{fontWeight: 500, margin:0}}>Solarium</h5>
                                </div>
                                <ServiceItem title={"Lampada singola"} time={10} price={"8"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Pacchetto abbronzante"} time={""} price={"110"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-4 offset-md-4 col-12 justify-content-center d-flex">
                                    <a className="my-btn  primary-black-btn" href={'tel:0776 831060'}
                                       target={'_blank'} rel="noreferrer" style={{maxWidth: 212}}>
                                        <Phone/> Prenota ora
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="section-big white-section">

        </div>
    </div>
}

export default withLayout()(ServicesPage);
