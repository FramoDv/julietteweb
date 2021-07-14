import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import hero from '../images/hero.webp';

const IndexPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Home"/>
        <div className="hero" style={{backgroundImage: `url(${hero})`}}>
            <div className='container h-100'>
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-12">
                        <h1> Lascia sempre spazio ad un po' di bellezza nella tua vita </h1>
                        <div className="d-md-flex justify-content-center d-sm-block text-center ">
                            <a href={""} className="my-btn primary-btn mb-sm-0 mb-3">
                                Prenota
                            </a>
                            <a href={""} className="my-btn secondary-btn">
                                Lista Servizi
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row d-md-flex d-none justify-content-center align-items-center"
                     style={{marginTop: 100}}>
                    <div className="col-md-4 info-item">
                        <span>Contattaci</span>
                        <p>T: 070 9485 7568<br/>info@beautysalon.com</p>
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
                </div>
            </div>
        </div>

        <div className="section-big pink-section d-md-none d-block">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-4 info-item text-center mb-4">
                        <strong className="text-uppercase" style={{fontSize: 13}}>Contattaci</strong>
                        <p>Tel: 070 9485 7568<br/>info@beautysalon.com</p>
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
                    <div className="col-12">
                        <h1> Servizi </h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-big pink-section">
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h1> Chi Siamo </h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-big white-section-section">
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h1> I nostri partner </h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-big black-section">
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h1> Seguici </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(IndexPage);
