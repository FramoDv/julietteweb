import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import SmallHero from "../components/SmallHero/SmallHero.js";

const AboutPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Su di noi"/>
        <SmallHero title={"La nostra storia"}
                   description={"Il nostro obiettivo principale era creare un angolo di benessere unico. Ci possono essere compromessi nel miglior centro benessere?"}/>

        <div className="section-big white-section">
            <div className='container'>
            </div>
        </div>
    </div>
}

export default withLayout()(AboutPage);
