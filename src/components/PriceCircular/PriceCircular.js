import React from "react";
import './PriceCircular.scss'

const PriceCircular = ({title,price,serviceType = 'nails'}) => {

    const classChooser = () => {
        switch (serviceType){
            case 'makeup': return 'makeupCircle'
            case 'body': return 'bodyCircle'
            case 'spa': return 'spaCircle'
            case 'lashes': return 'lashesCircle'
            case 'face': return 'faceCircle'
            default: return 'nailsCircle'
        }
    }

    return <div className={`${classChooser()} price`}>
        <div className="content">
            <h3>{title}</h3>
            <div/>
            <h1>{price} €</h1>
        </div>
        <span className={'circle1'}/>
        <span className={'circle2'}/>
    </div>
}

export default PriceCircular;
