import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import './ImageCarousel.scss';
//images
import ImageComponent from "../Ui/ImageComponent.js";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        paritialVisibilityGutter: 150
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        paritialVisibilityGutter: 0
    }
};

const CustomDot = ({ index, carouselState, dots }) => {
    const { currentSlide } = carouselState;
    const activeDot = (index) => {
        if (Math.floor(currentSlide / 4) === index) {
            return true
        } else {
            return false
        }
    }

    return <li style={{ display: index >= dots ? 'none' : 'block' }}>
        <button style={{
            background: activeDot(index) ? "#1D0F41" : "#C0C0C1",
            width: 8,
            height: 8,
            borderRadius: '50%',
            marginRight: 6,
            padding: 0
        }} />
    </li>
};

const ImageCarousel = ({  images, dots }) => {

    //todo resize all equals img
    return <Carousel ssr={true} draggable={true} partialVisbile={false} showDots={true}
                     dotListClass="custom-dots" customDot={<CustomDot dots={dots}/>}
                     containerClass="our-clients-carousel" slidesToSlide={1}
                     responsive={responsive}
    >
        {images?.map((item, index) => {
            return <ImageComponent alt={'instagram'} key={index} filename={item} />

        })}
    </Carousel>
}


export default ImageCarousel;
