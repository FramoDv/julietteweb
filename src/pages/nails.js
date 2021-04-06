import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import NailsService from "../assets/nailsService.svg";
import PriceCircular from "../components/PriceCircular/PriceCircular";
import ImageComponent from "../components/Ui/ImageComponent.js";
import NextService from "../components/NextService/NextService.js";

const NailsPage = () => {

    return <>
        <div className={'wrapper service'}>
            <Seo title="Unghie"/>
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <NailsService id={'nails'} />
                        <h1 className='mt-lg-5 mb-md-0 mt-3 mb-3'>Il meglio per <span style={{color: '#F24699'}}> le tue mani.</span></h1>
                    </div>
                    <div className="col-md-6 col-12">
                        <ImageComponent alt={'unghie'} filename={'nailshead.jpg'}/>
                    </div>
                </div>
                <div className="row align-items-start m-120">
                    <div className="col-md-6 col-12">
                        <h2 style={{color: '#F24699'}}>Semipermanente</h2>
                        <p>una struttura resistente ma flessibile.
                            Creata per ristabilire la salute dell’unghia naturale, contenente infatti proteine,
                            cheratina e
                            vitamine A, E e B.
                            Il semipermanente è ideale per avere sempre le mani in ordine, mantenendo una lunghezza
                            media.
                        </p>
                    </div>
                    <div className="col-md-6"/>
                    <div className="col-md-6 col-12 mt-5">
                        <h3>Per chi?</h3>
                        <p>
                            il semipermanente è apposito per chi preferisce avere sempre unghie prettamente corte e per
                            chi
                            vuole ristrutturare in poco tempo il letto ungueale in precedenza danneggiato o
                            semplicemente
                            delicato.
                        </p>
                    </div>
                    <div className="col-md-6 col-12 mt-5">
                        <h3>Manutenzione</h3>
                        <ul>
                            <li style={{color: '#F24699'}}>
                            <span
                                style={{color: '#fff'}}>Indossare i guanti per l’utilizzo di prodotti corrosivi;</span>
                            </li>
                            <li style={{color: '#F24699'}}>
                                <span style={{color: '#fff'}}>idratare le cuticole con olio di argan (preserva anche la lucentezza del lucido);</span>
                            </li>
                            <li style={{color: '#F24699'}}>
                                <span style={{color: '#fff'}}>ripetere il refill ogni tre settimane (per unghie sensibili ogni due settimane e mezzo).</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='service-full-image'>
                <ImageComponent alt={'sfondo nailartist'} filename={'nailsbg.jpg'}/>
            </div>
            <div className="container">
                <div className="row align-items-start m-120">
                    <div className="col-md-6 col-12">
                        <h2 style={{color: '#F24699'}}>Gel</h2>
                        <p>una struttura molto resistente ma non flessibile.
                            E’ lavorato in maniera molto ‘slim’, rispettando la fisionomia del letto ungueale.
                            A differenza del semipermanente che flettendosi agli urti si piega, il gel puo’ spaccarsi in
                            particolare se si sbatte di punta.
                        </p>
                    </div>
                    <div className="col-md-6"/>
                    <div className="col-md-6 col-12 mt-5">
                        <h3>Per chi?</h3>
                        <p>
                            il gel è una struttura dura che non si flette, resistente ad ogni tipo di urto è adatta
                            quindi a
                            chi ama avere unghie lunghe o molto lunghe con le diverse forme
                            (mandorla, quadrata, ovale, ballerina, stiletto)
                        </p>
                    </div>
                    <div className="col-md-6 col-12 mt-5">
                        <h3>Manutenzione</h3>
                        <ul>
                            <li style={{color: '#F24699'}}>
                            <span
                                style={{color: '#fff'}}>Indossare i guanti per l’utilizzo di prodotti corrosivi;</span>
                            </li>
                            <li style={{color: '#F24699'}}>
                                <span style={{color: '#fff'}}>idratare le cuticole con olio di argan (preserva anche la lucentezza del lucido);</span>
                            </li>
                            <li style={{color: '#F24699'}}>
                                <span style={{color: '#fff'}}>Ripetere il refill ogni tre settimane (massimo quattro settimane se non sono troppo lunghe).</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-start mt-120 justify-content-center">
                    <div className="col-12 text-center mb-80">
                        <h1 className={'price-title'}>Listino Prezzi</h1>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <PriceCircular price={70} serviceType={'nails'} title={'Ricostruzione'}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <PriceCircular price={50} serviceType={'nails'} title={<i style={{fontStyle: 'unset'}}> Gel su <br/> unghia naturale </i>}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <PriceCircular price={33} serviceType={'nails'} title={'Refill'}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-lg-5">
                        <PriceCircular price={35} serviceType={'nails'} title={'French'}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-lg-5">
                        <PriceCircular price={20} serviceType={'nails'} title={'Rimozione'}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-lg-5">
                        <PriceCircular price={15} serviceType={'nails'} title={'Manicure'}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-lg-5">
                        <PriceCircular price={23} serviceType={'nails'} title={<i style={{fontStyle: 'unset', fontSize: 30}}> Semipermanente </i>}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-lg-5">
                        <PriceCircular price={25} serviceType={'nails'} title={<i style={{fontStyle: 'unset', fontSize: 30}}> Semipermanente <br/> rafforzato </i>}/>
                    </div>
                </div>
            </div>
        </div>
        <NextService serviceType={'lashes'}/>
    </>
}

export default withLayout()(NailsPage);
