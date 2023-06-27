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
    centerMode: true,
  };
  return (
    <div className="main-clients">
      <div className=" justify-center p-28 mt-10 bg-gradient-to-t from-costumeOrange to-costumeRed">
        <Slider ref={sliderRef} {...settings} className=" mb-20  ">
          {clientdata.map((clientdata: any) => (
            <div key={clientdata.id} className="pt-16 ">
              <h1 className=" text-center text-5xl font-Poppins font-bold text-white ">
                {clientdata.say}
              </h1>
              <div className=" flex justify-center">
                <Link href="/" className=" flex justify-center mt-10">
                  <Image
                    src={clientdata.linkImg}
                    alt={`Image ${clientdata.id}`}
                    width={200}
                    height={200}
                    className="duration-300 hover:scale-95  "
                  />
                </Link>
              </div>
              <div className=" flex flex-col justify-center text-center  ">
                <div className=" ">
                  <p className="   w-[550px] mx-auto text-center text-white text-2xl font-OpenSans ">
                    {clientdata.message}
                  </p>
                  <p className="text-white pt-12 font-bold text-lg font-OpenSans ">
                    {clientdata.name}
                  </p>
                  <p className="text-white  text-sm font-OpenSans">
                    {clientdata.possition}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* buttons */}
        <div className="flex   justify-center font-semibold ">
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
        </div>
      </div>
    </div>
  );
}
