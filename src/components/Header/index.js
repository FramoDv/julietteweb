import {Link} from "gatsby"
import React from "react"
import Logo from '../../assets/juliette-icon.svg'
import './Header.scss';

const Header = ({siteTitle}) => <header>
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to={'/'} className='navbar-brand'>
                <Logo/>
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={'/about'} className='nav-link'>
                            Chi siamo
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/contacts'} className='nav-link'>
                            Contatti
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

export default Header
