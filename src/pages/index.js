import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import hero from '../images/hero.webp';

const IndexPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Home"/>
        <div className="hero" style={{backgroundImage: `url(${hero})`}}>
            <div className='container h-100'>
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-12">
                        <h1> Lascia sempre spazio ad un po' di bellezza nella tua vita </h1>
                    </div>
                    <div className="col-12">
                        <a href={""} className="my-btn primary-btn">
                            Prenota
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1> test </h1>
                    <h1> test </h1>
                    <h1> test </h1>
                    <h1> test </h1>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(IndexPage);
