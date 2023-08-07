import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/ourworks";
import { useState } from "react";

export default function OurWork() {
  const [search, setSearch] = useState("all");

  const value = (type: String) => {
    if (type === "Branding") {
      setSearch("Branding");
    } else if (type === "UI-UX") {
      setSearch("UI-UX");
    } else if (type === "Marketing") {
      setSearch("Marketing");
    } else if (type === "all") {
      setSearch("all");
    }
  };
  return (
    <div id="ourwork" className="main pt-120 ">
      <div className="porttolfio">
        <div className="first text-center  m-4 md:py-8 lg:max-w-2xl lg:mx-auto ">
          <h1 className="text-xl text-gray-600 font-OpenSans font-light py-4 ">
            PORTFOLIO
          </h1>
          <p className=" text-3xl md:text-5xl font-Poppins font-bold ">
            People don’t buy what you do, they buy why you do it.
          </p>
        </div>
        <div className="menu py-4">
          <div className="  flex justify-center text-base  gap-3 md:text-2xl md:gap-10 xl:gap-12  font-OpenSans">
            <button
              aria-label="all"
              className=" hover:text-red-700"
              onClick={() => value("all")}
            >
              All
            </button>
            <button
              aria-label="branding"
              className="  hover:text-red-700"
              onClick={() => value("Branding")}
            >
              Branding
            </button>

            <button
              aria-label="ui-ux"
              className=" hover:text-red-700"
              onClick={() => value("UI-UX")}
            >
              UI/UX
            </button>
            <button
              aria-label="marketing"
              className=" hover:text-red-700"
              onClick={() => value("Marketing")}
            >
              Marketing
            </button>
          </div>
          <div className=" pt-10 2xl:pt-80 float-left  ">
            <Link href="# " aria-label="kwowmore">
              <button
                aria-label="kwowmore"
                className=" flex items-center text-white border-y-2 hover:border-red-700   hover:text-red-700 text-xl bg-red-600 py-4 rounded-r-full hover:bg-white hover:border-red-600border-2   "
              >
                <p className="text-base font-semibold">KNOW MORE</p>
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

          <div className=" mt-28 mx-2 flex  md:grid md:justify-items-center justify-center ">
            <div className=" grid grid-cols-12  ">
              {works
                .filter((work) => {
                  return search === "all" ? work : work.type.includes(search);
                })
                .map((work) => (
                  <div
                    key={work.id}
                    className=" relative  cursor-pointer col-span-12 lg:col-span-6 lg:mx-5 2xl:col-span-4    hover:drop-shadow-xl   group     my-4 md:my-6  "
                  >
                    <div className="  ">
                      <Image
                        src={work.linkImg}
                        alt={`Image ${work.id}`}
                        height={480}
                        width={401}
                        className=" object-cover "
                      />
                    </div>
                    <div className=" absolute  flex justify-between bg-white  inset-x-0 bottom-0 rounded-b-lg    opacity-0 transition-opacity group-hover:opacity-100  ">
                      <div className=" flex items-center">
                        <div className="mx-5 ">
                          <p className=" font-bold text-lg ">{work.version}</p>
                          <p className=" text-base text-gray-600 ">
                            {work.type}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Link
                          href="#"
                          aria-label="icon"
                          className=" bg-violet-400 p-6 text-white rounded-br-lg"
                        >
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
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
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
            <Link href="/" aria-label="submit">
              <button
                aria-label="submit"
                className=" text-sm text-white bg-transparent hover:bg-red-600text-black-700 font-semibold hover:text-white border-2 px-12 p-3 border-white hover:border-transparent rounded-full"
              >
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
