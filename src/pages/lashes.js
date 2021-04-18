import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import LashesService from "../assets/lashesService.svg";
import ImageComponent from "../components/Ui/ImageComponent.js";
import NextService from "../components/NextService/NextService.js";
import PriceLinear from "../components/PriceLinear/PriceLinear.js";

const LashesPage = () => {

    return <>
        <div className={'wrapper service'}>
            <Seo title="Ciglia"/>
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <LashesService id={'lashes'}/>
                        <h1 className='mt-lg-5 mb-md-0 mt-3 mb-3'>Il meglio per <span style={{color: '#714DCA'}}> il tuo sguardo.</span>
                        </h1>
                    </div>
                    <div className="col-md-6 col-12">
                        <ImageComponent alt={'ciglia'} filename={'lasheshead.jpg'}/>
                    </div>
                </div>
                <div className="row align-items-start m-120">
                    <div className="col-md-6 col-12">
                        <h2 style={{color: '#714DCA'}}>Extension ciglia</h2>
                        <p>L’extension ciglia è un trattamento di allungamento delle proprie ciglia naturali.
                            la tecnica effettuata è di origine russa chiamata ‘russian volume’.
                            Una tecnica tutta manuale nella creazione del ventaglio di ciglia finte.
                        </p>
                    </div>
                    <div className="col-md-6"/>
                    <div className="col-md-6 col-12 mt-5">
                        <h3>Per chi ?</h3>
                        <p>
                            le ciglia possono essere create in base alle esigenze della cliente.
                            si possono effettuare volumi soft e mega.
                            cambiano lo sguardo dando intensità, profondità, colore, volume, pienezza allo sguardo.
                            questo trattamento è sconsigliato a chi soffre di allergie stagionali o intolleranze a
                            particolari prodotti chimici. (nickel)
                        </p>
                    </div>
                    <div className="col-md-5 offset-md-1 col-12 mt-5">
                        <h3>Come ?</h3>
                        <p>
                            si crea il ventaglio di ciglia finte che andrà posizionato ad un millimetro dalla radice
                            della singola propria ciglia naturale fino a riempire tutta la base della palpebra e creare
                            il volume richiesto.
                            Ciglia di seta e cashmere di colore nero; la colla utilizzata è di prima qualità.
                            Prima di iniziare il trattamento si effettua un breve colloquio con la cliente per venire a
                            conoscenza delle eventuali allergie.
                        </p>
                    </div>
                    <div className="col-md-10 col-12 mt-5">
                        <h3>Manutenzione</h3>
                        <ul>
                            <li style={{color: '#714DCA', marginBottom: 12}}>
                            <span
                                style={{color: '#fff'}}>Lavare le ciglia ogni mattina con acqua (o con l’apposita schiuma);</span>
                            </li>
                            <li style={{color: '#714DCA', marginBottom: 12}}>
                                <span style={{color: '#fff'}}>pettinare le ciglia tre volte al giorno;</span>
                            </li>
                            <li style={{color: '#714DCA', marginBottom: 12}}>
                                <span style={{color: '#fff'}}>Ripetere il refill ogni tre settimane;</span>
                            </li>
                            <li style={{color: '#714DCA', marginBottom: 12}}>
                                <span style={{color: '#fff'}}>Non utilizzare il mascara.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6"/>
                </div>
            </div>

            <div className='service-full-image'>
                <ImageComponent alt={'sguardo exension ciglia'} filename={'lashesbg.jpg'}/>
            </div>

            <div className="container">
                <div className="row align-items-start mt-120 justify-content-center">
                    <div className="col-12 mb-80">
                        <h1 className={'price-title'}>Listino Prezzi</h1>
                    </div>
                    <div className="col-12  mb-5">
                        <PriceLinear price={70} serviceType={'lashes'} title={'Russian volume'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={85} serviceType={'lashes'} title={'Multileveling'}/>
                    </div>
                    <div className="col-12  mb-5">
                        <PriceLinear price={35} serviceType={'lashes'} title={'Ritocco'}/>
                    </div>
                    <div className="col-12  mb-5">
                        <PriceLinear price={50} serviceType={'lashes'} title={'One to One'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={20} serviceType={'lashes'} title={'Rimozione'}/>
                    </div>
                </div>
            </div>
        </div>
        <NextService serviceType={'spa'}/>
    </>
}

export default withLayout()(LashesPage);
