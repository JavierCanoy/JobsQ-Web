import Image from "next/image";

import facebook from "../public/iconfooter/facebook.svg";
import instagram from "../public/iconfooter/instagram.svg";
import linkedin from "../public/iconfooter/linkedin.svg";
import skype from "../public/iconfooter/skype.svg";

import avatar from "../public/images/home1/avatar.png";
import hero from "../public/images/home1/hero.png";
import logo from "../public/images/logo/logo.png";

import first from "../public/images/icon/first.png";
import second from "../public/images/icon/second.png";
import third from "../public/images/icon/third.png";

import team from "../public/images/home1/team.png";
import team1 from "../public/images/home1/team1.png";

import Mask3 from "../public/images/home1/Mask3.png";
import Mask4 from "../public/images/home1/Mask4.png";
import Mask5 from "../public/images/home1/Mask5.png";
import Mask6 from "../public/images/home1/Mask6.png";

import mom from "../public/images/home1/mom.png";
import mom1 from "../public/images/home1/mom1.png";

export default function HomePageOne() {
  return (
    <>
      {/* header-start */}
      <header className="  sticky backdrop-blur-md z-50  w-full bg-white/90  top-0 left-0 shadow-sm ">
        <div className="border-black-500  border  px-4 p-7 grid grid-cols-2   ">
          {/* logo */}
          <div className=" flex  mx-12 ">
            <a href="#">
              <Image
                src={logo}
                alt="Picture of the author"
                width={62.02}
                height={60.25}
              />
            </a>
            <div className=" px-4 grid content-end pb-1">
              <span className=" self-center  text-2xl  font-bold  text-costumeRed ">
                MABOLOTECH IT SOLUTION
              </span>
              <p className=" text-xs font-semibold whitespace-nowrap ">
                Crafting Software Solutions that drive business growth
              </p>
            </div>
          </div>
          {/* menu */}
          <div className="grid justify-center  ">
            <ul className="flex  gap-6   items-center   ml-28">
              <li>
                <a
                  href="#"
                  className=" text-xl  font-semibold block py-2 pl-3 pr-4    hover:text-costumeRed      "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl font-semibold   block py-2 pl-3 pr-4     hover:text-costumeRed     "
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="  text-xl font-semibold  block py-2 pl-3 pr-4  hover:text-costumeRed "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-xl  font-semibold  block py-2 pl-3 pr-4 hover:text-costumeRed"
                >
                  Our Work
                </a>
              </li>
              <li>
                <button className="mx-3 text-xl font-semibold   hover:bg-costumeRed text-black-700 hover:text-white   px-12 p-3  border-2 border-red-700  rounded-full">
                  Contact us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* header-end */}

      {/* our-goal */}
      <div className=" flex justify-end gap-32      ">
        <div className="ml-10 mx-20 px-2  ">
          <div className=" pt-64">
            <p className="text-xl uppercase pl-10 text-gray-400">Our Goal</p>
            <h1 className="text-7xl font-bold pl-10">
              Better products <br /> for your users
            </h1>
            <p className=" pt-7 text-xl pl-10 text-gray-400">
              We help our clients realize their most important <br /> business
              goals.
            </p>
          </div>
          <div className=" flex justify-center gap-16 pt-16 mt-1 ">
            <div className=" px-2">
              <button
                type="button"
                className="place-self-center px-11 p-3  text-white bg-gradient-to-t from-costumeOrange to-costumeRed hover:from-white hover:to-white hover:text-red-700 hover:border-red-700 border-2 text-xl rounded-full font-semibold text-center   "
              >
                GET IN TOUCH
              </button>
            </div>
            <div>
              <div className=" flex ">
                <div className=" flex">
                  <strong className="  pr-4  self-center">WATCH VIDEO</strong>
                </div>
                <div>
                  <button
                    type="button"
                    className=" text-white  bg-red-700  border-2 hover:bg-white hover:text-red-700 hover:border-red-700  rounded-full text-sm px-3 py-3 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-end  overflow-hidden  h-957  w-788 ">
          <Image
            src={hero}
            alt="Myimage"
            className=" object-none object-bottom   "
          />
        </div>
      </div>
      {/* end */}

      {/* we-help-with */}
      <div className=" h-766 w-full  bg-gradient-to-t  from-costumeOrange to-costumeRed">
        {/* p-40  */}
        <div className="flex  justify-around py-36  text-white mx-72 px-2">
          <div className="pt-4 pr-14 ">
            <span className="text-2xl font-light">
              WE HELP WITH <br />
            </span>
            <p className="text-5xl font-bold pb-10 pt-2">
              Building <br /> better
              <br /> solutions
            </p>

            <button className=" flex text-base font-semibold uppercase  p-3  items-center  bg-transparent text-white hover:text-red-500 hover:bg-white text-black-700    border-2   border-white hover:border-transparent rounded-full">
              <span className="px-5"> Our Services </span>
              <svg
                className="w-5 h-5 ml-6 mx-2  "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className=" grid grid-cols-2 gap-6">
            <div className=" h-231 w-361 px-8 pt-8 hover:bg-gradient-to-r from-costumeBrnBg to-costumeRedBg   rounded-lg  bg-costumeRedBg">
              <Image
                src={first}
                width={40}
                height={60.25}
                alt="Myimage"
                className=" pb-3"
              />
              <h3 className="font-bold text-xl">Design</h3>
              <p className=" text-base pt-3">
                Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
                dolor amet lorem.
              </p>
            </div>
            <div className="  h-231 w-361 px-8 pt-8     rounded-lg hover:bg-gradient-to-r from-costumeBrnBg to-costumeRedBg  bg-costumeRedBg">
              <Image
                src={second}
                width={40}
                height={60.25}
                alt="Myimage"
                className=" pb-2"
              />
              <h3 className="font-bold text-xl">Development</h3>
              <p className=" text-base pt-2">
                Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
                dolor amet lorem.
              </p>
            </div>
            <div className="  p-6 rounded-lg  bg-gradient-to-r from-costumeBrnBg to-costumeRedBg  hover:from-costumeRedBg hover:to-costumeRedBg  ">
              <h3 className="font-bold text-xl ">Project management</h3>
              <p className=" text-base pt-2">
                Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
                dolor amet lorem.
              </p>
              <button className="flex  items-center  pt-20  font-semibold  gap-10 hover:text-red-700">
                Know more
                <svg
                  className="w-5 h-5  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="  h-231 w-361 px-8 pt-8    rounded-lg  hover:bg-gradient-to-r from-costumeBrnBg to-costumeRedBg bg-costumeRedBg">
              <Image
                src={third}
                width={40}
                height={60.25}
                alt="Myimage"
                className=" pb-2"
              />
              <h3 className=" font-bold text-xl">Testing & QA</h3>
              <p className=" text-base pt-2">
                Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto. Ipsum
                dolor amet lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end-we-help-with */}

      {/* design */}
      <div className="design   ">
        <div className="flex mt-5 py-40  ">
          <Image
            className=" rounded-r-lg shadow-lg"
            src={team1}
            alt="Myimage"
            height={730}
            width={800}
          />
          <div className="grid content-center  mx-32">
            <h2 className="text-5xl font-bold">
              Design solutions <br /> to improve products
            </h2>
            <p className=" text-2xl pt-10 pb-7 text-gray-400 ">
              We help our clients make realize their most Important <br />
              business goals. We help our clients make realize their
              <br />
              most Important business goals. business goals. We help <br />
              our clients make realize their most Important business.
            </p>
            <div>
              <button className="flex text-lg  p-3 uppercase items-center text-white bg-gradient-to-r from-costumeOrange to-costumeRed hover:from-white hover:to-white hover:text-red-600 border-2  border-costumeOrange hover:border-costume rounded-full">
                <span className="px-5">KNOW MORE</span>
                <svg
                  className="w-5 h-5 ml-6 mx-2 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end ">
          <div className="grid content-center mx-40 ">
            <h2 className="text-5xl font-bold text-left">
              Develop powerful <br /> apps for your business
            </h2>
            <p className=" text-2xl pt-10 pb-7 text-gray-400  text-left">
              We help our clients make realize their most Important <br />
              business goals. We help our clients make realize their
              <br />
              most Important business goals. business goals. We help <br />
              our clients make realize their most Important business.
            </p>
            <div>
              <button className="flex text-lg uppercase   p-3   items-center   text-red-500 hover:bg-gradient-to-r from-costumeOrange to-costumeRed  hover:text-white   border-2   border-costumeOrange  rounded-full">
                <span className="px-4"> KNOW MORE</span>
                <svg
                  className="w-5 h-5 ml-6 mx-2 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <Image
            className="rounded-l-lg shadow-lg"
            src={team}
            alt="Myimage"
            height={730}
            width={800}
          />
        </div>
      </div>
      {/*end-design */}

      {/* projects-we-love */}
      <div className="flex justify-around pt-40 mt-40 ">
        <div className="">
          <span className=" text-xl  text-gray-500"> PORTFOLIO</span>
          <h1 className=" text-5xl font-bold pt-7">Projects we love</h1>
        </div>
        <div className="flex  self-end text-lg font-semibold">
          <button className="pr-20  text-red-500">PREV</button>
          <button className="px-2  text-gray-300">NEXT</button>
          <button className="pl-20 text-red-500">View all</button>
        </div>
      </div>
      {/* images */}
      <div>
        <div className="flex justify-end gap-19  pt-28 pb-44 ">
          <Image
            src={Mask3}
            alt="Myimage"
            height={128}
            width={401}
            className="duration-200 hover:scale-95"
          />

          <Image
            src={Mask4}
            alt="Myimage"
            height={128}
            width={401}
            className=" duration-200 hover:scale-95"
          />

          <Image
            src={Mask5}
            alt="Myimage"
            height={128}
            width={401}
            className=" duration-200 hover:scale-95"
          />

          <Image
            src={Mask6}
            alt="Myimage"
            height={128}
            width={401}
            className=" duration-200 hover:scale-95"
          />
        </div>
      </div>
      {/*end- projects-we-love */}

      {/*  What do our clients   */}
      <div className="flex  justify-center h-941   p-28 mt-10 bg-gradient-to-t from-costumeOrange to-costumeRed">
        <div className=" text-center pt-16">
          <h1 className=" text-5xl font-bold text-white">
            What do our clients say <br /> about us?
          </h1>
          <div className="flex justify-center  ">
            <Image src={avatar} width={200} height={200} alt="Myimage" />
          </div>
          <p className="text-white text-2xl font-thin ">
            We help our clients make realize their most Important <br />
            business goals. We help our clients make realize their <br /> most
            Important business goals. business goals. We help <br />
            our clients make realize their most Important business.
          </p>
          <h1 className="text-white pt-12 font-bold text-lg">JOHN DOE</h1>
          <span className="text-white pb-10 text-sm font-extralight">
            CEO, Boogle Inc.
          </span>
          <div className=" flex justify-center pt-16 ">
            <div className="flex  self-end text-lg font-semibold gap-32">
              <button className="  text-gray-300">PREV</button>
              <button className=" text-gray-300">NEXT</button>
            </div>
          </div>
        </div>
      </div>
      {/* end-What do our clients   */}

      {/* Let’s start withyour dreamproject */}
      <div className="main mt-24">
        <div className="flex justify-center ">
          <div className="grid content-center mr-20 px-10 pt-4">
            <h1 className="text-xl pb-10 text-gray-400">GET IN TOUCH</h1>
            <span className="text-5xl font-bold ">
              Let’s start with
              <br /> your dream <br />
              project
            </span>
            <p className=" pt-10 text-xl font-semibold	">
              We help our clients make realize their most
            </p>
            <strong className="text-xl font-bold pt-2">+1 123 456 7890</strong>
          </div>
          <form>
            <input
              className="py-4  text-base leading-tight focus:outline-none border-b-2 pt-20  w-full "
              type="text"
              aria-label="Email"
              placeholder="Email "
            />
            <input
              className="py-6 text-base  leading-tight focus:outline-none border-b-2   pt-14 w-full  "
              type="text"
              aria-label="Full name"
              placeholder="Full name"
            />
            <input
              className="py-20  text-base leading-tight focus:outline-none border-b-2 w-full  "
              type="text"
              aria-label="Message"
              placeholder="Message"
            />
            <div className="pt-14 ">
              <button className=" text-sm text-red-500 bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white border-2 px-12 p-3 border-red-500 hover:border-transparent rounded-full">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      {/*end Let’s start withyour dreamproject */}

      {/* read-what-team */}
      <div>
        <div className="flex justify-center pb-28 pt-60 mt-14">
          <h1 className="text-5xl font-bold text-center">
            Read what our team has <br /> published on the internet
          </h1>
        </div>

        <div className=" flex justify-center pt-14 gap-8 pb-48">
          <div className=" w-370 h-395  border  rounded-mod shadow-lg duration-200 hover:scale-95 ">
            <Image src={mom} alt="Myimage" height={266} width={370} />
            <div className="flex justify-center ">
              <div>
                <h2 className=" text-left pt-4 text-xl font-bold">
                  Good newspaper Is a Nation <br /> talking to itself.
                </h2>
                <p className="text-sm pt-4  ">
                  27 feb, 2023
                  <span className=" text-red-500  pl-2">by John Doe</span>
                </p>
              </div>
            </div>
          </div>

          <div className=" w-370 h-395  border rounded-mod shadow-lg duration-200 hover:scale-95">
            <Image src={mom1} alt="Myimage" height={266} width={370} />
            <div className="flex justify-center ">
              <div>
                <h2 className=" text-left pt-4 text-xl font-bold">
                  Good newspaper Is a Nation <br /> talking to itself.
                </h2>
                <p className="text-sm pt-4  ">
                  27 feb, 2023
                  <span className=" text-red-500 pl-2">by John Doe</span>
                </p>
              </div>
            </div>
          </div>

          <div className=" w-370 h-395  border rounded-mod shadow-lg duration-200 hover:scale-95">
            <Image src={mom} alt="Myimage" height={266} width={370} />
            <div className="flex justify-center ">
              <div>
                <h2 className=" text-left pt-4 text-xl font-bold">
                  Good newspaper Is a Nation <br /> talking to itself.
                </h2>
                <p className="text-sm pt-4  ">
                  27 feb, 2023
                  <span className=" text-red-500  pl-2">by John Doe</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end read-what-team */}

      {/* subscribes-laters */}
      <div className="  pt-36 pb-10 h-575 w-full  mt-8   bg-costumeOrange">
        <div className=" flex justify-center  pb-2 ">
          <div className=" flex pl-10">
            <h5 className=" text-center text-xl font-light text-white px-80  mx-96  ">
              NEWSLETTER
            </h5>

            {/* recommend-to-removed by:sir-J */}
            {/* <button className="   ">
              <Image
                src={cancelY}
                alt="Picture of the author"
                width={39}
                height={39}
              />
            </button> */}
          </div>
        </div>

        <h2 className=" text-center text-5xl font-bold text-white">
          Subscribe Company newsletter
        </h2>
        <form action="  ">
          <div className="flex justify-center gap-16 p-36 pb-2">
            <input
              className=" text-base w-399 text-white   leading-tight focus:outline-none border-b-2    bg-transparent placeholder-white "
              type="text"
              aria-label="Your-name"
              placeholder="Your name "
            />
            <input
              className="py-4   text-base w-399 text-white  leading-tight focus:outline-none border-b-2  bg-transparent placeholder-white  "
              type="text"
              aria-label="Email"
              placeholder="Email"
            />
            <div className=" flex self-end  ">
              <button className=" mx-6 text-sm text-white bg-transparent hover:border-costumeOrange hover:bg-white text-black-700 font-semibold hover:text-red-500 border-2 px-12 p-3 border-white hover:border-transparent rounded-full">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end-subscribes-laters */}

      {/* footer-start */}
      <footer className="text-gray-600  ">
        <div className=" pt-8 pb-20  flex flex-row flex-wrap justify-center  ">
          <div className="  mr-24">
            <a href="#" className="flex items-center pb-2 px-4">
              <Image
                src={logo}
                alt="Picture of the author"
                width={62}
                height={60}
              />
            </a>
            <span className="font-bold text-base  text-red-700 ">
              MABOLOTECH IT SOLUTION
            </span>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor is simply dummy <br />
              text of printing.
            </p>
          </div>

          <div className="flex flex-wrap  mx-8 gap-40 mt-8 ">
            <div className="grid content-end mb-2">
              <h2 className="title-font font-bold text-2xl text-red-700   pb-2">
                Services
              </h2>
              <nav className="list-none">
                <li className=" mt-3">
                  <a className="text-gray-400  ">Development</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Design Sprint</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">UX Design</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Online Marketing</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Content</a>
                </li>
              </nav>
            </div>
            <div className="grid content-end mb-2">
              <h2 className="title-font font-bold text-2xl text-red-700   pb-2">
                About us
              </h2>
              <nav className="list-none">
                <li className=" mt-3 ">
                  <a className="text-gray-400  ">About us</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Team</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Portfolio</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">News & Article</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 ">Career</a>
                </li>
              </nav>
            </div>
            <div className="  grid   content-end mb-20">
              <h2 className="title-font font-bold text-2xl text-red-700   pb-2">
                Get in touch
              </h2>
              <div className="list-none">
                <li className=" mt-2 ">
                  <a className="  text-gray-400 ">
                    99 Wall Street <br /> New York, NY 10005
                  </a>
                </li>
                <ul className="mt-8 flex text-gray-400 gap-2">
                  <li>
                    <a href="#" target="_blank" title="">
                      <Image src={facebook} alt="Myimage" />
                    </a>
                  </li>

                  <li className="ml-6">
                    <a href="#" target="_blank" title="">
                      <Image src={skype} alt="Myimage" />
                    </a>
                  </li>

                  <li className="ml-6">
                    <a href="#" target="_blank" title="">
                      <Image src={linkedin} alt="Myimage" />
                    </a>
                  </li>

                  <li className="ml-6">
                    <a href="#" target="_blank" title="">
                      <Image src={instagram} alt="Myimage" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className=" text-center text-base pt-3 pb-48 text-gray-400">
          Copyrighted © 2023 Mabolotech IT Solution
        </p>
      </footer>
      {/* footer-end */}
    </>
  );
}
