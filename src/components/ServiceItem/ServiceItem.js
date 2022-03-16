import React from "react";
import './ServiceItem.scss';
import TimeIcon from "../../assets/time.svg";

const ServiceItem = ({title,price, description, time, isMinutes = true}) => {

    return <div className={"col-md-6 col-12 service-item mt-4 mb-4"}>
        <h5>{title} <span> {price} €</span></h5>
        <p>{description}</p>
        <p className="time"> <TimeIcon data-color/>( {time} {isMinutes ? "min" : ""} ) </p>
    </div>
}

export default ServiceItem;
