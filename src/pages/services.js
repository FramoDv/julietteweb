import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import SmallHero from "../components/SmallHero/SmallHero.js";
import ServiceItem from "../components/ServiceItem/ServiceItem.js";
import servicesHero from "../images/innersechero.jpg";
import Nails from '../assets/nailsService.svg';
import Lashes from '../assets/lashesService.svg';
import Spa from '../assets/spaService.svg';
import Face from "../assets/faceService.svg";
import Phone from "../assets/phone.svg";
import {Body} from "../../.cache/fast-refresh-overlay/components/overlay";

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
                                <h5 style={{fontWeight: 500, margin: 0}}>Mani</h5>
                            </div>
                            <ServiceItem title={"Manicure"} time={20} price={"15"}
                                         description={"Un'accurata pulizia delle cuticole seguita dalla limatura delle unghie, per finire con un massaggio mani con l'idratazione delle cuticole con olio essenziale all'argan. "}/>
                            <ServiceItem title={"Ricostruzione in gel"} time={"2 ore e 30"} price={"70"}
                                         description={"Ricostruzione in gel con cartina da capo per effettuare ogni tipo di lavoro desiderato. "}/>
                            <ServiceItem title={"Gel su unghia naturale"} time={60} price={"50"}
                                         description={"Applicazione gel sulla propria unghia naturale."}/>
                            <ServiceItem title={"Ritocco entro 3 settimane"} time={"1 ora e 30"} price={"33"}
                                         description={"Rimozione della ricrescita e refill con gel per una nuova struttura.."}/>
                            <ServiceItem title={"Semipermanente"} time={"1h"} price={"23"}
                                         description={"Applicazione sottile della base di semipermanente proteica e colore/nail art desiderati."}/>
                            <ServiceItem title={"Semipermanente rinforzato"} time={60} price={"25"}
                                         description={"Applicazione rinforzata della base di semipermanente e colore/nail art desiderati."}/>
                            <ServiceItem title={"Rimozione gel/semipermanente"} time={45} price={"20"}
                                         description={"Rimozione del gel o semipermanente con seguente manicure e applicazione dello smalto rinforzante."}/>
                            <ServiceItem title={"French su richiesta"} time={"1h e 45"} price={"35"}
                                         description={"Si puo effettuare il french solo su struttura con il gel e non con il seipermanente."}/>
                            <div className="col-12 mt-4 mb-0">
                                <h5 style={{fontWeight: 500, margin: 0}}>Piedi</h5>
                            </div>
                            <ServiceItem title={"Pedicure"} time={"60"} price={"25"}
                                         description={"Messa a bagno dei piedi, accurato lavoro delle cuticole e delle varie problematiche, limatura, massaggio rilassante con crema idratante ed applicazione dello smalto su richiesta."}/>
                            <ServiceItem title={"Semipermanente"} time={40} price={"23"}
                                         description={"Accurata rimozione delle cuticole con limatura delle unghie ed applicazione della base semipermanente con colore desiderato Questa applicazione si effettua separatamente dal pedicure."}/>
                            <ServiceItem title={"Applicazione smalto"} time={10} price={"5"}
                                         description={"Accurata rimozione delle cuticole, limatura ed applicazione di smalto trasparente o colorato."}/>
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
                            <ServiceItem title={"Volume lashes (3D, 4D, 5D, 7D)"} time={"2h"} price={"70"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Ritocchi ogni 3 settimane"} time={"1h e 15"} price={"35"}
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
                                    <h5 style={{fontWeight: 500, margin: 0}}>Massaggi</h5>
                                </div>
                                <ServiceItem title={"Massaggio relax total body"} time={60} price={"50"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio nuvola di spezie (Pinda)"} time={60} price={"60"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Decontratturante schiena"} time={30} price={"30"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Linfodrenaggio gambe"} time={40} price={"25"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio sensoriale"} time={60} price={"45"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio a 4 mani"} time={60} price={"100"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio di coppia"} time={60} price={"100"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio anticellulite gambe"} time={40} price={"25"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                                <ServiceItem title={"Massaggio anticellulite addome e gambe"} time={40} price={"30"}
                                             description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>

                                <div className="col-12 mt-4">
                                    <h5 style={{fontWeight: 500, margin: 0}}>Solarium</h5>
                                </div>
                                <ServiceItem title={"Lampada singola"} time={15} price={"8"}
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

        <div className="section-big pink-section">
            <div className='container'>
                <div className="row">
                    <div className="col-12 text-center">
                        <Body data-color className="d-md-none d-block mb-2" width={30} height={30}
                              style={{margin: "0 auto"}}/>
                        <h1> Corpo </h1>
                        <p className="mt-3 text-desc">I migliori trattamenti e soluzioni per un corpo perfetto!</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-10 offset-md-1 col-12">
                        <div className="row">
                            <ServiceItem title={"Scrub corpo"} time={60} price={"40"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Scrub Enzimatico"} time={60} price={"50"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento riducente oro rosso"} time={60} price={"50"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento idratante oro giallo"} time={60} price={"50"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento drenante oro nero"} time={60} price={"50"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento drenante con bendaggio"} time={60} price={"55"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento anticellulite oro bianco"} time={60} price={"55"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento iper idratante oro rosa"} time={60} price={"60"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <div className="col-12 mt-4">
                                <h5 style={{fontWeight: 500, margin: 0}}>Pressoterapia</h5>
                            </div>
                            <ServiceItem title={"Slim Press"} time={40} price={"25"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Pacchetto pressoterapia"} time={"5 sedute da 40"} price={"100"}
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
                        <Body data-color className="d-md-none d-block mb-2" width={30} height={30}
                              style={{margin: "0 auto"}}/>
                        <h1> Epilazione e Laser </h1>
                        <p className="mt-3 text-desc">Epilazione e trattamenti anti ricrescita.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10 offset-md-1 col-12">
                            <div className="row">
                                <div className="col-12 mt-4 mb-0">
                                    <h5 style={{fontWeight: 500, margin: 0}}>Epilazione</h5>
                                </div>
                                <ServiceItem title={"Sopracciglia"} time={15} price={"5"}
                                             description={null}/>
                                <ServiceItem title={"Labbro"} time={5} price={"2"}
                                             description={"descrizione"}/>
                                <ServiceItem title={"Ascelle"} time={10} price={"10"}
                                             description={"descrizione"}/>
                                <ServiceItem title={"Braccia"} time={15} price={"15"}
                                             description={"descrizione"}/>
                                <ServiceItem title={"Gamba totale"} time={60} price={"28,00 (inguine compreso)"}
                                             description={"descrizione"}/>
                                <ServiceItem title={"Gamba parziale"} time={30} price={"15,00 (fino al ginocchio)"}
                                             description={"descrizione"}/>
                                <ServiceItem title={"Inguine"} time={15} price={"10"}
                                             description={"descrizione"}/>
                                <ServiceItem title={"Addome"} time={30} price={"20"}
                                             description={"descrizione"}/>
                                <ServiceItem title={"Schiena"} time={30} price={"15"}
                                             description={"descrizione"}/>

                                <div className="col-12 mt-4 mb-0">
                                    <h5 style={{fontWeight: 500, margin: 0}}>Laser a Diodo</h5>
                                </div>
                                <ServiceItem title={"Baffo"} time={5} price={"10"}
                                             description={null}/>
                                <ServiceItem title={"Mento"} time={10} price={"15"}
                                             description={null}/>
                                <ServiceItem title={"Viso Totale"} time={15} price={"35"}
                                             description={null}/>
                                <ServiceItem title={"Ascelle"} time={10} price={"25"}
                                             description={null}/>
                                <ServiceItem title={"Braccia"} time={15} price={"35"}
                                             description={null}/>
                                <ServiceItem title={"Schiena"} time={20} price={"35"}
                                             description={null}/>
                                <ServiceItem title={"Petto"} time={20} price={"35"}
                                             description={null}/>
                                <ServiceItem title={"Inguine"} time={15} price={"35"}
                                             description={null}/>
                                <ServiceItem title={"Gamba"} time={40} price={"35 (singola)"}
                                             description={null}/>
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
                        <Face data-color className="d-md-none d-block mb-2" width={30} height={30}
                              style={{margin: "0 auto"}}/>
                        <h1> Viso </h1>
                        <p className="mt-3 text-desc">I migliori trattamenti e soluzioni per il viso!</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-10 offset-md-1 col-12">
                        <div className="row">
                            <ServiceItem title={"Pulizia viso"} time={120} price={"30"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento lenitivo melissa"} time={45} price={"35"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento purificante smeraldo"} time={45} price={"35"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento acido mandelico"} time={45} price={"45"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento acido glicolico"} time={45} price={"50"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento Meraviglie di Giò"} time={45} price={"40"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>
                            <ServiceItem title={"Trattamento iper idratante oro rosa"} time={45} price={"50"}
                                         description={"Delicate cuticle work, buffing, and shaping. To finish, a relaxing hand massage, topped off with a perfect polish."}/>>

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
                        <Body data-color className="d-md-none d-block mb-2" width={30} height={30}
                              style={{margin: "0 auto"}}/>
                        <h1> Makeup </h1>
                        <p className="mt-3 text-desc">Trucco perfetto per ogni occasione</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10 offset-md-1 col-12">
                            <div className="row">
                                <div className="col-12 mt-4 mb-0">
                                    <h5 style={{fontWeight: 500, margin: 0}}>Epilazione</h5>
                                </div>
                                <ServiceItem title={"Trucco giorno/sera"} time={60} price={"35"}
                                             description={"descrizione"}/>
                                <ServiceItem title={"Trucco Sposa"} time={120} price={"300"}
                                             description={"descrizione"}/>
                                <ServiceItem title={"Prova Trucco Sposa"} time={60} price={"35"}
                                             description={"descrizione"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(ServicesPage);
