import React from "react";
import Fade from "react-reveal/Fade.js";

const SmallHero = ({title, description,bgImage}) => {
    return <div className="small-hero" style={{backgroundImage: `url(${bgImage})`}}>
        <div className='container h-100'>
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12">
                    <Fade bottom delay={400}>
                        <h1> {title} </h1>
                    </Fade>
                    <Fade bottom delay={500}>
                        {description && <p>{description}</p>}
                    </Fade>
                </div>
            </div>
        </div>
    </div>
}

export default SmallHero;
