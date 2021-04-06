import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";

const AboutPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Chi siamo"/>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1>Chi siamo</h1>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(AboutPage);
