import {Link} from "gatsby";
import React, {useEffect, useState} from "react";
import Logo from '../../assets/juliette-icon.svg';
import Phone from '../../assets/phone.svg'
import Location from '../../assets/location.svg'
import './Header.scss';

const Header = ({siteTitle}) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.scrollY !== 0) {
            setScrollPosition(window.scrollY);
        }
    }, []);

    console.log(scrollPosition)

    return <header>
        <nav>
            <Link to={'/'} className={'logo'}>
                <Logo/>
            </Link>
            <Link to={'/about'} >
                <span>Chi siamo</span>
            </Link>
            <a href={'https://www.google.com/maps/dir//juliette/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x133aaa41811472e3:0xbb13c768976c5e65?sa=X&ved=2ahUKEwiTovu1x-nvAhUF-qQKHRouCNsQ9RcwFXoECDAQBQ'} target={'_blank'} rel="noreferrer">
                <Location/>
            </a>
            <a href={'tel:0776 831060'} target={'_blank'} rel="noreferrer">
               <Phone/>
            </a>
        </nav>
    </header>
}

export default Header
