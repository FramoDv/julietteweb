import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import SmallHero from "../components/SmallHero/SmallHero.js";

const ContactsPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Contattaci"/>
        <SmallHero title={"Contattaci"}
                   description={"Ci piacerebbe sentirti ed incontrarti di persona. Di seguito puoi trovare tutti i dettagli per contattarci. Ci vediamo presto!"}/>

        <div className="section-big white-section">
            <div className='container'>
            </div>
        </div>
    </div>
}

export default withLayout()(ContactsPage);
