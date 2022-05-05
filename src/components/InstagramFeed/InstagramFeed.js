import React from "react"
import './InstagramFeed.scss';
import ImageComponent from "../Ui/ImageComponent.js";

const InstagramFeed = () => {
    return <div className="insta-grid">
        <div className={"img-1"}>
            <ImageComponent alt={'instagram'} filename={'recut.jpg'}/>
        </div>
        <div className={"img-2"}>
            <ImageComponent alt={'instagram'} filename={'1.jpeg'}/>
        </div>
        <div className={"img-3"}>
            <ImageComponent alt={'instagram'} filename={'3.webp'}/>
        </div>
        <div className={"img-4"}>
            <ImageComponent alt={'instagram'} filename={'4.webp'}/>
        </div>
        <div className={"img-5"}>
            <ImageComponent alt={'instagram'} filename={'5.webp'}/>
        </div>
        <div className={"img-6"}>
            <ImageComponent alt={'instagram'} filename={'6.webp'}/>
        </div>
        <div className={"img-7"}>
            <ImageComponent alt={'instagram'} filename={'7.webp'}/>
        </div>
    </div>
}

export default InstagramFeed;
