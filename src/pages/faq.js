import React from "react"
import Seo from "../components/seo"
import withLayout from "../layout";
import SmallHero from "../components/SmallHero/SmallHero.js";

const FaqPage = () => {
    return <div className={'homeWrapper'}>
        <Seo title="Domande frequenti"/>
        <SmallHero title={"Domande frequenti"}
                   description={"Qui puoi trovare le risposte alle domande più frequenti sul centro ed i trattamenti. Se non riesci a trovare la risposta, non esitare a contattarci via e-mail o telefono."}/>

        <div className="section-big white-section">
            <div className='container'>
            </div>
        </div>
    </div>
}

export default withLayout()(FaqPage);
