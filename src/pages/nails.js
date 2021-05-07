import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import NailsService from "../assets/nailsService.svg";
import ImageComponent from "../components/Ui/ImageComponent.js";
import NextService from "../components/NextService/NextService.js";
import PriceLinear from "../components/PriceLinear/PriceLinear.js";

const NailsPage = () => {

    return <>
        <div className={'wrapper service'}>
            <Seo title="Unghie"/>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <NailsService id={'nails'} />
                        <h1 className='mt-lg-5 mb-md-0 mt-3 mb-3'>Il meglio per <span style={{color: '#D56681'}}> le tue mani.</span></h1>
                    </div>
                    <div className="col-md-6 col-12">
                        <ImageComponent alt={'unghie'} filename={'nailshead.jpg'}/>
                    </div>
                </div>
                <div className="m-120">
                    <div className="row align-items-start">
                        <div className="col-md-6 col-sm-12">
                            <h2 style={{color: '#D56681'}}>Semipermanente</h2>
                            <p>una struttura resistente ma flessibile.
                                Creata per ristabilire la salute dell’unghia naturale, contenente infatti proteine,
                                cheratina e
                                vitamine A, E e B.
                                Il semipermanente è ideale per avere sempre le mani in ordine, mantenendo una lunghezza
                                media.
                            </p>
                        </div>
                        <div className="col-md-6"/>
                        <div className="col-md-6 col-sm-12 mt-5">
                            <h3>Per chi?</h3>
                            <p>
                                il semipermanente è apposito per chi preferisce avere sempre unghie prettamente corte e per
                                chi
                                vuole ristrutturare in poco tempo il letto ungueale in precedenza danneggiato o
                                semplicemente
                                delicato.
                            </p>
                        </div>
                        <div className="col-md-5 col-12 mt-5 offset-md-1">
                            <h3>Manutenzione</h3>
                            <ul>
                                <li style={{color: '#D56681', marginBottom: 12}}>
                            <span
                                style={{color: '#404040'}}>Indossare i guanti per l’utilizzo di prodotti corrosivi;</span>
                                </li>
                                <li style={{color: '#D56681', marginBottom: 12}}>
                                    <span style={{color: '#404040'}}>idratare le cuticole con olio di argan (preserva anche la lucentezza del lucido);</span>
                                </li>
                                <li style={{color: '#D56681', marginBottom: 12}}>
                                    <span style={{color: '#404040'}}>ripetere il refill ogni tre settimane (per unghie sensibili ogni due settimane e mezzo).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='service-full-image'>
                <ImageComponent alt={'sfondo nailartist'} filename={'nailsbg.jpg'}/>
            </div>
            <div className="container">
                <div className="m-120">
                    <div className="row align-items-start">
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
                        <div className="col-md-5 col-12 mt-5 offset-md-1">
                            <h3>Manutenzione</h3>
                            <ul>
                                <li style={{color: '#D56681', marginBottom: 12}}>
                            <span
                                style={{color: '#404040'}}>Indossare i guanti per l’utilizzo di prodotti corrosivi;</span>
                                </li>
                                <li style={{color: '#D56681',marginBottom: 12}}>
                                    <span style={{color: '#404040'}}>idratare le cuticole con olio di argan (preserva anche la lucentezza del lucido);</span>
                                </li>
                                <li style={{color: '#D56681',marginBottom: 12}}>
                                    <span style={{color: '#404040'}}>Ripetere il refill ogni tre settimane (massimo quattro settimane se non sono troppo lunghe).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor:'#AB6878', padding: '40px 0', borderRadius: "350px 0 0 350px"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <h1>I nostri <br/> Partner </h1>
                        </div>
                        <div className="col-md-3 mt-sm-0 mt-5 col-12 text-md-center text-right">
                            <ImageComponent alt={'indigo'} filename={'indigo.webp'}/>
                        </div>
                        <div className="col-md-3 mt-sm-0 mt-5 col-12 text-md-center text-right">
                            <ImageComponent alt={'indigo'} filename={'indigo.webp'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-start mt-120 justify-content-center">
                    <div className="col-12 mb-80">
                        <h1 className={'price-title'}>Listino Prezzi</h1>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={70} serviceType={'nails'} title={'Ricostruzione'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={50} serviceType={'nails'} title={'Gel su unghia naturale'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={33} serviceType={'nails'} title={'Refill'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={35} serviceType={'nails'} title={'French'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={20} serviceType={'nails'} title={'French'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={15} serviceType={'nails'} title={'Manicure'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={23} serviceType={'nails'} title={'Semipermanente'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={25} serviceType={'nails'} title={'Semipermanente rafforzato'}/>
                    </div>
                </div>
            </div>
        </div>
        <NextService serviceType={'lashes'}/>
    </>
}

export default withLayout()(NailsPage);
