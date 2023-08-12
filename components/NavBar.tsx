import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div
      className="navbar  w-full  fixed z-50    shadow-md   backdrop-blur-lg   bg-white/90
    return ( "
    >
      <div className="grid grid-cols-12  justify-items-center m-2 my-4 md:my-6 2xl:ml-10      ">
        <div className=" col-span-10 xl:col-span-4 ">
          <div className=" flex  ">
            <div className=" flex items-center ">
              <Image
                className=" "
                src="/images/logo/logo.png"
                alt="Logo"
                width={72}
                height={72}
              />
            </div>
            <div className=" flex-row my-auto mx-2 md:mx-5 ">
              <p className=" text-sm md:text-2xl  font-Poppins font-bold text-red-700">
                MABOLOTECH IT SOLUTION
              </p>
              <p className="text-xs  break-words  ">
                Crafting Software Solutions that drive business growth
              </p>
            </div>
          </div>
        </div>

        <div className="close-open   grid items-center content-center  col-span-2  xl:hidden     ">
          <button aria-label="close-open" onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <div className=" flex items-center justify-center">
                <Image
                  src="/images/nav/close.svg"
                  width={35}
                  height={35}
                  alt="logo"
                />
              </div>
            ) : (
              <div className=" flex items-center justify-center">
                <Image
                  src="/images/nav/menu.svg"
                  width={35}
                  height={35}
                  alt="logo"
                />
              </div>
            )}
          </button>
        </div>

        <div className="menu-bar col-span-12  md:col-span-12 lg:my-auto  xl:col-span-8   2xl:mx-20  ">
          <div
            className={`flex-1   xl:block    justify-self-center   ${
              navbar ? "p-10 md:p-0 block " : "hidden"
            }`}
          >
            <ul className="    text-center  grid  items-center justify-center mt-5  gap-10 text-xl font-semibold  md:py-10  md:mt-10   xl:col-span-6 xl:mt-0 xl:grid xl:grid-flow-col xl:py-2        ">
              <li className="  hover:text-red-700">
                <Link
                  href="/#home"
                  aria-label="home"
                  onClick={() => setNavbar(!navbar)}
                >
                  Home
                </Link>
              </li>
              <li className=" hover:text-red-700">
                <Link
                  href="/#about-us"
                  aria-label="about-us"
                  onClick={() => setNavbar(!navbar)}
                >
                  About us
                </Link>
              </li>
              <li className=" hover:text-red-700">
                <Link
                  href="/#services"
                  aria-label="services"
                  onClick={() => setNavbar(!navbar)}
                >
                  Services
                </Link>
              </li>
              <li className=" hover:text-red-700">
                <Link
                  href="/#ourwork"
                  aria-label="our-work"
                  onClick={() => setNavbar(!navbar)}
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  aria-label="contact"
                  onClick={() => setNavbar(!navbar)}
                >
                  <button
                    aria-label="Contactus"
                    className="  hover:text-red-700 px-10 p-3  border-2 border-red-700  rounded-full"
                  >
                    Contact us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
