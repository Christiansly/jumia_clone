import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import picture1 from './images/D8EE8848-A7F2-422C-AF54-01F195F2356A.jpeg';
import picture2 from "./images/EECE0D44-34AE-40D9-B5A5-B24553030DA1.jpeg";
import picture3 from "./images/s-generic.jpg";
import picture4 from "./images/s-deals-of-the-day.jpg";
import './Carousel.css';
export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel showThumbs={false}>
        <div className="carousel">
          <img src={picture1} alt=""/>
        </div>
        <div className="carousel">
          <img src={picture2} alt=""/>
        </div>
        <div className="carousel">
          <img src={picture3} alt=""/>
        </div>
        <div className="carousel">
          <img src={picture4} alt=""/>
        </div>
      </Carousel>
    );
  }
}
