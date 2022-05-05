import {Link} from "gatsby";
import React, {useEffect, useState} from "react";
import LogoBlack from '../../assets/juliette-icon-line-black.svg';
import LogoWhite from '../../assets/juliette-icon-line-white.svg';
import Phone from '../../assets/phone.svg';
import Location from '../../assets/location.svg';
import {useLocation} from "@reach/router";
import './Header.scss';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpened, setMobileOpened] = useState(false);
    const [openedOnce, setOpenedOnce] = useState(false);
    const {pathname: path} = useLocation();
    const isHome = path === "/" || path === ""
    console.log(path,isHome);

    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', listenScrollEvent);
            return () => {
                window.removeEventListener('scroll', listenScrollEvent);
            };
        }
    }, [])

    useEffect(() => {
        if(window){
            mobileOpened ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
        }
    },[mobileOpened])

    const listenScrollEvent = () => {
        setScrolled((window.pageYOffset > 60));
    }

    return <>
        <header className={`${!isHome && "h-black-txt"} ${scrolled && "header-scrolled"}`}>
            <Link to={'/'} className={'logo'}>
                {(scrolled || !isHome) ? <LogoBlack/> :  <LogoWhite/>}
            </Link>
            <nav className="d-none d-md-grid">
                <Link to={'/services'}>
                    <span>Servizi</span>
                </Link>
                <Link to={'/about'}>
                    <span>Chi siamo</span>
                </Link>
                {/*<Link to={'/faq'}>
                    <span>Domande</span>
                </Link>*/}
                <Link to={'/contacts'}>
                    <span>Contattaci</span>
                </Link>
            </nav>
            <a className="info d-none d-md-grid"
               href={'https://www.google.com/maps/dir//juliette/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x133aaa41811472e3:0xbb13c768976c5e65?sa=X&ved=2ahUKEwiTovu1x-nvAhUF-qQKHRouCNsQ9RcwFXoECDAQBQ'}
               target={'_blank'} rel="noreferrer">
                <Location/>
            </a>
            <a className="info d-none d-md-grid" href={'tel:0776 831060'} target={'_blank'} rel="noreferrer">
                <Phone/>
            </a>
        </header>

        <div className={`d-md-none d-block ${mobileOpened ? "menu-open" : ""}`}>
            <button className="menu-icon" onClick={() => {setMobileOpened(!mobileOpened); setOpenedOnce(true);}}>
                <span style={{background : ((scrolled && !mobileOpened) || !isHome) ? "#212121" : !mobileOpened ? "#fff" : "#D56681"}}/>
                <span style={{background : ((scrolled && !mobileOpened) || !isHome) ? "#212121" : !mobileOpened ? "#fff" : "#D56681"}}/>
                <span style={{background : ((scrolled && !mobileOpened) || !isHome) ? "#212121" : !mobileOpened ? "#fff" : "#D56681"}}/>
            </button>
        </div>
        {mobileOpened &&  <div className="overlay" onClick={() => setMobileOpened(!mobileOpened)}/>}
        {openedOnce && <div className={`d-md-none d-block mobile-menu ${mobileOpened ? "menu-open" : "menu-closed"}`}>
            <nav>
                <Link to={'/services'}>
                    <span>Servizi</span>
                </Link>
                <Link to={'/about'}>
                    <span>Chi siamo</span>
                </Link>
               {/* <Link to={'/faq'}>
                    <span>Domande</span>
                </Link>*/}
                <Link to={'/contacts'}>
                    <span>Contattaci</span>
                </Link>
            </nav>
            <a className="info"
               href={'https://www.google.com/maps/dir//juliette/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x133aaa41811472e3:0xbb13c768976c5e65?sa=X&ved=2ahUKEwiTovu1x-nvAhUF-qQKHRouCNsQ9RcwFXoECDAQBQ'}
               target={'_blank'} rel="noreferrer">
                <Location/> Via Cesare Balbo 40 Sora (FR)
            </a>
            <a className="info" href={'tel:0776 831060'} target={'_blank'} rel="noreferrer">
                <Phone/> 0776 831060
            </a>
        </div>}
    </>
}

export default Header
