import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  if (active) {
    return (
      <div
        style={{
          border: "black solid 1px",
          backgroundColor: "black",
          height: "8px",
          width: "10px",
          borderRadius: "5px",
          margin: "0 5px",
        }}
      />
    );
  } else {
    return (
      <div
        onClick={() => {
          onClick();
        }}
        style={{
          border: "gray solid 1px",
          height: "8px",
          width: "8px",
          margin: "0 4px",
          borderRadius: "50%",
        }}
      />
    );
  }
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      style={{
        // position: "absolute",
        // right: "unset",
        // bottom: "-6.5px",
        // marginLeft: "calc(50% + 115px)",
        cursor: "pointer",
        fontWeight: "bold",
        zIndex: "1",
      }}
      onClick={() => onClick()}
    >
      &gt;
    </button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      style={{
        // position: "absolute",
        // left: "unset",
        // bottom: "-6.5px",
        // marginLeft: "calc(50% - 125px)",
        cursor: "pointer",
        fontWeight: "bold",
        zIndex: "1",
      }}
      onClick={() => onClick()}
    >
      &lt;
    </button>
  );
};

const BlindsDotsCarousel = ({ children }) => {
  const ref = React.useRef();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleOnChange = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="relative pb-6 overflow-x-hidden carousel-container">
      <Carousel
        ref={ref}
        renderButtonGroupOutside
        arrows={false}
        ssr
        responsive={responsive}
        draggable={false}
        infinite
        sliderClass="mb-12"
        showDots={false}
        itemClass="px-2"
        partialVisible={true}
        afterChange={handleOnChange}
      >
        {children}
      </Carousel>
      <div className="flex justify-center items-center mt-2">
        <CustomLeftArrow onClick={() => ref.current.previous()} />
        <div className="flex">
          {React.Children.map(children, (child, index) => (
            <CustomDot key={index} index={index} active={currentSlide === index} onClick={() => ref.current.goToSlide(index)} setCurrentSlide={setCurrentSlide} />
          ))}
        </div>
        <CustomRightArrow onClick={() => ref.current.next()} />
      </div>
    </div>
  );
};

export default BlindsDotsCarousel;
