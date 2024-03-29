import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clients from "@/components/Clients";
import ProjectWeLove from "./ProjectWeLove";
import Form from "./Form";
import SubscribeForm from "./SubscribeForm";

function Main() {
  const formClass = "second  col-span-12 px-4 w-full xl:max-w-lg md:col-span-6";
  const emailClass =
    "py-4  text-base leading-tight focus:outline-none border-b-2 pt-10  w-full ";
  const fullNameClass =
    "py-6 text-base  leading-tight focus:outline-none border-b-2   pt-14 w-full  ";
  const messageClass =
    "py-10  text-base leading-tight focus:outline-none border-b-2 w-full  ";
  const buttonClass =
    " text-sm text-red-600 bg-transparent hover:bg-red-600 text-black-700 font-semibold hover:text-white border-2 px-12 p-3 border-red-600 hover:border-transparent rounded-full";
  return (
    <div id="home" className="main   ">
      <div className="  grid grid-cols-12 md:h-screen lg:h-auto     ">
        <div className=" pt-28 lg:pt-32    col-span-12 mx-2 my-auto   xl:pt-0 md:col-span-6    xl:grid xl:justify-items-end ">
          <div className=" px-4 md:w-2/3 xl:mx-20 ">
            <p className="text-xl uppercase py-2 text-gray-600 font-OpenSans font-light">
              Our Goal
            </p>
            <h1 className="text-5xl lg:text-7xl font-Poppins font-bold ">
              Better products for your users
            </h1>
            <p className="text-xl font-OpenSans  text-gray-600 py-4">
              We help our clients realize their most important business goals.
            </p>
          </div>
          <div className="gap-16 xl:flex xl:w-full xl:justify-center   lg:py-2 xl:mt-14       ">
            <div className=" flex justify-center ">
              <button
                aria-label="GETINTOUCH"
                type="button"
                className="place-self-center px-11 p-3  text-white bg-gradient-to-t from-costumeOrange to-costumeRed hover:from-white hover:to-white hover:text-red-700 hover:border-red-700 border-2 text-xl rounded-full font-semibold text-center   "
              >
                GET IN TOUCH
              </button>
            </div>
            <div>
              <div className=" flex  justify-center py-2 ">
                <div className=" flex">
                  <p className="  px-2 self-center font-OpenSans font-semibold">
                    WATCH VIDEO
                  </p>
                </div>
                <div>
                  <button
                    aria-label="icon"
                    type="button"
                    className=" text-white  bg-red-700  border-2 hover:bg-white hover:text-red-700 hover:border-red-700  rounded-full text-sm px-3 py-3 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-auto   col-span-12 md:h-screen lg:h-full   md:col-span-6 overflow-y-hidden ">
          <Image
            src="/images/home1/hero.png"
            alt="hero"
            className="object-cover md:h-screen lg:h-auto   w-full "
            width={788}
            height={957}
          />
        </div>
      </div>
      {/* we-help-with */}
      <div className="  2xl:h-screen  grid grid-cols-12   justify-center  w-full  bg-gradient-to-t   from-costumeOrange to-costumeRed text-white ">
        <div className="first xl:my-auto 2xl:mx-40     p-4 col-span-12 md:mx-auto 2xl:col-span-6 ">
          <h1 className="text-2xl font-OpenSans font-light ">WE HELP WITH</h1>
          <p className="md:text-7xl  text-5xl font-Poppins font-bold pb-10 pt-2">
            Building <br /> better
            <br /> solutions
          </p>
            <button 
              aria-label="OurServices"
              className=" flex text-base font-semibold uppercase  p-3  items-center  bg-transparent text-white hover:text-red-600 hover:bg-white text-black-700    border-2   border-white hover:border-transparent rounded-full"
            >
              <p className="px-5"> Our Services </p>
              <svg
                className="w-5 h-5 ml-6 mx-2  "
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
            </button>
        </div>

        <div className=" second content-center grid  col-span-12 md:mx-auto   xl:grid xl:grid-cols-2  2xl:col-span-6  ">
          <div className="  my-5 mx-4  p-8 h-231 md:w-361 hover:bg-gradient-to-r from-costumeBrnBg to-costumeRedBg   rounded-lg  bg-costumeRedBg">
            <Image
              src="/images/icon/first.png"
              width={40}
              height={60.25}
              alt="Myimage"
              className=" pb-3"
            />
            <h1 className=" font-Poppins font-bold text-xl">Design</h1>
            <p className=" text-base pt-3">
              Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
              dolor amet lorem.
            </p>
          </div>

          <div className=" my-5 mx-4  p-8  h-231 md:w-361   rounded-lg hover:bg-gradient-to-r from-costumeBrnBg to-costumeRedBg  bg-costumeRedBg">
            <Image
              src="/images/icon/second.png"
              width={40}
              height={60.25}
              alt="Myimage"
              className=" pb-2"
            />
            <h1 className="font-Poppins font-bold text-xl">Development</h1>
            <p className=" text-base pt-2">
              Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
              dolor amet lorem.
            </p>
          </div>

          <div className="  order-4 xl:order-none  my-5  mx-4 p-8 h-231 md:w-361 rounded-lg  bg-gradient-to-r from-costumeBrnBg to-costumeRedBg  hover:from-costumeRedBg hover:to-costumeRedBg  ">
            <h1 className=" font-Poppins font-bold text-xl ">
              Project management
            </h1>
            <p className=" text-base pt-2 pb-5 md:pb-10">
              Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
              dolor amet lorem.
            </p>
              <Link href="/"
                aria-label="Knowmore"
                className="flex  items-center    font-semibold  gap-10 hover:text-red-700"
              >
                Know more
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

          <div className="my-5 mx-4   p-8  h-231 md:w-361  rounded-lg  hover:bg-gradient-to-r from-costumeBrnBg to-costumeRedBg bg-costumeRedBg">
            <Image
              src="/images/icon/third.png"
              width={40}
              height={60.25}
              alt="Myimage"
              className=" pb-2"
            />
            <h1 className="font-Poppins font-bold text-xl">Testing & QA</h1>
            <p className=" text-base pt-2">
              Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
              dolor amet lorem.
            </p>
          </div>
        </div>
      </div>
      {/* end-we-help-with */}

      {/* design1  */}
      <div className="design  grid grid-cols-12 lg:h-screen  lg:content-center xl:mt-10    ">
        <div className="first-image col-span-12 lg:col-span-6 ">
          <div>
            <Image
              className=" rounded-r-lg shadow-lg object-cover xl:h-screen "
              src="/images/home1/team1.png"
              alt="team1"
              height={730}
              width={800}
            />
          </div>
        </div>
        <div className="first-content m-4 col-span-12 lg:col-span-6  xl:my-auto 2xl:w-4/6 2xl:mx-28 ">
          <div className="  ">
            <h2 className="text-5xl font-Poppins font-bold">
              Design solutions to improve products
            </h2>
            <p className=" font-OpenSans text-2xl pt-10 pb-7 text-gray-600 ">
              We help our clients make realize their most Important business
              goals. We help our clients make realize their most Important
              business goals. business goals. We help our clients make realize
              their most Important business.
            </p>
          </div>
          <div className=" flex justify-center md:justify-start">
              <button
                aria-label="Knowmore"
                className="flex text-lg  p-3 uppercase items-center text-white bg-gradient-to-r from-costumeOrange to-costumeRed hover:from-white hover:to-white hover:text-red-600 border-2  border-costumeOrange hover:border-costume rounded-full"
              >
                <p className="px-5">KNOW MORE</p>
                <svg
                  className="w-5 h-5 ml-6 mx-2 "
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
              </button>
          </div>
        </div>
      </div>
      {/*end-design */}

      {/* design2  */}
      <div className="design  grid grid-cols-12 lg:h-screen lg:content-center    ">
        <div className="first-image col-span-12 lg:col-span-6  lg:order-2">
          <div className=" flex justify-end">
            <Image
              className=" rounded-r-lg shadow-lg object-cover "
              src="/images/home1/team1.png"
              alt="team1"
              height={730}
              width={800}
            />
          </div>
        </div>
        <div className="first-content m-4 col-span-12 lg:col-span-6  xl:my-auto 2xl:w-4/6 2xl:mx-52 ">
          <div className="  ">
            <h2 className="text-5xl font-Poppins font-bold">
              Design solutions to improve products
            </h2>
            <p className=" font-OpenSans text-2xl pt-10 pb-7 text-gray-600 ">
              We help our clients make realize their most Important business
              goals. We help our clients make realize their most Important
              business goals. business goals. We help our clients make realize
              their most Important business.
            </p>
          </div>
          <div className=" flex justify-center md:justify-start">
              <button
                aria-label="Knowmore"
                className="flex text-lg  p-3 uppercase items-center text-white bg-gradient-to-r from-costumeOrange to-costumeRed hover:from-white hover:to-white hover:text-red-600 border-2  border-costumeOrange hover:border-costume rounded-full"
              >
                <p className="px-5">KNOW MORE</p>
                <svg
                  className="w-5 h-5 ml-6 mx-2 "
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
              </button>
          </div>
        </div>
      </div>
      {/*end-design */}

      {/* projects-we-love */}
      <ProjectWeLove />
      {/*end- projects-we-love */}

      {/*  What do our clients   */}
      <Clients />
      {/* end-What do our clients   */}

      {/* Let’s start withyour dreamproject */}
      <div className="main-dreamproject grid grid-cols-12 md:h-screen  md:content-center md:mx-4">
        <div className="first col-span-12 w-full p-4 md:col-span-6  md:my-auto  xl:mx-auto xl:max-w-lg  ">
          <h1 className="text-xl  text-gray-600 font-OpenSans font-light">
            GET IN TOUCH
          </h1>
          <p className="text-5xl font-Poppins font-bold py-4 ">
            Let’s start with
            <br /> your dream <br />
            project
          </p>
          <p className="  text-xl font-OpenSans py-2	">
            We help our clients make realize their most
          </p>
          <p className="text-xl font-bold font-OpenSans  py-2">
            +1 123 456 7890
          </p>
        </div>
        {/* form */}
        <Form
          formClass={formClass}
          emailClass={emailClass}
          fullNameClass={fullNameClass}
          messageClass={messageClass}
          buttonClass={buttonClass}
        />
      </div>
      {/*end Let’s start withyour dreamproject */}

      {/* read-what-team */}
      <div className="main-read-what-team lg:h-screen w-full grid grid-cols-12">
        <div className=" col-span-12 p-4 md:p-8 md:flex md:justify-center md:text-center md:items-center">
          <h1 className="text-5xl font-Poppins font-bold ">
            Read what our team has published on the internet
          </h1>
        </div>

        <div className=" col-span-12 lg:columns-3 lg:max-w-5xl lg:mx-auto  ">
          <div className="1  flex mx-4 md:mx-0 ">
            <div className=" w-370 h-395 mb-4 border mx-auto   rounded-lg shadow-lg duration-200 hover:scale-95 ">
                <Image
                  src="/images/home1/mom.png"
                  alt="Myimage"
                  height={266}
                  width={370}
                />
              <div className="flex justify-center ">
                <div>
                  <h2 className=" text-left pt-4 mx-2 text-xl font-Poppins font-bold">
                    Good newspaper Is a Nation talking to itself.
                  </h2>
                  <p className="text-sm pt-4 font-OpenSans mx-2 ">
                    27 feb, 2023
                    <span className=" text-red-600  pl-2   ">by John Doe</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="2 flex mx-4 md:mx-0  ">
            <div className=" w-370 h-395   mb-4 mx-auto   border rounded-lg shadow-lg duration-200 hover:scale-95">
                <Image
                  src="/images/home1/mom1.png"
                  alt="Myimage"
                  height={266}
                  width={370}
                />

              <div className="flex justify-center ">
                <div>
                  <h2 className=" text-left pt-4 text-xl mx-2 font-Poppins font-bold">
                    Good newspaper Is a Nation talking to itself.
                  </h2>
                  <p className="text-sm pt-4 font-OpenSans mx-2 ">
                    27 feb, 2023
                    <span className=" text-red-600 pl-2">by John Doe</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="3  flex mx-4 md:mx-0 ">
            <div className=" w-370 h-395   mb-4  mx-auto  border rounded-lg shadow-lg duration-200 hover:scale-95">
                <Image
                  src="/images/home1/mom.png"
                  alt="Myimage"
                  height={266}
                  width={370}
                />
              <div className="flex justify-center ">
                <div>
                  <h2 className=" text-left pt-4 mx-2 text-xl font-Poppins font-bold">
                    Good newspaper Is a Nation <br /> talking to itself.
                  </h2>
                  <p className="text-sm pt-4 font-OpenSans mx-2 ">
                    27 feb, 2023
                    <span className=" text-red-600  pl-2">by John Doe</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end read-what-team */}

      {/* subscribes-laters */}
      <SubscribeForm />
      {/* end-subscribes-laters */}
    </div>
  );
}
export default Main;
