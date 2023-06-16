import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class FocusOnSelect extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
    };
    return (
      <div>
        <h2>FocusOnSelect</h2>
        <div>Click on any slide to select and make it current slide</div>
        <Slider {...settings}>
          <div className=" ">
            <h3 className="mx-10 border-2 border-red-400 text-center">1</h3>
          </div>
          <div>
            <h3 className=" border-2 border-red-400 text-center">2</h3>
          </div>
          <div>
            <h3 className=" border-2 border-red-400 text-center">3</h3>
          </div>
          <div>
            <h3 className=" border-2 border-red-400 text-center">4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
