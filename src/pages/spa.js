import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import SpaService from "../assets/spaService.svg";
import ImageComponent from "../components/Ui/ImageComponent.js";
import NextService from "../components/NextService/NextService.js";
import PriceLinear from "../components/PriceLinear/PriceLinear.js";

const LashesPage = () => {

    return <>
        <div className={'wrapper service'}>
            <Seo title="Spa"/>
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <SpaService id={'spa'}/>
                        <h1 className='mt-lg-5 mb-md-0 mt-3 mb-3'>Il meglio per <span style={{color: '#297B7C'}}> il tuo benessere.</span>
                        </h1>
                    </div>
                    <div className="col-md-6 col-12">
                        <ImageComponent alt={'ciglia'} filename={'spaheader.jpg'}/>
                    </div>
                </div>
                <div className="row align-items-start mt-120 mb-120">
                    <div className="col-md-10 col-12">
                        <h2 style={{color: '#297B7C'}}>SPA</h2>
                        <p>Una mini SPA dove effettuare tutti i tipi di massaggi di tipo occidentale (massaggio sportivo, massaggio linfodrenaggio, tonificante...) e di tipo orientale (massaggio Hawaiano, massaggio Pinda, massaggio relax…).
                            Si possono effettuare anche massaggi personalizzati in cabina con la scelta di due lettini:
                            lettino con materasso ad acqua termo riscaldata e lettino al sale rosa dell’Himalaya.
                        </p>
                    </div>
                    <div className="col-md-8 col-12">
                        <h3>Un viaggio emozionale che coinvolge tutti i sensi tutto da scoprire.</h3>
                    </div>
                </div>
            </div>

            <div className='service-full-image mb-120' style={{  maxHeight: 760}}>
                <ImageComponent alt={'sguardo exension ciglia'} filename={'spawide.jpg'}/>
            </div>

            <div style={{backgroundColor:'#212121', padding: '40px 0', borderRadius: "350px 0 0 350px"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <h1>I nostri <br/> Partner </h1>
                        </div>
                        <div className="col-md-3 mt-sm-0 mt-5 col-12 text-md-center text-right">
                            <ImageComponent alt={'indigo'} filename={'indigo.png'}/>
                        </div>
                        <div className="col-md-3 mt-sm-0 mt-5 col-12 text-md-center text-right">
                            <ImageComponent alt={'indigo'} filename={'indigo.png'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-start mt-120 justify-content-center">
                    <div className="col-12 mb-80">
                        <h1 className={'price-title'}>Listino Prezzi</h1>
                    </div>
                    <div className="col-12  mb-5">
                        <PriceLinear price={70} serviceType={'spa'} title={'Russian volume'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={85} serviceType={'spa'} title={'Multileveling'}/>
                    </div>
                    <div className="col-12  mb-5">
                        <PriceLinear price={35} serviceType={'spa'} title={'Ritocco'}/>
                    </div>
                    <div className="col-12  mb-5">
                        <PriceLinear price={50} serviceType={'spa'} title={'One to One'}/>
                    </div>
                    <div className="col-12 mb-5">
                        <PriceLinear price={20} serviceType={'spa'} title={'Rimozione'}/>
                    </div>
                </div>
            </div>
        </div>
        <NextService serviceType={'face'}/>
    </>
}

export default withLayout()(LashesPage);
