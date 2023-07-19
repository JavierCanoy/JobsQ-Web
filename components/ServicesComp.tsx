import React, { useState } from "react";
import { servicescontent } from "../data/servicescontent";
export default function ServicesComp() {
  const [selectedButton, setSelectedButton] = useState(0);
  const pagenumber: number = selectedButton;

  const handleButtonClick = (button: number) => {
    setSelectedButton(button);
  };
  return (
    <div className="content-services">
      <div className="  mx-4 my-10 lg:grid lg:grid-cols-12 lg:mx-10">
        <div className=" lg:col-span-3 flex justify-center">
          <button
            onClick={() => handleButtonClick(0)}
            className={` py-4 px-10 rounded font-bold ${
              selectedButton === 0
                ? "text-white bg-gradient-to-t from-costumeOrange to-costumeRed "
                : "text-black"
            }`}
          >
            Full Software Development
          </button>
        </div>

        <div className=" lg:col-span-3 flex justify-center">
          <button
            onClick={() => handleButtonClick(1)}
            className={`py-6 px-10 rounded font-bold ${
              selectedButton === 1
                ? "text-white bg-gradient-to-t from-costumeOrange to-costumeRed "
                : "text-black"
            }`}
          >
            Mobile App Development
          </button>
        </div>
        <div className=" lg:col-span-3 flex justify-center">
          <button
            onClick={() => handleButtonClick(2)}
            className={`py-6 px-10 rounded font-bold ${
              selectedButton === 2
                ? "text-white bg-gradient-to-t from-costumeOrange to-costumeRed"
                : "text-black"
            }`}
          >
            Search Engine Optimization (SEO)
          </button>
        </div>
        <div className=" lg:col-span-3 flex justify-center">
          <div>
            <button
              onClick={() => handleButtonClick(3)}
              className={`py-6 px-14 rounded font-bold  ${
                selectedButton === 3
                  ? "text-white bg-gradient-to-t from-costumeOrange to-costumeRed"
                  : "text-black"
              }`}
            >
              Software Development Outsourcing
            </button>
          </div>
        </div>
      </div>
      {/* Content-servecis */}
      {servicescontent.map((servicescontent) => {
        if (servicescontent.id === pagenumber) {
          return (
            <div
              key={servicescontent.id}
              className=" gap-52 my-10 lg:grid lg:grid-cols-2 mx-auto  xl:max-w-8xl  xl:mx-20  "
            >
              <div className=" mx-4 ">
                <p className=" text-3xl md:text-5xl md:text-center lg:text-left md:mb-10 lg:mx-10  font-Poppins font-bold">
                  {servicescontent.services}
                </p>
              </div>
              <div className=" mx-4 my-4   ">
                <p className=" text-base md:text-xl md:text-center lg:text-left  font-OpenSans">
                  {servicescontent.content}
                </p>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
