import React from "react";
import './Footer.scss'
import Logo from "../../assets/juliette-icon-line-black.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import {Link} from "gatsby";

const Footer = () => {

    return  <footer>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Logo width={80} height={80}/>
                </div>
                <div className="col-md-6 offset-md-3 col-12">
                    <div className="row justify-content-center d-flex align-items-center mt-4 mb-5">
                        <div className="col">
                            <Link to={'/services'}>
                                <span>Servizi</span>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to={'/about'}>
                                <span>Chi siamo</span>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to={'/faq'}>
                                <span>Domande</span>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to={'/contacts'}>
                                <span>Contattaci</span>
                            </Link>
                        </div>
                        <div className="col-12 mt-5 d-flex justify-content-center text-center align-items-center">
                            <p style={{color:"#212121", fontSize: 14, marginRight: "24px!important"}}>Seguici su</p>
                            <a href={'/services'}>
                                <Instagram/>
                            </a>
                            <a href={'/about'}>
                                <Facebook/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span style={{color:"#212121"}}>© {new Date().getFullYear()}, Juliette estetica & benessere | P. IVA 93932932939</span>
    </footer>
}

export default Footer;
