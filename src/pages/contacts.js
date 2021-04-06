import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";

const ContactsPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Contatti"/>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1>Contatti</h1>
                </div>
            </div>
        </div>
    </div>
}

export default withLayout()(ContactsPage);
