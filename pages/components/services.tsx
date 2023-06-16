import React, { useState } from "react";
import ContentServices from "../data/content";

export default function Services() {
  const [selectedButton, setSelectedButton] = useState("1");

  const handleButtonClick = (button: any) => {
    setSelectedButton(button);
  };
  return (
    <div className="content-services">
      <div className="flex flex-wrap justify-around mx-32 px-16 pt-14">
        <div className="flex items-center">
          <button
            onClick={() => handleButtonClick("1")}
            className={` py-6 px-10 rounded font-bold ${
              selectedButton === "1"
                ? "text-white bg-gradient-to-t from-costumeOrange to-costumeRed "
                : "text-black"
            }`}
          >
            Full Software Development
          </button>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => handleButtonClick("2")}
            className={`py-6 px-10 rounded font-bold ${
              selectedButton === "2"
                ? "text-white bg-gradient-to-t from-costumeOrange to-costumeRed "
                : "text-black"
            }`}
          >
            Mobile App Development
          </button>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => handleButtonClick("3")}
            className={`py-6 px-10 rounded font-bold ${
              selectedButton === "3"
                ? "text-white bg-gradient-to-t from-costumeOrange to-costumeRed"
                : "text-black"
            }`}
          >
            Search Engine Optimization (SEO)
          </button>
        </div>
        <div className="flex items-center">
          <div>
            <button
              onClick={() => handleButtonClick("4")}
              className={`py-6 px-10 rounded font-bold  ${
                selectedButton === "4"
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
      <ContentServices selectedButton={selectedButton} />
    </div>
  );
}
