import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const DESKTOP_SLIDES = 3;
const MOBILE_SLIDES = 1;

const responsive = {
    desktop: {
        breakpoint: { max: 9999, min: 486 },
        items: DESKTOP_SLIDES,
        slidesToSlide: 1, // optional, default to 1.
        partialVisibilityGutter: 0,
    },
    mobile: {
        breakpoint: { max: 486, min: 0 },
        items: 1,
        slidesToSlide: MOBILE_SLIDES, // optional, default to 1.
        partialVisibilityGutter: 40,
    },
};

const CustomDot = ({ onClick, index, active, setCurrentSlide }) => {
    if (active) {
        setCurrentSlide(index);
    }

    return (
        <button
            className={`py-3 w-full cursor-pointer`}
            aria-label={`Ir al ítem ${index + 1}`}
            onClick={onClick}
        >
            <div
                className={`w-full h-0.5 bg-neutral-300 relative ${index === 0 ? 'index-dot' : ''}`}
            ></div>
        </button>
    );
};

const BlindsCarousel = ({ children }) => {
    const ref = React.useRef();
    const [currentSlide, setCurrentSlide] = React.useState(0);
    return (
        <div
            className="relative pb-6 overflow-x-hidden carousel-container"
            style={{ '--slide-percentage': `${currentSlide * 100}%` }}
            data-slides={children.length}
        >
            <Carousel
                ref={ref}
                renderButtonGroupOutside
                arrows={true}
                ssr
                responsive={responsive}
                draggable={false}
                infinite
                renderDotsOutside
                showDots={true}
                customDot={<CustomDot setCurrentSlide={setCurrentSlide} />}
                itemClass="px-2"
                dotListClass="!px-2"
                partialVisible={true}
            >
                {children}
            </Carousel>
        </div>
    );
};

export default BlindsCarousel;
