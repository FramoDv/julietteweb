import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import hero from '../images/hero.webp';

const IndexPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Home"/>
        <div className="hero" style={{backgroundImage: `url(${hero})`}}>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h1> hero </h1>
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
