"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SwipeableViews from "react-swipeable-views";

const CarouselComponent = () => {
  return (
    <Carousel
      axis="vertical"
      emulateTouch={true}
      infiniteLoop={true}
      showArrows={false}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      <div>
        <SwipeableViews>
          <div>
            <img className="h-full" src="assets/1.jpg" />
          </div>
          <div className="bg-[#19284C] h-full text-white">
            <p className="pt-4">INFO DE ROPA</p>
          </div>
        </SwipeableViews>
      </div>
      <div>
        <SwipeableViews>
          <div>
            <img className="h-full" src="assets/2.jpg" />
          </div>
          <div className="bg-[#19284C] h-full text-white">
            <p className="pt-4">INFO DE ROPA</p>
          </div>
        </SwipeableViews>
      </div>

      <div>
        <SwipeableViews>
          <div>
            <img className="h-full" src="assets/3.jpg" />
          </div>
          <div className="bg-[#19284C] h-full text-white">
            <p className="pt-4">INFO DE ROPA</p>
          </div>
        </SwipeableViews>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
