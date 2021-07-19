import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";

const ServicesPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Servizi"/>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1>Servizi</h1>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(ServicesPage);
