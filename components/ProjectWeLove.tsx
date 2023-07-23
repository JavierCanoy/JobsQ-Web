import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
import { projects } from "@/data/projects";

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
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="projectwelove">
      <div className="md:flex md:my-4 lg:justify-between lg:mx-2 2xl:mx-10 ">
        <div className="mx-4 ">
          <p className=" font-OpenSans font-light text-xl my-2  text-gray-500">
            PORTFOLIO
          </p>

          <h1 className=" text-4xl  md:text-5xl font-Poppins font-bold ">
            Projects we love
          </h1>
        </div>

        <div className="flex mx-4 gap-5 font-semibold  justify-center my-5 md:mb-0 md: items-end  lg:mx-10   ">
          <div className="prev-button  ">
            <button
              aria-label="prev"
              className={
                isPrevClicked
                  ? "  text-lg  font-OpenSans  font-semibold   text-gray-700 "
                  : "   text-lg  font-OpenSans  font-semibold    text-red-700"
              }
              onClick={previousButton}
            >
              PREV
            </button>
          </div>
          <div className="identificator my-3 ">
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
          <div className="nex-button">
            <button
              aria-label="next"
              className={
                isNextClicked
                  ? "text-lg  font-OpenSans  font-semibold   text-gray-700 "
                  : "text-lg  font-OpenSans  font-semibold    text-red-700"
              }
              onClick={nextButton}
            >
              NEXT
            </button>
          </div>
          <div className=" button-viewAll hidden md:block lg:mx-4 ">
            <Link href="/viewall" aria-label="viewl-all">
              <button
                aria-label="viewl-all"
                className=" text-red-600  font-OpenSans  text-sm sm:text-base font-semibold"
              >
                View all
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" mb-10  ">
        <Slider ref={sliderRef} {...settings} className="  ">
          {projects.map((project) => (
            <div key={project.id} className="px-2   " aria-hidden="false">
              <Link href="/" aria-label="projects">
                <Image
                  src={project.linkImg}
                  alt={`Image ${project.id}`}
                  height={480}
                  width={401}
                  className=" object-fill  "
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
