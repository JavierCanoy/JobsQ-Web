import Image from "next/image";
// icon-footer
import facebook from "../public/iconfooter/facebook.svg";
import instagram from "../public/iconfooter/instagram.svg";
import linkedin from "../public/iconfooter/linkedin.svg";
import skype from "../public/iconfooter/skype.svg";

import bag from "../public/images/portfolio/bag.png";
import pic1 from "../public/images/portfolio/pic1.png";
import pic2 from "../public/images/portfolio/pic2.png";
import pic3 from "../public/images/portfolio/pic3.png";
import pic4 from "../public/images/portfolio/pic4.png";
import pic5 from "../public/images/portfolio/pic5.png";
import pic6 from "../public/images/portfolio/pic6.png";
import pic7 from "../public/images/portfolio/pic7.png";
import pic8 from "../public/images/portfolio/pic8.png";

import logo from "../public/images/logo/logo.png";

export default function Portfolio() {
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
          {/* recommend-to-removed by:sir-J */}
          {/* <div className=" px-32 ">
            <button>
              <Image src={close1} alt="Myimage" height={39} width={39} />
            </button>
          </div> */}

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

          <div className=" grid grid-cols-3  pb-36   px-64 pt-10 ">
            <div className="  h-439 w-370 border-2 rounded-lg hover:shadow-lg  duration-200 hover:scale-95">
              <Image className=" " src={bag} alt="bag" />
              <div className="flex justify-between">
                <div className=" px-2 pt-2">
                  <p className="text-lg font-bold ">Firefox Org</p>
                  <span className=" text-base text-gray-400 ">Branding</span>
                </div>
                <div>
                  <button className="bg-gradient-to-t from-costumeViolet to-costumePink h-73  rounded-br-lg text-white   hover:bg-white hover:text-costumeViolet ">
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
            {/* images */}
            <div className="  h-439 w-370 border rounded-lg  hover:shadow-lg duration-200 hover:scale-95 ">
              <Image className=" " src={pic1} alt="Myimage" />
            </div>
            <div className="  h-439 w-370 border rounded-lg hover:shadow-lg  duration-200 hover:scale-95 ">
              <div>
                <Image className=" " src={pic2} alt="Myimage" />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg  mt-10 hover:shadow-lg  duration-200 hover:scale-95">
              <div>
                <Image className=" " src={pic3} alt="Myimage" />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg  mt-10 hover:shadow-lg  duration-200 hover:scale-95">
              <div>
                <Image className=" " src={pic4} alt="Myimage" />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg  mt-10 hover:shadow-lg   duration-200 hover:scale-95">
              <div>
                <Image className=" " src={pic5} alt="Myimage" />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg  mt-10 hover:shadow-lg  duration-200 hover:scale-95">
              <div>
                <Image className=" " src={pic6} alt="Myimage" />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg  mt-10 hover:shadow-lg  duration-200 hover:scale-95">
              <div>
                <Image className=" " src={pic7} alt="Myimage" />
              </div>
            </div>
            <div className="  h-439 w-370 border rounded-lg  mt-10 hover:shadow-lg  duration-200 hover:scale-95">
              <div>
                <Image className=" " src={pic8} alt="Myimage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end-Portfolio */}
      {/* get-in-touch */}
      <div className=" bg-gradient-to-t from-costumeOrange to-costumeRed py-6">
        <div className=" flex justify-center gap-40 pt-28 pb-40 ">
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
                  className="py-4 text-base  leading-tight focus:outline-none border-b-2   pt-16 w-full bg-transparent text-white placeholder-gray-300"
                  type="text"
                  aria-label="Full name"
                  placeholder="Full name"
                />
                <input
                  className="py-28  text-base leading-tight focus:outline-none border-b-2 w-full pt-16 bg-transparent  text-white placeholder-gray-300"
                  type="text"
                  aria-label="MEssage"
                  placeholder="Message"
                />
                <div className="pt-16 w-36 ">
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
