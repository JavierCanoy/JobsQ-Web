import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/ourworks";
import { useState } from "react";

export default function OurWork() {
  const [search, setSearch] = useState("");

  const value = (type: String) => {
    if (type === "branding") {
      setSearch("branding");
    } else if (type === "ui-ux") {
      setSearch("ui-ux");
    } else if (type === "marketing") {
      setSearch("marketing");
    } else if (type === "all") {
      setSearch("");
    }
  };
  return (
    <div id="ourwork" className="main pt-[7.5rem] ">
      <div className="porttolfio">
        <div className="first text-center  m-4 md:py-8 lg:max-w-2xl lg:mx-auto ">
          <h1 className="text-xl text-gray-400 font-OpenSans font-light py-4 ">
            PORTFOLIO
          </h1>
          <p className=" text-3xl md:text-5xl font-Poppins font-bold ">
            People don’t buy what you do, they buy why you do it.
          </p>
        </div>
        <div className="menu py-4">
          <div className="  flex justify-center text-base  gap-3 md:text-2xl md:gap-10 xl:gap-12  font-OpenSans">
            <button
              className=" hover:text-red-700"
              onClick={() => value("all")}
            >
              All
            </button>
            <button
              className="  hover:text-red-700"
              onClick={() => value("branding")}
            >
              Branding
            </button>

            <button
              className=" hover:text-red-700"
              onClick={() => value("ui-ux")}
            >
              UI/UX
            </button>
            <button
              className=" hover:text-red-700"
              onClick={() => value("marketing")}
            >
              Marketing
            </button>
          </div>
          <div className="pt-10 2xl:pt-80 float-left  ">
            <Link href="#">
              <button className=" flex items-center text-white   hover:text-red-700 text-xl bg-red-500  py-4 rounded-r-full hover:bg-white hover:border-red-500 border-2   ">
                <span className="text-base font-semibold">KNOW MORE</span>
                <div className="px-8">
                  <svg
                    className="w-5 h-5  "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
          </div>

          <div className="   pb-36  py-10 mx-auto  grid grid-cols-12  w-full lg:max-w-5xl xl:max-w-7xl    ">
            {/* images */}
            {works
              .filter((work) => {
                return search === "" ? work : work.type.includes(search);
              })
              .map((work) => (
                <div className=" grid justify-items-center  col-span-12 mx-2 md:mx-0 lg:col-span-6 xl:col-span-4 my-5  ">
                  <div className="">
                    <Link href="#">
                      <Image
                        src={work.linkImg}
                        alt={`Image ${work.id}`}
                        height={480}
                        width={401}
                        className="duration-300 hover:scale-95 object-fill  "
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* end-Portfolio */}

      {/* get-in-touch */}
      <div className="main py-4 grid grid-cols-12 md:h-screen  md:content-center  bg-gradient-to-t from-costumeOrange to-costumeRed">
        <div className="first col-span-12 w-full p-4 md:col-span-6  md:my-auto xl:mx-auto xl:max-w-lg  ">
          <h1 className="text-xl  text-white font-OpenSans font-light">
            GET IN TOUCH
          </h1>
          <p className="text-5xl font-Poppins font-bold py-4 text-white ">
            Let’s start with your dream project
          </p>
          <p className="  text-xl font-OpenSans py-2	text-white ">
            We help our clients make realize their most
          </p>
          <p className="text-xl font-bold font-OpenSans  py-2 text-white ">
            +1 123 456 7890
          </p>
        </div>
        <form className="second col-span-12 px-4 w-full xl:max-w-lg md:col-span-6">
          <input
            className="py-4  text-base leading-tight focus:outline-none border-b-2 pt-10  w-full bg-transparent  placeholder:text-white "
            type="text"
            aria-label="Email"
            placeholder="Email "
          />
          <input
            className="py-6 text-base  leading-tight focus:outline-none border-b-2   pt-14 w-full bg-transparent  placeholder:text-white  "
            type="text"
            aria-label="Full name"
            placeholder="Full name"
          />
          <input
            className="py-10  text-base leading-tight focus:outline-none border-b-2 w-full bg-transparent placeholder:text-white "
            type="text"
            aria-label="Message"
            placeholder="Message"
          />
          <div className="pt-4 ">
            <Link href="/">
              <button className=" text-sm text-white bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white border-2 px-12 p-3 border-white hover:border-transparent rounded-full">
                SUBMIT
              </button>
            </Link>
          </div>
        </form>
      </div>
      {/* end-get-in-touch */}
    </div>
  );
}
