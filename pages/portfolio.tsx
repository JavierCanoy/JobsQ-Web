import Image from "next/image";
// icon-footer
import facebook from "../public/iconfooter/facebook.svg";
import instagram from "../public/iconfooter/instagram.svg";
import linkedin from "../public/iconfooter/linkedin.svg";
import skype from "../public/iconfooter/skype.svg";

import bag from "../public/portfolio/bag.png";
import landing from "../public/portfolio/landing.png";
import close1 from "../public/portfolio/close1.png";

export default function Portfolio() {
  return (
    <>
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
                <span className=" self-center  text-2xl  font-bold  text-red-700  ">
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
      {/* start-Portfolio */}
      <div>
        <div className=" text-center py-40 ">
          <span className="text-xl text-gray-400 font-light ">PORTFOLIO</span>
          <p className="text-5xl font-bold pt-10">
            People don’t buy what you do, <br /> they buy why you do it.
          </p>
        </div>
        <div className="">
          <div
            className=" flex justify-center gap-20 text-2xl font-semibold
            "
          >
            <button className=" hover:text-red-700 ">All</button>
            <button className="hover:text-red-700 ">Branding</button>
            <button className="hover:text-red-700 ">UX/UI</button>
            <button className=" hover:text-red-700 ">Marketing </button>
          </div>
          <div className=" ">
            <button className=" ">
              <Image
                className=" mx-40  "
                src={close1}
                alt="Myimage"
                height={39}
                width={39}
              />
            </button>
          </div>

          <div className="pt-96 float-left ">
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
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          {/* <p className="text-lg font-bold">Firefox Org</p>
                  <span className=" text-base text-gray-400 ">Branding</span> */}
          <div className=" grid grid-cols-3  pb-28  px-40 pt-10 ">
            <div className="  h-439 w-370 border-2 rounded-lg drop-shadow-lg">
              <div>
                <Image className=" " src={bag} alt="Myimage" />
                <div className="flex justify-between">
                  <div className=" px-2 pt-2">
                    <p className="text-lg font-bold ">Firefox Org</p>
                    <span className=" text-base text-gray-400 ">Branding</span>
                  </div>
                  <div>
                    <button className="bg-gradient-to-t from-[#6362D7] to-[#FF8FE2] h-73  rounded-br-lg text-white   hover:bg-white hover:text-[#6362D7] ">
                      <svg
                        className="w-5 h-5 mx-5"
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
            </div>

            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg drop-shadow-lg mt-10">
              <div>
                <Image
                  className=" "
                  src={landing}
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end-Portfolio */}
      {/* get-in-touch */}

      <div className="bg-gradient-to-t from-[#F35A43] to-[#C1272D]">
        <div className="flex justify-items-start px-40 pt-10">
          <button className=" float pt-10 text-xl font-bold text-white ">
            x
          </button>
        </div>
        <div className=" flex justify-center gap-40 pt-40 pb-40 ">
          <div className=" text-left text-white">
            <h1 className="text-xl font-thin ">GET IN TOUCH</h1>
            <p className="text-5xl font-bold pt-10">
              Let’s start with <br /> your dream <br />
              project
            </p>
            <p className="text-2xl pt-10">
              We help our clients make realize their most
            </p>
            <span className="text-2xl font-bold">+1 123 456 7890</span>
          </div>
          <div className="grid content-center ">
            <form action="">
              <div className="">
                <input
                  className="pb-4  text-base leading-tight focus:outline-none border-b-2   w-full  bg-transparent text-white placeholder-gray-300"
                  type="text"
                  aria-label="Email"
                  placeholder="Email "
                />
                <input
                  className="py-4 text-base  leading-tight focus:outline-none border-b-2   pt-14 w-full bg-transparent text-white placeholder-gray-300"
                  type="text"
                  aria-label="Full name"
                  placeholder="Full name"
                />
                <input
                  className="py-20  text-base leading-tight focus:outline-none border-b-2 w-full pt-14 bg-transparent  text-white placeholder-gray-300"
                  type="text"
                  aria-label="MEssage"
                  placeholder="Message"
                />
                <div className="pt-14 w-36 ">
                  <button className=" text-2xl text-white bg-transparent hover:bg-white text-black-700 font-semibold hover:text-red-500 py-2 px-8 border-2 border-white hover:border-transparent rounded-full">
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* end-get-in-touch */}
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
    </>
  );
}
