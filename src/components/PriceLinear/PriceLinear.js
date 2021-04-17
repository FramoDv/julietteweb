import React from "react";
import './PriceLinear.scss'

const PriceLinear = ({title,price,serviceType = 'nails'}) => {

    const classChooser = () => {
        switch (serviceType){
            case 'makeup': return 'makeup'
            case 'body': return 'body'
            case 'spa': return 'spa'
            case 'lashes': return 'lashes'
            case 'face': return 'face'
            default: return 'nails'
        }
    }

    return <div className={`${classChooser()} priceLinear`}>
        <h3>{title}</h3>
        <h1>{price} <span>€</span></h1>
    </div>
}

export default PriceLinear;
