import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";

const FacePage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Viso"/>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1>Viso</h1>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(FacePage);
