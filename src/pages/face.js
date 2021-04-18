import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import FaceService from "../assets/faceService.svg";
import ImageComponent from "../components/Ui/ImageComponent.js";
import NextService from "../components/NextService/NextService.js";
import PriceLinear from "../components/PriceLinear/PriceLinear.js";
import Gallery from "../components/Gallery.js";
import MosaicGallery from "../components/Gallery.js";

const FacePage = () => {

    return <>
        <div className={'wrapper service'}>
            <Seo title="Spa"/>
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <FaceService id={'face'}/>
                        <h1 className='mt-lg-5 mb-md-0 mt-3 mb-3'>Il meglio per <span style={{color: '#b903d5'}}> la tua pelle.</span>
                        </h1>
                    </div>
                    <div className="col-md-6 col-12">
                        <ImageComponent alt={'ciglia'} filename={'spaheader.jpg'}/>
                    </div>
                </div>
                <div className="row align-items-start m-120">
                    <div className="col-md-10 col-12">
                        <h2 style={{color: '#b903d5'}}>SPA</h2>
                        <p> La cura del viso è un biglietto da visita che bisogna integrare nella routine giornaliera
                            come una delle cose fondamentali.
                            Con la linea dei prodotti Shusa si può’!
                            E’ possibile effettuare trattamenti personalizzati in base ai diversi tipi di pelle o
                            problematiche.
                            Molto importante è la beauty routine a casa con i prodotti consigliati dall’operatrice che
                            si possono acquistare direttamente in salone.
                        </p>
                        <p className='mt-5'>
                            Con il nostro partner d'eccellenza Shusa.......
                            Una linea italiana di prodotti cosmeceutici ovvero metà farmaco e metà cosmetico che
                            penetrano direttamente nel microcircolo sanguigno occupandosi di tutti gli inestetismi di
                            tutte le età.
                        </p>
                    </div>
                    <div className="col-md-8 col-12">
                        <h3>Frase d'effetto</h3>
                    </div>
                </div>
            </div>

            <div className='service-full-image' style={{maxHeight: 760}}>
                <ImageComponent alt={'sguardo exension ciglia'} filename={'spawide.jpg'}/>
            </div>

            <div className="container">
                <div className="row align-items-start mt-120 justify-content-center">
                    <div className="col-12 mb-80">
                        <h1 className={'price-title'}>Listino Prezzi</h1>
                    </div>
                    <div className="col-12  mb-5">
                        <PriceLinear price={70} serviceType={'face'} title={'Russian volume'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={85} serviceType={'face'} title={'Multileveling'}/>
                    </div>
                    <div className="col-12  mb-5">
                        <PriceLinear price={35} serviceType={'face'} title={'Ritocco'}/>
                    </div>
                    <div className="col-12  mb-5">
                        <PriceLinear price={50} serviceType={'face'} title={'One to One'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={20} serviceType={'face'} title={'Rimozione'}/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <MosaicGallery/>
                    </div>
                </div>
            </div>
        </div>
        <NextService serviceType={'body'}/>
    </>
}

export default withLayout()(FacePage);
