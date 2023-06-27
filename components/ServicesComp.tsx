import React, { useState } from "react";
import { servicescontent } from "../pages/data/servicescontent";
export default function ServicesComp() {
  const [selectedButton, setSelectedButton] = useState(0);
  const pagenumber: number = selectedButton;

  const handleButtonClick = (button: any) => {
    setSelectedButton(button);
  };
  return (
    <div className="content-services">
      <div className="flex flex-wrap justify-around mx-32 px-16 pt-14">
        <div className="flex items-center">
          <button
            onClick={() => handleButtonClick(0)}
            className={` py-6 px-10 rounded font-bold ${
              selectedButton === 0
                ? "text-white bg-gradient-to-t from-costumeOrange to-costumeRed "
                : "text-black"
            }`}
          >
            Full Software Development
          </button>
        </div>

        <div className="flex items-center">
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
        <div className="flex items-center">
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
        <div className="flex items-center">
          <div>
            <button
              onClick={() => handleButtonClick(3)}
              className={`py-6 px-10 rounded font-bold  ${
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
              className="flex justify-center gap-52 pt-16  "
            >
              <div className="w-[562px]">
                <p className="text-5xl font-Poppins font-bold">
                  {servicescontent.services}
                </p>
              </div>
              <div className=" w-[702px]">
                <p className="text-xl font-OpenSans">
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
