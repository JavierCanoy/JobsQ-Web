import Image from "next/image";
import note from "../public/imagePageOne/note.svg";
import sign from "../public/imagePageOne/signs.svg";
import social from "../public/imagePageOne/social.svg";
// icon-footer
import facebook from "../public/iconfooter/facebook.svg";
import instagram from "../public/iconfooter/instagram.svg";
import linkedin from "../public/iconfooter/linkedin.svg";
import skype from "../public/iconfooter/skype.svg";
import mapMini from "../public/imagePageOne/mapMini.png";

export default function Contact() {
  return (
    <>
      {/* header-start */}
      <header className="sticky backdrop-blur-md bg-white/90 w-full  top-0 left-0 shadow-sm">
        <div className="border-black-500  border px-4 p-4 grid grid-cols-2   ">
          {/* logo */}
          <div className=" flex pl-10 ">
            <a href="#" className="flex items-center  ">
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
          {/* menu */}
          <div className="grid justify-center  ">
            <ul className="flex  gap-8   items-center p-4  ml-20">
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
      </header>
      {/* header-end */}
      {/* Let’s build your dream */}
      <div className="pt-10">
        <p className="   text-center pt-56 pb-56  font-bold  lg:text-5xl sm:px-16 xl:px-48 dark:text-gray-400">
          Let’s build your dream <br /> product together
        </p>
        <div className="grid justify-items-center grid-cols-3">
          <div className="  bg-red-100 px-6 py-6 rounded-full">
            <Image src={sign} alt="Myimage" />
          </div>
          <div className=" bg-red-100 px-6 py-6 rounded-full">
            <Image src={note} alt="Myimage" />
          </div>
          <div className=" bg-red-100 px-6 py-6 rounded-full">
            <Image src={social} alt="Myimage" />
          </div>
          <span className="text-2xl font-bold pt-5">Our Location</span>
          <span className="text-2xl font-bold pt-5">E-mail & Phone</span>
          <span className="text-2xl font-bold pt-5">Get in touch</span>
          <span className="text-base  pt-5 text-gray-300 text-center">
            99 Wall Street <br /> New York, NY 10005
          </span>
          <span className="text-base  pt-5 text-gray-300 text-center">
            hello@mabolotech.com <br /> +1 123 456 7890
          </span>
          <div className="grid justify-items-center grid-cols-4 gap-4 pt-7">
            <Image src={facebook} alt="Myimage" />
            <Image src={skype} alt="Myimage" />
            <Image src={linkedin} alt="Myimage" />
            <Image src={instagram} alt="Myimage" />
          </div>
        </div>
      </div>
      {/* minimap */}
      <div className="grid  grid-cols-2 pt-40 pb-10">
        <div className="">
          <Image
            src={mapMini}
            alt="Myimage"
            className="object-none object-left-center  h-screen 
              "
            height={902}
            width={900}
          />
        </div>
        <form>
          <p className=" text-2xl text-center text-gray-500 pt-44">
            look forward to hearing from you,
          </p>
          <div className="grid justify-items-center pb-10 ">
            <input
              className="py-4  text-base leading-tight focus:outline-none border-b-2 w-7/12 pt-20 "
              type="text"
              aria-label="Email"
              placeholder="Email "
            />
            <input
              className="py-4 text-base  leading-tight focus:outline-none border-b-2 w-7/12 pt-20 "
              type="text"
              aria-label="Website Link"
              placeholder="Website Link"
            />
            <input
              className="py-28  text-base leading-tight focus:outline-none border-b-2 w-7/12 pt-20 "
              type="text"
              aria-label="Message"
              placeholder="Message"
            />
          </div>
          <button className="ml-48 text-sm font-semibold bg-transparent hover:bg-red-700 text-black-700  hover:text-white py-4 px-10 border-2 border-red-700 hover:border-transparent rounded-full">
            SUBMIT
          </button>
        </form>
      </div>
      {/* end-Let’s build your dream */}
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
