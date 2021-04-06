import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";

const MakeUpPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Make up"/>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1>Ciglia</h1>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(MakeUpPage);
