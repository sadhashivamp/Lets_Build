import React from "react";
import "./ImageSlider.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function ImageSlider() {
  return (
    <div className="Slider_container">
      <AliceCarousel
        autoPlayInterval={1500}
        animationDuration={1000}
        autoPlay={true}
        infinite={true}
        disableButtonsControls
        stopOnHover={false}
      >
        <img
          className="sldr-img"
          src="https://www.cammconstruction.com/wp-content/uploads/2018/12/building-construction-sunset.jpg"
          alt=""
        />
        <img
          className="sldr-img"
          src="https://www.build-review.com/wp-content/uploads/2019/12/construction-2.jpg"
          alt=""
        />
        <img
          className="sldr-img"
          src="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/09/Construction-material-management-system-on-project-sites-1068x427.png"
          alt=""
        />
        <img
          className="sldr-img"
          src="https://www.axisbank.com/images/default-source/progress-with-us_new/home-construction-loans.jpg"
          alt=""
        />
      </AliceCarousel>
    </div>
  );
}
