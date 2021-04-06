import React from "react";
import './NextService.scss'
import {Link} from "gatsby";
import LashesNext from "../../assets/lashesnext.svg";
import NailsNext from "../../assets/nailsnext.svg";
import BodyNext from "../../assets/bodynext.svg";
import MakeUpNext from "../../assets/makeupnext.svg";
import SpaNext from "../../assets/spanext.svg";
import FaceNext from "../../assets/facenext.svg";

const NextService = ({serviceType}) => {

    const classChooser = () => {
        switch (serviceType){
            case 'makeup': return 'makeup-next'
            case 'body': return 'body-next'
            case 'spa': return 'spa-next'
            case 'nails': return 'nails-next'
            case 'face': return 'face-next'
            default: return  'lashes-next'
        }
    }

    const IconChooser = () => {
        switch (serviceType){
            case 'makeup': return <MakeUpNext/>
            case 'body': return <BodyNext/>
            case 'spa': return <SpaNext/>
            case 'nails': return <NailsNext/>
            case 'face': return <FaceNext/>
            default: return  <LashesNext/>
        }
    }

    const MessageChooser = () => {
        switch (serviceType){
            case 'makeup': return 'Il meglio per il tuo look.'
            case 'body': return 'Il meglio per la tua silhouette.'
            case 'spa': return 'Il meglio per il tuo benessere.'
            case 'nails': return 'Il meglio per le tue mani.'
            case 'face': return 'Il meglio per la tua pelle.'
            default: return  'Il meglio per il tuo sguardo.'
        }
    }

    return <div className={`${classChooser()} next-service`}>
            <Link to={`/${serviceType}`}>
                <h1>{MessageChooser()}</h1>
                {IconChooser()}
            </Link>
            <span className={'circle1'}/>
            <span className={'circle2'}/>
        </div>
}

export default NextService;
