import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";

const SpaPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Spa"/>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1>Spa</h1>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(SpaPage);
