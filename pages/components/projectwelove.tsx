import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
import { projects } from "@/pages/data/projects";

export default function Portfolio() {
  const [marginLeft, setMarginLeft] = useState("mr-10");
  const [nextFontColor, setNextFontColor] = useState("text-gray-700");
  const [prevFontColor, setPrevFontColor] = useState("text-red-700");

  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      setMarginLeft("mr-10");
      setNextFontColor("text-gray-700");
      setPrevFontColor("text-red-700");
      (sliderRef.current as any).slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      setMarginLeft("ml-10");
      setNextFontColor("text-red-700");
      setPrevFontColor("text-gray-700");
      (sliderRef.current as any).slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <div className="flex justify-around pt-40 mt-40   mb-20">
        <div className="">
          <span className=" font-OpenSans font-light text-xl  text-gray-500">
            PORTFOLIO
          </span>

          <h1 className=" text-5xl font-Poppins font-bold pt-7">
            Projects we love
          </h1>
        </div>
        <div className="flex  self-end  font-semibold ">
          <div className="prev-button  ">
            <button
              className={`button text-lg  font-OpenSans  font-semibold  ${prevFontColor} `}
              onClick={previous}
            >
              PREV
            </button>
          </div>
          <div className=" mx-10 my-3 ">
            <div
              className={`relative justify-centerrelative bg-gray-700 w-20 rounded-full`}
            >
              <div
                className={` bg-red-700 rounded-full p-1 w-10 ${marginLeft}`}
              ></div>
            </div>
          </div>
          <div className=" button-next">
            <button
              className={`button text-lg font-OpenSans  font-semibold  ${nextFontColor} `}
              onClick={next}
            >
              NEXT
            </button>
          </div>
          <div className=" button-viewAll ml-20">
            <Link href="/components/viewall">
              <button className=" text-red-500  font-OpenSans  font-semibold">
                View all
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} className="mb-20  ">
        {projects.map((project) => (
          <div key={project.id} className=" mx-10 ">
            <Link href="/">
              <Image
                src={project.linkImg}
                alt={`Image ${project.id}`}
                height={480}
                width={401}
                className="duration-300 hover:scale-95  "
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
