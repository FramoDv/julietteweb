import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import HomeTextMoving from "../components/HomeTextMoving/HomeTextMoving";
import ServicesList from "../components/ServicesList/ServicesList";

const IndexPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Home"/>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <HomeTextMoving/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ServicesList/>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(IndexPage);
