import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  // backdrop-blur-lg   bg-white/90
  return (
    <div className="nav">
      <nav className="  w-full fixed   z-50  shadow-md  backdrop-blur-lg   bg-white/90    ">
        <div className="     mx-auto   justify-between py-4 px-4    md:items-center md:px-8    md:flex-col lg:flex lg:flex-row lg:mx-auto lg:justify-between 2xl:mx-24">
          <div className=" flex items-center justify-between md:flex md:justify-center py-3 md:py-5    ">
            <div className=" flex ">
              <div className=" flex items-center">
                <Image
                  className=" "
                  src="/images/logo/logo.png"
                  alt="Logo"
                  width={72}
                  height={72}
                />
              </div>
              <div className=" flex-row my-auto mx-5 ">
                <p className=" text-base md:text-2xl  font-Poppins font-bold text-red-700">
                  MABOLOTECH IT SOLUTION
                </p>
                <p className="text-xs  break-words hidden md:block ">
                  Crafting Software Solutions that drive business growth
                </p>
              </div>
            </div>
            <div className="close flex items-center md:hidden ">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <div className=" flex items-center justify-center">
                    <Image
                      src="/images/nav/close.svg"
                      width={40}
                      height={40}
                      alt="logo"
                    />
                  </div>
                ) : (
                  <div className=" flex items-center justify-center">
                    <Image
                      src="/images/nav/menu.svg"
                      width={40}
                      height={40}
                      alt="logo"
                    />
                  </div>
                )}
              </button>
            </div>
          </div>
          <div className="menu">
            <div
              className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-10 md:p-0 block" : "hidden"
              }`}
            >
              <ul className=" flex-wrap    text-center   md:h-auto grid  items-center justify-center gap-10 md:flex md:px-10 text-xl font-semibold  ">
                <li className="  hover:text-red-700">
                  <Link href="/#home" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className=" hover:text-red-700">
                  <Link href="/#about-us" onClick={() => setNavbar(!navbar)}>
                    About us
                  </Link>
                </li>
                <li className=" hover:text-red-700">
                  <Link href="/#services" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className=" hover:text-red-700">
                  <Link href="/#ourwork" onClick={() => setNavbar(!navbar)}>
                    Our Work
                  </Link>
                </li>
                <li className=" hover:text-red-700 px-10 p-3  border-2 border-red-700  rounded-full">
                  <Link href="/#contact" onClick={() => setNavbar(!navbar)}>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
