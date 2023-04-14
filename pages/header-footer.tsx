import Image from "next/image";

import facebook from "../public/iconfooter/facebook.svg";
import instagram from "../public/iconfooter/instagram.svg";
import linkedin from "../public/iconfooter/linkedin.svg";
import skype from "../public/iconfooter/skype.svg";

import avatar1 from "../public/images/home1/avatar1.png";
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

import cancelY from "../public/images/icon/cancelY.png";
export default function HeaderFooter() {
  return (
    <>
      {/* header*/}
      <header className="sticky backdrop-blur-md  bg-white/90 w-full  top-0 left-0 shadow-sm ">
        <div className="border-black-500  border  px-4 p-7 grid grid-cols-2   ">
          {/* logo */}
          <div className=" flex  mx-12 ">
            <a href="#" className="">
              <Image
                src={logo}
                alt="Picture of the author"
                width={62.02}
                height={60.25}
              />
            </a>
            <div className=" px-4 grid content-end pb-1">
              <span className=" self-center  text-2xl  font-bold  hover:text-costumeRed ">
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
      {/* footer-start */}
      <footer className="text-gray-600  ">
        <div className=" px-5 pt-8 pb-20  flex flex-row flex-wrap justify-center  ">
          <div className="w-64  mr-24 ">
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
