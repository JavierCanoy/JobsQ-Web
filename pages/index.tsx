import Image from "next/image";
// icon-footer
import facebook from "../public/iconfooter/facebook.svg";
import instagram from "../public/iconfooter/instagram.svg";
import linkedin from "../public/iconfooter/linkedin.svg";
import skype from "../public/iconfooter/skype.svg";
//imageIndex
import avatar from "../public/imageIndex/avatar.png";
import group from "../public/imageIndex/group.png";
import monitor from "../public/imageIndex/monitor.png";
import pro from "../public/imageIndex/pro.png";
import mother from "../public/imageIndex/mother.png";
import mateagain from "../public/imageIndex/mateagain.png";
import mateme from "../public/imageIndex/mateme.png";

export default function HomePageOne() {
  return (
    <>
      <div>
        {/* header-start */}
        <header>
          <nav className="border-black-500 border-2 px-4 p-4  ">
            {/* flex flex-wrap justify-evenly  gap-96 */}
            <div className=" grid grid-cols-2    ">
              <div className=" flex pl-10">
                <a href="#" className="flex items-center ">
                  <Image
                    src="https://flowbite.com/docs/images/logo.svg"
                    alt="Picture of the author"
                    width={62}
                    height={60}
                  />
                </a>
                <div className=" px-4 pt-6">
                  <span className=" self-center font-name  text-2xl  font-bold  text-red-700  ">
                    MABOLOTECH IT SOLUTION
                  </span>
                  <p className=" text-xs font-semibold whitespace-nowrap ">
                    Crafting Software Solutions that drive business growth
                  </p>
                </div>
              </div>

              <div className="nav grid justify-center  ">
                <ul className="flex  gap-8   items-center p-4  ml-20          ">
                  <li>
                    <a
                      href="#"
                      className=" text-xl  font-semibold block py-2 pl-3 pr-4    hover:text-red-700      "
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xl font-semibold   block py-2 pl-3 pr-4     hover:text-red-700     "
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="  text-xl font-semibold  block py-2 pl-3 pr-4  hover:text-red-700 "
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" text-xl  font-semibold  block py-2 pl-3 pr-4 hover:text-red-700"
                    >
                      Our Work
                    </a>
                  </li>
                  <li>
                    <button className=" text-xl font-semibold   hover:bg-red-700 text-black-700   py-2 px-8 border-2 border-red-700  rounded-full">
                      Contact us
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* header-end */}
        {/* our-goal */}
        <div className=" flex justify-end gap-32  items-center  ">
          <div className="ml-10">
            <p className="text-xl uppercase pl-10 text-gray-400">Our Goal</p>
            <h1 className="text-7xl font-bold pl-10">
              Better products <br /> for your users
            </h1>
            <p className=" pt-7 text-xl pl-10 text-gray-400">
              We help our clients realize their most important <br /> business
              goals.
            </p>
            <div className=" pt-20  content-center  grid justify-items-start px-10">
              <div className="grid grid-cols-2 ">
                <div>
                  <button
                    type="button"
                    className="place-self-center text-white bg-gradient-to-t from-[#F35A43] to-[#C1272D] hover:from-white hover:to-white hover:text-red-700 hover:border-red-700 border-2 text-xl rounded-full font-semibold px-12 py-4 text-center   "
                  >
                    GET IN TOUCH
                  </button>
                </div>
                <div>
                  <div className=" flex ">
                    <div className=" flex">
                      <strong className="  px-4 pl-20 self-center">
                        WATCH VIDEO
                      </strong>
                    </div>
                    <button
                      type="button"
                      className=" text-white  bg-red-700  border-2 hover:bg-white hover:text-red-700 hover:border-red-700  rounded-full text-sm px-4 py-4 "
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
          <div className="">
            <Image
              className="  "
              src={group}
              alt="Myimage"
              height={1080}
              width={788}
            />
          </div>
        </div>
        {/* end */}
        {/* we-help-with */}
        <div className="bg-gradient-to-t from-[#F35A43] to-[#C1272D] flex justify-center gap-72 p-28 text-white">
          <div className=" grid justify-items-center  ">
            <div className="pt-4">
              <span className="text-2xl font-light">
                WE HELP WITH <br />
              </span>
              <p className="text-5xl font-bold pb-10 pt-2">
                Building <br /> better
                <br /> solutions
              </p>
              <button className="flex text-base font-semibold uppercase  items-center  bg-transparent text-white hover:text-red-500 hover:bg-white text-black-700    border-2 p-3  border-white hover:border-transparent rounded-full">
                <p className="px-6"> Our Services </p>
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
          </div>
          <div className=" grid grid-cols-2 gap-6">
            <div>
              <div className="  p-6 rounded-lg pb-10 bg-[#EB3449]">
                <Image src={monitor} alt="Myimage" className=" pb-2" />
                <h3 className="font-bold text-xl">Design</h3>
                <p className=" text-base pt-2">
                  Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto.
                  Ipsum dolor amet lorem.
                </p>
              </div>
            </div>
            <div className="">
              <div className="  p-6 rounded-lg pb-10 bg-[#EB3449]">
                <Image src={monitor} alt="Myimage" className=" pb-2" />
                <h3 className="font-bold text-xl">Development</h3>
                <p className=" text-base pt-2">
                  Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto.
                  Ipsum dolor amet lorem.
                </p>
              </div>
            </div>
            <div className=" ">
              <div className="  p-6 rounded-lg   bg-gradient-to-r from-[#F5B596] to-[#EB3449] ">
                <h3 className="font-bold text-xl">Project management</h3>
                <p className=" text-base ">
                  Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto.
                  Ipsum dolor amet lorem.
                </p>
                <button className="flex  items-center  pt-12  font-semibold  gap-10 hover:text-red-700">
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
            </div>
            <div>
              <div className="  p-6 rounded-lg pb-10 bg-[#EB3449]">
                <Image src={monitor} alt="Myimage" className=" pb-2" />
                <h3 className=" font-bold text-xl">Testing & QA</h3>
                <p className=" text-base pt-2">
                  Lorem ipsum dolor amet, an ipsum dore <br /> dusino sinto.
                  Ipsum dolor amet lorem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* design */}
        <div className="">
          <div className="flex pb-40 pt-40">
            <div className=" bg-red-400 ">
              <Image
                className=""
                src={mateme}
                alt="Myimage"
                height={730}
                width={800}
              />
            </div>
            <div className="grid content-center mx-40 ">
              <h2 className="text-5xl font-bold">
                Design solutions <br /> to improve products
              </h2>
              <p className=" text-2xl py-10 text-gray-400 ">
                We help our clients make realize their most Important <br />
                business goals. We help our clients make realize their
                <br />
                most Important business goals. business goals. We help <br />
                our clients make realize their most Important business.
              </p>
              <div>
                <button className="flex text-lg uppercase items-center text-white bg-gradient-to-t from-[#F35A43] to-[#C1272D] hover:from-white hover:to-white hover:text-red-600 border-2 p-4 border-red-500 hover:border-red-500 rounded-full">
                  <p className="px-10">KNOW MORE</p>
                  <svg
                    className="w-5 h-5"
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
        </div>
        <div>
          <div className="flex justify-end ">
            <div className="grid content-center mx-40 ">
              <h2 className="text-5xl font-bold">
                Design solutions <br /> to improve products
              </h2>
              <p className=" text-2xl py-10 text-gray-400 ">
                We help our clients make realize their most Important <br />
                business goals. We help our clients make realize their
                <br />
                most Important business goals. business goals. We help <br />
                our clients make realize their most Important business.
              </p>
              <div>
                <button className="flex text-lg uppercase   items-center   text-red-500 hover:bg-gradient-to-t from-[#F35A43] to-[#C1272D]  hover:text-white   border-2 p-4  border-red-500  rounded-full">
                  <p className="px-10"> KNOW MORE</p>
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
            </div>
            <div className="  ">
              <Image
                className=""
                src={mateagain}
                alt="Myimage"
                height={730}
                width={800}
              />
            </div>
          </div>
        </div>
        {/*end-design */}

        {/* projects-we-love */}
        <div className="flex justify-around pt-60">
          <div className="">
            <span className=" text-xl  text-gray-500"> PORTFOLIO</span>
            <h1 className=" text-5xl font-bold pt-8">Projects we love</h1>
          </div>
          <div className="flex  self-end text-lg font-semibold">
            <button className="pr-20  text-red-500">PREV</button>
            <button className="px-2  text-gray-300">NEXT</button>
            <button className="pl-20 text-red-500">View all</button>
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-16 pt-28 pb-48">
            <div>
              <Image
                className=" "
                src={pro}
                alt="Myimage"
                height={128}
                width={401}
              />
            </div>
            <div>
              <Image
                className=" "
                src={pro}
                alt="Myimage"
                height={128}
                width={401}
              />
            </div>

            <div>
              <Image
                className=" "
                src={pro}
                alt="Myimage"
                height={128}
                width={401}
              />
            </div>

            <div>
              <Image
                className=" "
                src={pro}
                alt="Myimage"
                height={128}
                width={401}
              />
            </div>
          </div>
        </div>
        {/*end- projects-we-love */}
        {/*  What do our clients   */}
        <div className="flex  justify-center  p-28 mt-10 bg-gradient-to-t from-[#F35A43] to-[#C1272D]">
          <div className=" text-center pt-10">
            <h1 className=" text-5xl font-bold text-white">
              What do our clients say <br /> about us?
            </h1>
            <div className="flex justify-center pt-4">
              <Image src={avatar} alt="Myimage" />
            </div>
            <p className="text-white text-2xl font-thin ">
              We help our clients make realize their most Important <br />
              business goals. We help our clients make realize their <br /> most
              Important business goals. business goals. We help <br />
              our clients make realize their most Important business.
            </p>
            <h1 className="text-white pt-10 font-bold text-lg">JOHN DOE</h1>
            <span className="text-white pb-10 text-sm font-extralight">
              CEO, Boogle Inc.
            </span>
            <div className=" flex justify-center pt-20 ">
              <div className="flex  self-end text-lg font-semibold gap-32">
                <button className="  text-gray-300">PREV</button>
                <button className=" text-gray-300">NEXT</button>
              </div>
            </div>
          </div>
        </div>
        {/* Let’s start withyour dreamproject */}
        <div className="main mt-10">
          {/* grid grid-cols-2  justify-items-center  */}
          <div className="flex justify-center ">
            <div className="grid content-center mr-20 px-10 pt-4">
              <h1 className="text-xl pb-10 text-gray-400">GET IN TOUCH</h1>
              <span className="text-5xl font-bold ">
                Let’s start with
                <br /> your dream <br />
                project
              </span>
              <p className=" pt-10 text-xl font-semibold	">
                We help our clients make realize their most <br />
              </p>
              <strong className="text-xl font-bold pt-2">
                +1 123 456 7890
              </strong>
            </div>
            <div className="">
              <form action="">
                <div>
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
                    aria-label="MEssage"
                    placeholder="Message"
                  />
                  <div className="pt-14 ">
                    <button className=" text-sm text-red-500 bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white py-3 px-12 border-2 border-red-500 hover:border-transparent rounded-full">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*end Let’s start withyour dreamproject */}
        {/* read-what-team */}
        <div>
          <div className="flex justify-center pb-28 pt-60">
            <h1 className="text-5xl font-bold text-center">
              Read what our team has <br /> published on the internet
            </h1>
          </div>

          <div className=" flex justify-center pt-10 gap-8 pb-48">
            <div className=" w-370 h-395  border  rounded-md shadow-lg">
              <Image
                className=" "
                src={mother}
                alt="Myimage"
                height={266}
                width={370}
              />
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
            <div className=" w-370 h-395  border  rounded-md shadow-lg">
              <Image
                className=" "
                src={mother}
                alt="Myimage"
                height={266}
                width={370}
              />
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
            <div className=" w-370 h-395  border  rounded-md shadow-lg">
              <Image
                className=" "
                src={mother}
                alt="Myimage"
                height={266}
                width={370}
              />
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
        <div className=" pt-32 pb-10  mt-8   bg-gradient-to-r from-[#F35A43] to-[#F35A43]">
          <div className="flex justify-evenly    ">
            <div className="px-96 ">
              <h5 className=" text-center text-xl font-light text-white  px-96 mx-10  ">
                NEWSLETTER
              </h5>
            </div>
            <button className=" text-2xl bg-transparent text-white hover:bg-blue-500 text-black-700 font-semibold hover:text-white   pb-2  border-white hover:border-transparent rounded-full">
              x
            </button>
          </div>
          <h2 className=" text-center text-5xl font-bold text-white">
            Subscribe Company newsletter
          </h2>
          <form action="  ">
            <div className="flex justify-center gap-14 p-28 ">
              <input
                className=" text-base w-80 text-green  leading-tight focus:outline-none border-b-2    bg-transparent placeholder-white "
                type="text"
                aria-label="Your-name"
                placeholder="Your name "
              />
              <input
                className="py-4  pl-2 text-base w-80 text-white  leading-tight focus:outline-none border-b-2  bg-transparent placeholder-white  "
                type="text"
                aria-label="Email"
                placeholder="Email"
              />
            </div>
          </form>
        </div>
        {/* footer-start */}
        <footer className="text-gray-600  ">
          <div className=" px-5 pt-10 pb-20  flex flex-row flex-wrap justify-center  ">
            <div className="w-64  mr-24 ">
              <a href="#" className="flex items-center pb-2 px-4">
                <Image
                  src="https://flowbite.com/docs/images/logo.svg"
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
                  <li className="mb-2 mt-2">
                    <a className="text-gray-400  ">Development</a>
                  </li>
                  <li className="mt-2">
                    <a className="text-gray-400 ">Design Sprint</a>
                  </li>
                  <li className="mt-2">
                    <a className="text-gray-400 ">UX Design</a>
                  </li>
                  <li className="mt-2">
                    <a className="text-gray-400 ">Online Marketing</a>
                  </li>
                  <li className="mt-2">
                    <a className="text-gray-400 ">Content</a>
                  </li>
                </nav>
              </div>
              <div className="grid content-end mb-2">
                <h2 className="title-font font-bold text-2xl text-red-700   pb-2">
                  About us
                </h2>
                <nav className="list-none">
                  <li className="mb-2 mt-2 ">
                    <a className="text-gray-400  ">About us</a>
                  </li>
                  <li className="mt-2">
                    <a className="text-gray-400 ">Team</a>
                  </li>
                  <li className="mt-2">
                    <a className="text-gray-400 ">Portfolio</a>
                  </li>
                  <li className="mt-2">
                    <a className="text-gray-400 ">News & Article</a>
                  </li>
                  <li className="mt-2">
                    <a className="text-gray-400 ">Career</a>
                  </li>
                </nav>
              </div>
              <div className="  grid   content-end mb-20">
                <h2 className="title-font font-bold text-2xl text-red-700   pb-2">
                  Get in touch
                </h2>
                <nav className="list-none">
                  <li className="mb-2 mt-2 ">
                    <a className="  text-gray-400 ">
                      99 Wall Street <br /> New York, NY 10005
                    </a>
                  </li>
                  <ul className="mt-4 flex text-gray-400 gap-2">
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
                </nav>
              </div>
            </div>
          </div>

          <p className=" text-center text-base pb-44 text-gray-400">
            Copyrighted © 2023 Mabolotech IT Solution
          </p>
        </footer>
        {/* footer-end */}
      </div>
    </>
  );
}
