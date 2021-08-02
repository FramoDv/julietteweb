import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import SmallHero from "../components/SmallHero/SmallHero.js";
import contactHero from "../images/callbg.jpg";
import Phone from '../assets/phone.svg';
import Clock from '../assets/clock.svg';
import Position from '../assets/location.svg';
import ImageComponent from "../components/Ui/ImageComponent.js";
import Location from "../assets/location.svg";

const ContactsPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Contattaci"/>
        <SmallHero title={"Contattaci"} bgImage={contactHero}
                   description={"Ci piacerebbe sentirti ed incontrarti di persona. Di seguito puoi trovare tutti i dettagli per contattarci. Ci vediamo presto!"}/>

        <div className="section-big white-section">
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-3 col-12 mb-5 text-center">
                                <Phone fill={"#212121"} width={32} height={32}/>
                                <p className="text-uppercase mt-3" style={{fontSize: 14, fontWeight: 500}}> Contattaci </p>
                                <p className="text-desc service-desc">Tel: 0776 831060<br/>info@juliettebenessere.it</p>
                            </div>
                            <div className="col-md-3 col-12 mb-5 text-center">
                                <Clock fill={"#212121"} width={32} height={32}/>
                                <p className="text-uppercase mt-3" style={{fontSize: 14, fontWeight: 500}}> Orario </p>
                                <p className="text-desc service-desc">
                                    Lun: Chiuso
                                    <br/>Mar - Ven: 9:00 am — 18:30 pm
                                    <br/>Sab: 9:00 am — 17:00 pm</p>
                            </div>
                            <div className="col-md-3 col-12 mb-5 text-center">
                                <Position fill={"#212121"} width={32} height={32}/>
                                <p className="text-uppercase mt-3" style={{fontSize: 14, fontWeight: 500}}> Location </p>
                                <p className="text-desc service-desc">
                                    Via Cesare Balbo 40
                                    <br/>Sora, Frosinone<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4 d-flex justify-content-center">
                        <a href={'tel:0776 831060'} target={'_blank'} rel="noreferrer"
                           className="my-btn primary-black-btn mb-sm-0 mb-3 btn-home">
                            <Phone/> Prenota ora
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="middle-divided">
            <div className={"imageSide"}>
                <ImageComponent alt={'centro'} filename={'centropro.jpg'}/>
            </div>
            <div className={"navigation text-center"}>
                <h5>Raggiungici!</h5>
                <p className="text-desc service-desc mb-4">
                    Via Cesare Balbo 40
                    <br/>Sora, Frosinone<br/>
                </p>
                <a href={'https://www.google.com/maps/dir//juliette/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x133aaa41811472e3:0xbb13c768976c5e65?sa=X&ved=2ahUKEwiTovu1x-nvAhUF-qQKHRouCNsQ9RcwFXoECDAQBQ'}
                   target={'_blank'} rel="noreferrer"
                   className="my-btn secondary-btn-black mb-sm-0 mb-3 btn-home">
                    <Location/> Avvia La Navigazione
                </a>
            </div>
        </div>
    </div>
}

export default withLayout()(ContactsPage);
