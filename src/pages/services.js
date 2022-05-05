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
import Body from "../assets/bodyService.svg";
import Makeup from "../assets/makeupService.svg";
import Phone from "../assets/phone.svg";


const ServicesPage = () => {
    const keywords = "nails, unghie, manicure, gel, ricostruzione unghie, corpo, spa, viso, makeup, massaggi, pressoterapia, lashes, ciglia, epilazione, lampada, epilazione laser, appuntamenti, servizi, estetica, shusa, sora, centro estetico, solarium".split(',') || [];

    return <div className={'homeWrapper'}>
        <Seo title="Servizi"
             description={"Juliette ed il suo team di professionisti è pronto ad offrirti una vasta gamma di servizi per ogni tua esigenza. Vieni a scoprirli!"}
             keywords={keywords}
             lang={"it"}/>
        <SmallHero title={"Lista Servizi"} bgImage={servicesHero}
                   description={"Miglioriamo la bellezza individuale con tecnologie e prodotti all'avanguardia e un servizio personalizzato. " +
                   "Il nostro team di professionisti è pronto a fornirti il miglior servizio che tu abbia mai avuto."}/>

        <div className="section-big white-section">
            <div className='container'>
                <div className="row">
                    <div className="col-12 text-center">
                        <Nails data-color className="d-block mb-2" width={48} height={48}
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
                        <Lashes data-color className="d-block mb-2" width={48} height={48}
                                style={{margin: "0 auto"}}/>
                        <h1> Extension Ciglia </h1>
                        <p className="mt-3 text-desc">Le ciglia possono cambiare il tuo
                            sguardo! prova le nostre tecniche.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-10 offset-md-1 col-12">
                        <div className="row">
                            <ServiceItem title={"Volume lashes ( 2D, 3D, 4D, 5D, 7D)"} time={"2h"} price={"70"}
                                         description={"I volumi delle ciglia applicate vengono accuratamente scelti insieme dopo una perfetta analisi dell'occhio per poi creare il ventaglio più adatto alle proprie esigenze. "}/>
                            <ServiceItem title={"Ritocchi ogni 3 settimane"} time={"1h e 15"} price={"30"}
                                         description={"Il ritocco consiste nel pulire l'occhio con lo 'shampoo' apposito, rimuovere le ciglia cresciute ed applicarne di nuove. I ritocchi sono fondamentali per avere sempre uno sguardo perfetto ma soprattutto per tenere le proprie ciglia in salute "}/>
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
                        <Spa data-color className="d-block mb-2" width={48} height={48}
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
                                             description={"Un'ora di puro relax per anima e corpo, eseguito sul lettino ad acqua termoriscaldata per regalare una sensazione di completo abbandono e permettere ai sensi di distaccarsi dalla realtà. "}/>
                                <ServiceItem title={"Massaggio nuvola di spezie (Pinda)"} time={60} price={"60"}
                                             description={"Manovre orientali rilassanti vi regaleranno relax e pace accompagnate dalle 'nuvole di spezie' ovvero involucri di cotone riscaldati contenenti spezie con effetto calmante che, posizionandole e muovendole sulle zone più rigide, andranno ad alleviare le contratture."}/>
                                <ServiceItem title={"Decontratturante schiena"} time={30} price={"30"}
                                             description={"Manovre specifiche andranno a decontrarre le contratture ed a sciogliere tutta la zona della schiena, attuando un accurato lavoro sul collo eliminando tensioni sulla cervicale."}/>
                                <ServiceItem title={"Linfodrenaggio gambe"} time={40} price={"25"}
                                             description={"la circolazione è fondamentale per la salute delle gambe e del sistema non solo circolatorio ma anche linfatico. Questo massaggio aiuterà a scaricare i liquidi stagnanti così da agevolare il perfetto funzionamento dei due sistemi e sgonfiando le zone interessate per avvertire infine una sensazione di assoluta leggerezza."}/>
                                <ServiceItem title={"Massaggio sensoriale"} time={60} price={"45"}
                                             description={"Quanto ne sappiamo degli oli essenziali e dei loro poteri curativi? In questo massaggio si attuerà un mix di oli che penetreranno tutti i cinque sensi, liberando le tossine, le onde negative che tutti i giorni intossicano il nostro corpo e la nostra mente. Ogni olio essenziale sarà scelto all'inizio della seduta per personalizzare al meglio il massaggio assicurandone i benefici."}/>
                                <ServiceItem title={"Massaggio a 4 mani"} time={60} price={"100"}
                                             description={"Un massaggio con doppio beneficio e doppio relax: due operatrici massaggiano contemporaneamente un solo corpo che per tutto il tempo non si avrà la percezione della diversita delle mani."}/>
                                <ServiceItem title={"Massaggio di coppia"} time={60} price={"100"}
                                             description={"Condividere un momento con la persona che ami, è la cosa più bella: questa esperienza sicuramente vi regalerà emozioni uniche."}/>
                                <ServiceItem title={"Massaggio anticellulite gambe"} time={40} price={"25"}
                                             description={"Questo massaggio non si basa sulle manovre del linfodrenaggio ma bensì su manovre mirate ad eliminare nel tempo grasso e cellulite localizzati, tonificando il muscolo e rendendo la pelle più elastica."}/>
                                <ServiceItem title={"Massaggio anticellulite addome e gambe"} time={40} price={"30"}
                                             description={"Questo massaggio non si basa sulle manovre del linfodrenaggio ma bensì su manovre mirate ad eliminare nel tempo grasso e cellulite localizzati, tonificando il muscolo e rendend la pelle più elasica. Sull'addome verranno inoltre praticate manovre di sbloccaggio per le zone viscerali aiutando il corretto funzionamento di tutto l'apparato."}/>

                                <div className="col-12 mt-4">
                                    <h5 style={{fontWeight: 500, margin: 0}}>Solarium</h5>
                                </div>
                                <ServiceItem title={"Lampada singola"} time={15} price={"8"}
                                             description={"Abbronzarsi in sicurezza con la nostra lamapada per un'abbronzatura controllata e salutare che rimane nel tempo."}/>
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
                        <Body data-color className="d-block mb-2" width={48} height={48}
                              style={{margin: "0 auto"}}/>
                        <h1> Corpo </h1>
                        <p className="mt-3 text-desc">I migliori trattamenti e soluzioni per un corpo perfetto!</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-10 offset-md-1 col-12">
                        <div className="row">
                            <ServiceItem title={"Scrub corpo"} time={60} price={"40"}
                                         description={"Un unguento granuloso che va asportare via le cellule morte dello stato di pelle più superficiale."}/>
                            <ServiceItem title={"Scrub Enzimatico"} time={60} price={"50"}
                                         description={"Insieme di creme a base di acidi, che massaggiati sul corpo penetrano e rinnovano anche gli strati più profondi della pelle."}/>
                            <ServiceItem title={"Trattamento riducente oro rosso"} time={60} price={"50"}
                                         description={"Un trattamento che garantisce la riduzione di grasso nelle zone localizzate come addome fianchi e cosce."}/>
                            <ServiceItem title={"Trattamento idratante oro giallo"} time={60} price={"50"}
                                         description={"Trattamento con insieme di prodotti iper idratanti, per una pelle morbida ed idratata a lungo."}/>
                            <ServiceItem title={"Trattamento drenante oro nero"} time={60} price={"50"}
                                         description={"Una combo di prodotti drenanti, massaggiati e capaci di ottimizzare l'eliminazione di tossine e liquidi in eccesso."}/>
                            <ServiceItem title={"Trattamento drenante con bendaggio"} time={60} price={"55"}
                                         description={"Trattamento con bende imbibite con mix iperdrenanti a freddo per l'eliminazione di tossine e liquidi in eccesso."}/>
                            <ServiceItem title={"Trattamento anticellulite oro bianco"} time={60} price={"55"}
                                         description={"Manovre unite a questa speciale linea di prodotti Shusa per una effettiva riduzione dell'infiammazione edematosa localizzata."}/>
                            <ServiceItem title={"Trattamento iper idratante oro rosa"} time={60} price={"60"}
                                         description={"La linea oro rosa ha come obiettivo la sitrutturazione della pelle grazie ai fitoestrogeni contenuti nei prodotti che mantengono la pelle giovane e compatta."}/>
                            <div className="col-12 mt-4">
                                <h5 style={{fontWeight: 500, margin: 0}}>Pressoterapia</h5>
                            </div>
                            <ServiceItem title={"Slim Press"} time={40} price={"25"}
                                         description={"Un macchinario di nuova generazione che tramite una lavorazione passiva del muscolo va a ridurre la cellulite, il grasso localizzato e di conseguenza a drenare via i liquidi in eccesso."}/>
                            <ServiceItem title={"Pacchetto pressoterapia"} time={"10 sedute da 40"} price={"200"}
                                         description={"La scelta che consigliamo per risultati ottimali e duraturi nel tempo."}/>
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
                        <Body data-color className="d-block mb-2" width={48} height={48}
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
                        <Face data-color className="d-block mb-2" width={48} height={48}
                              style={{margin: "0 auto"}}/>
                        <h1> Viso </h1>
                        <p className="mt-3 text-desc">Trattamenti personalizzati e scelti accuratamente per te!</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-10 offset-md-1 col-12">
                        <div className="row">
                            <ServiceItem title={"Pulizia viso"} time={60} price={"30"}
                                         description={"Un trattamento di pulizia adatto ad ogni tipo di pelle ed età."}/>
                            <ServiceItem title={"Trattamento lenitivo melissa"} time={60} price={"35"}
                                         description={"Insieme di prodotti con principi attivi lenitivi, utilizzando la linea Shusa melissa"}/>
                            <ServiceItem title={"Trattamento purificante smeraldo"} time={60} price={"35"}
                                         description={"Pelle impura? Con la linea Shusa smeraldo potrai trattare ogni tipo di discromia."}/>
                            <ServiceItem title={"Trattamento acido mandelico"} time={60} price={"45"}
                                         description={"L'unico acido applicabile tutto l'anno, un jolly per tutti i tipi di pelle."}/>
                            <ServiceItem title={"Trattamento acido glicolico"} time={60} price={"50"}
                                         description={"Utilizzabile solo d'inverno data la sua fotosensibilità, ideale per un azioe anti-age"}/>
                            <ServiceItem title={"Trattamento Diamante Giallo"} time={60} price={"40"}
                                         description={"Un trattamento preventivo multivitaminico per garantirti una pelle sempre giovane."}/>
                            <ServiceItem title={"Trattamento Botox"} time={60} price={"50"}
                                         description={"Un trattamento alternativo anti-age formato da mix di acidi e vitamine."}/>

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
                        <Makeup data-color className="d-block mb-2" width={48} height={48}
                              style={{margin: "0 auto"}}/>
                        <h1> Makeup </h1>
                        <p className="mt-3 text-desc">Trucco perfetto per ogni occasione</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10 offset-md-1 col-12">
                            <div className="row">
                                <ServiceItem title={"Trucco giorno/sera"} time={90} price={"35"}
                                             description={"Crea con noi il tuo look perfetto adatto per ad ogni condizione."}/>
                                <ServiceItem title={"Trucco Sposa"} time={"2 ore"} price={"300"} isMinutes={false}
                                             description={"Il notro team di professioniste ti accompagnera nella creazione del trucco perfetto nel giorno più importante."}/>
                                <ServiceItem title={"Prova Trucco Sposa"} time={60} price={"35"}
                                             description={"Sceglierai e proverai insieme a noi il makeup che andremo poi a realizzare nel tuo giorno."}/>
                                <ServiceItem title={"Consulenza Microblading occhi e labbra"} time={40} price={"GRATIS"}
                                             description={"Prenota una consulenza gratuita con la nostra Master Dermopigmentista Melania Maltesi, scopri con lei tutti i trattamenti adatti a te."}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(ServicesPage);
