import React from "react";
import './ServicesList.scss'
import Nails from '../../assets/nails.svg';
import Ciglia from '../../assets/lashes.svg';
import Spa from '../../assets/spa.svg';
import Viso from '../../assets/viso.svg';
import Corpo from '../../assets/body.svg';
import MakeUp from '../../assets/makeup.svg';
import Vivus from "vivus";
import {Link} from "gatsby";

const ServicesList = () => {
    const onEnter = (ids) => {
        new Vivus(ids, {duration: 150}, null);
    };

    return <div className='services'>
        <div className="row">
            <div className="col-lg-2 col-md-4 col-4">
                <Link to={'/nails'} className="service nails link-no-decoration" onMouseEnter={() => onEnter('nails')}>
                    <Nails id={'nails'}/>
                    <h4>nails</h4>
                </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
                <Link to={'/lashes'} className="service lashes link-no-decoration " onMouseEnter={() => onEnter('lashes')}>
                    <Ciglia id={'lashes'}/>
                    <h4>ciglia</h4>
                </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
                <Link to={'/spa'} className="service spa link-no-decoration " onMouseEnter={() => onEnter('spa')}>
                    <Spa id={'spa'}/>
                    <h4>spa</h4>
                </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
                <Link to={'/face'} className="service face link-no-decoration" onMouseEnter={() => onEnter('face')}>
                    <Viso id={'face'}/>
                    <h4>viso</h4>
                </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
                <Link to={'/body'} className="service body link-no-decoration" onMouseEnter={() => onEnter('body')}>
                    <Corpo id={'body'}/>
                    <h4>corpo</h4>
                </Link>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
                <Link to={'/makeup'}  className="service makeup link-no-decoration" onMouseEnter={() => onEnter('makeup')}>
                    <MakeUp id={'makeup'}/>
                    <h4>Make up</h4>
                </Link>
            </div>
        </div>
    </div>
}

export default ServicesList;
