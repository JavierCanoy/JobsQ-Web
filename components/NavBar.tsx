import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  // backdrop-blur-lg   bg-white/90
  return (
    <div className="nav">
      <nav className="  w-full fixed   z-50  shadow-md  backdrop-blur-lg   bg-white/90    ">
        <div className="grid grid-cols-12 m-2 my-4 md:my-6 justify-items-center   2xl:ml-10   ">
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

          <div className="close  items-center xl:hidden  grid content-center  col-span-2    ">
            <button onClick={() => setNavbar(!navbar)}>
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

          <div className="menu xl:col-span-8  md:col-span-12  2xl:mx-20 col-span-12">
            <div
              className={`flex-1   xl:block    justify-self-center   ${
                navbar ? "p-10 md:p-0 block " : "hidden"
              }`}
            >
              <ul className="    text-center xl:col-span-6 mt-5 md:mt-10 xl:mt-0 xl:grid xl:grid-flow-col xl:py-2    grid     items-center justify-center  gap-10    md:py-10  text-xl font-semibold  ">
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
