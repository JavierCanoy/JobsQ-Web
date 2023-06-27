import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
import { projects } from "@/pages/data/projects";

export default function ProjectWeLove() {
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isPrevClicked, setIsPrevClicked] = useState(true);

  const sliderRef = useRef(null);

  const nextButton = () => {
    if (sliderRef.current) {
      setIsNextClicked(true);
      setIsPrevClicked(false);
      (sliderRef.current as any).slickNext();
    }
  };

  const previousButton = () => {
    if (sliderRef.current) {
      setIsNextClicked(false);
      setIsPrevClicked(true);
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
    <div id="projectwelove">
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
              className={
                isPrevClicked
                  ? " mx-10 text-lg  font-OpenSans  font-semibold   text-gray-700 "
                  : " mx-10  text-lg  font-OpenSans  font-semibold    text-red-700"
              }
              onClick={previousButton}
            >
              PREV
            </button>
          </div>
          <div className=" mx-10 my-3 ">
            <div
              className={`relative justify-centerrelative bg-gray-700 w-20 rounded-full`}
            >
              <div
                className={
                  isPrevClicked
                    ? " bg-red-700 rounded-full p-1 w-10  ml-10 "
                    : " bg-red-700 rounded-full p-1 w-10 mr-10"
                }
              ></div>
            </div>
          </div>
          <div className=" button-next">
            <button
              className={
                isNextClicked
                  ? " text-lg  font-OpenSans  font-semibold  mx-10 text-gray-700 "
                  : "   text-lg  font-OpenSans  font-semibold  mx-10  text-red-700"
              }
              onClick={nextButton}
            >
              NEXT
            </button>
          </div>
          <div className=" button-viewAll ml-20">
            <Link href="/viewall">
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
