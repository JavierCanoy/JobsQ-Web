import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
import { clientdata } from "../data/clientdata";

export default function Clients() {
  const sliderRef = useRef(null);

  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isPrevClicked, setIsPrevClicked] = useState(true);

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
    arrows: false,
    slidesToShow: 1,
  };
  return (
    <div className="    bg-gradient-to-t from-costumeOrange to-costumeRed  h-screen w-screen ">
      <div className="">
        <Slider ref={sliderRef} {...settings} className="  ">
          {clientdata.map((clientdata: any) => (
            <div key={clientdata.id} className=" md:mt-28 ">
              <div className=" w-screen p-2 pt-10 md:pt-2 md:px-4 text-center">
                <h1 className="  text-3xl  md:text-5xl   font-Poppins font-bold text-white ">
                  {clientdata.say}
                </h1>
              </div>
              <div className="flex justify-center ">
                <Link href="/" className="  ">
                  <Image
                    src={clientdata.linkImg}
                    alt={`Image ${clientdata.id}`}
                    width={200}
                    height={200}
                    className="duration-300 hover:scale-95  "
                  />
                </Link>
              </div>
              <p className="    px-2 md:px-10 md:max-w-xl md:m-auto  text-center text-white text-base md:text-2xl font-OpenSans ">
                {clientdata.message}
              </p>
              <p className="text-white text-center pt-10 font-bold text-lg font-OpenSans ">
                {clientdata.name}
              </p>
              <p className="text-white text-center text-sm font-OpenSans">
                {clientdata.possition}
              </p>
            </div>
          ))}
        </Slider>

        {/* buttons */}
        <div className="flex p-4 lg:py-10  justify-center font-semibold ">
          <div className="prev-button  ">
            <button
              className={
                isPrevClicked
                  ? " text-lg  font-OpenSans  font-semibold   text-gray-700 "
                  : " text-lg  font-OpenSans  font-semibold    text-red-700"
              }
              onClick={previousButton}
            >
              PREV
            </button>
          </div>

          <div className="identificator my-2 mx-2  ">
            <div
              className={`relative justify-centerrelative bg-gray-700 w-20 rounded-full`}
            >
              <div
                className={
                  isPrevClicked
                    ? " bg-red-700 rounded-full p-1 w-10  "
                    : " bg-red-700 rounded-full p-1 w-10 "
                }
              ></div>
            </div>
          </div>

          <div className=" button-next">
            <button
              className={
                isNextClicked
                  ? " text-lg  font-OpenSans  font-semibold   text-gray-700 "
                  : "   text-lg  font-OpenSans  font-semibold   text-red-700"
              }
              onClick={nextButton}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
