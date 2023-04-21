import Image from "next/image";

// icon-footer
import facebook from "../public/iconfooter/facebook.svg";
import instagram from "../public/iconfooter/instagram.svg";
import linkedin from "../public/iconfooter/linkedin.svg";
import skype from "../public/iconfooter/skype.svg";
import logo from "../public/images/logo/logo.png";

import mapMini from "../public/images/contact/mapMini.png";
import note1 from "../public/images/contact/note1.svg";
import signs from "../public/images/contact/signs.svg";
import social from "../public/images/contact/social.svg";

export default function Contact() {
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
      {/* Let’s build your dream */}
      <div className="pt-10">
        <p className="   text-center pt-56 pb-56  font-bold  lg:text-5xl sm:px-16 xl:px-48 dark:text-gray-400">
          Let’s build your dream <br /> product together
        </p>
        <div className=" flex justify-center gap-96 ">
          <div>
            <div className="flex justify-center items-center   bg-red-100  h-[145px] w-[145px] rounded-full">
              <Image src={signs} alt="Myimage" />
            </div>
            <div>
              <span className="text-2xl font-bold pt-5">Our Location</span>
              <p className="text-base  pt-5 text-gray-300 text-center">
                99 Wall Street <br /> New York, NY 10005
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center  bg-red-100  h-[145px] w-[145px] rounded-full">
              <Image src={note1} alt="Myimage" />
            </div>
            <div>
              <span className="text-2xl font-bold pt-5">E-mail & Phone</span>
              <p className="text-base  pt-5 text-gray-300 text-center">
                hello@mabolotech.com <br /> +1 123 456 7890
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center  bg-red-100  h-[145px] w-[145px] rounded-full">
              <Image src={social} alt="Myimage" />
            </div>
            <div>
              <span className="text-2xl font-bold pt-5">Get in touch</span>
              <div className="grid justify-items-center grid-cols-4 gap-4 pt-7">
                <Image src={facebook} alt="Myimage" />
                <Image src={skype} alt="Myimage" />
                <Image src={linkedin} alt="Myimage" />
                <Image src={instagram} alt="Myimage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end- Let’s build your dream */}

      {/* minimap */}
      <div className="grid  grid-cols-2 pt-40 pb-36 ">
        <div className=" ">
          <Image src={mapMini} alt="Myimage" className=" h-902 w-900" />
        </div>

        <form className=" ">
          <p className=" text-2xl text-center text-gray-500 pt-10 mt-20">
            look forward to hearing from you,
          </p>
          <div className="grid justify-items-center  pt-2 ">
            <input
              className="py-4  text-base leading-tight focus:outline-none border-b-2 w-7/12 pt-28 "
              type="text"
              aria-label="Email"
              placeholder="Email "
            />
            <input
              className="py-4 text-base  leading-tight focus:outline-none border-b-2 w-7/12 pt-16 "
              type="text"
              aria-label="Website Link"
              placeholder="Website Link"
            />
            <input
              className="py-28   text-base leading-tight focus:outline-none border-b-2 w-7/12 pt-16 "
              type="text"
              aria-label="Message"
              placeholder="Message"
            />
          </div>
          <div className=" pt-14">
            <button className="ml-48 text-sm font-semibold bg-transparent hover:bg-red-700 text-black-700  hover:text-white py-4 px-10 border-2 border-red-700 hover:border-transparent rounded-full">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      {/* end-Let’s build your dream */}
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
