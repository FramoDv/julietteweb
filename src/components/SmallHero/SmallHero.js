import React from "react";
import smallHero from "../../images/innersechero.jpg";

const SmallHero = ({title, description}) => {
    return <div className="small-hero" style={{backgroundImage: `url(${smallHero})`}}>
        <div className='container h-100'>
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12">
                    <h1> {title} </h1>
                    {description && <p>{description}</p>}
                </div>
            </div>
        </div>
    </div>
}

export default SmallHero;
