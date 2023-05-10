import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className=" p-0 m-0">
        {/* header-start */}
        <header className="  sticky backdrop-blur-md z-50  w-full bg-white/90  top-0 left-0 shadow-sm ">
          <div className="border-black-500  border  px-4 p-7 grid grid-cols-2   ">
            {/* logo */}
            <div className=" flex  mx-12 ">
              <Link href="#">
                <Image
                  src="/images/logo/logo.png"
                  alt="Picture of the author"
                  width={62.02}
                  height={60.25}
                />
              </Link>
              <div className=" px-4 grid content-end pb-1">
                <span className=" self-center  text-2xl  font-Poppins font-bold  text-costumeRed ">
                  MABOLOTECH IT SOLUTION
                </span>
                <span className=" text-xs font-OpenSans  whitespace-nowrap ">
                  Crafting Software Solutions that drive business growth
                </span>
              </div>
            </div>
            {/* menu */}
            <div className="grid justify-center  ">
              <ul className="flex   gap-6   items-center   ml-28">
                <li>
                  <Link
                    href="#"
                    className=" text-xl font-semibold block py-2 pl-3 pr-4    hover:text-costumeRed      "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-xl font-semibold   block py-2 pl-3 pr-4     hover:text-costumeRed     "
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="  text-xl font-semibold  block py-2 pl-3 pr-4  hover:text-costumeRed "
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className=" text-xl  font-semibold  block py-2 pl-3 pr-4 hover:text-costumeRed"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <button className="mx-3 text-xl font-semibold   hover:bg-costumeRed text-black-700 hover:text-white   px-10 p-3  border-2 border-costumeRed  rounded-full">
                      Contact us
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/* header-end */}

        {/* Let’s build your dream */}
        <div className="pt-10">
          <p className="   text-center pt-56 pb-56 font-Poppins  font-bold  lg:text-5xl sm:px-16 xl:px-48 dark:text-gray-400">
            Let’s build your dream <br /> product together
          </p>
          <div className=" flex justify-center gap-96 ">
            <div>
              <div className="flex justify-center items-center   bg-red-100  h-[145px] w-[145px] rounded-full">
                <Image
                  src="/images/contact/signs.svg"
                  alt="Myimage"
                  width={60}
                  height={59.55}
                />
              </div>
              <div>
                <span className="text-2xl font-Poppins font-bold pt-5">
                  Our Location
                </span>
                <p className="text-base font-OpenSans  pt-5 text-gray-300 text-center">
                  99 Wall Street <br /> New York, NY 10005
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-center items-center  bg-red-100  h-[145px] w-[145px] rounded-full">
                <Image
                  src="/images/contact/note1.svg"
                  alt="Myimage"
                  width={60}
                  height={59.55}
                />
              </div>
              <div>
                <span className="text-2xl font-Poppins  font-bold pt-5">
                  E-mail & Phone
                </span>
                <p className="text-base font-OpenSans  pt-5 text-gray-300 text-center">
                  hello@mabolotech.com <br /> +1 123 456 7890
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-center items-center  bg-red-100  h-[145px] w-[145px] rounded-full">
                <Image
                  src="/images/contact/social.svg"
                  alt="Myimage"
                  width={60}
                  height={59.55}
                />
              </div>
              <div>
                <span className="text-2xl font-Poppins  font-bold pt-5">
                  Get in touch
                </span>
                <div className="grid justify-items-center grid-cols-4 gap-4 pt-7">
                  <Image
                    src="/iconfooter/facebook.svg"
                    alt="Myimage"
                    width={7.92}
                    height={17}
                  />
                  <Image
                    src="/iconfooter/skype.svg"
                    alt="Myimage"
                    width={16}
                    height={15.29}
                  />
                  <Image
                    src="/iconfooter/linkedin.svg"
                    alt="Myimage"
                    width={17}
                    height={17}
                  />
                  <Image
                    src="/iconfooter/instagram.svg"
                    alt="Myimage"
                    width={17}
                    height={17}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end- Let’s build your dream */}

        {/* minimap */}
        <div className="grid  grid-cols-2 pt-40 pb-36 ">
          <div className=" ">
            <Image
              src="/images/contact/mapMini.png"
              alt="Myimage"
              className=" h-902 "
              width={900}
              height={902}
            />
          </div>

          <form className=" ">
            <p className=" text-2xl text-center font-SegoeUI text-gray-500 pt-10 mt-20">
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
              <Link href="#">
                <button className="ml-48 text-sm font-semibold bg-transparent hover:bg-red-700 text-black-700  hover:text-white py-4 px-10 border-2 border-red-700 hover:border-transparent rounded-full">
                  SUBMIT
                </button>
              </Link>
            </div>
          </form>
        </div>
        {/* end-Let’s build your dream */}

        {/* footer-start */}
        <footer className="text-gray-600  ">
          <div className=" pt-8 pb-20  flex flex-row flex-wrap justify-center  ">
            <div className="  mr-24">
              <div className="flex items-center pb-2 px-4">
                <Link href="#">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Picture of the author"
                    width={62.02}
                    height={60.25}
                  />
                </Link>
              </div>
              <span className="font-Poppins font-bold   text-red-700 ">
                MABOLOTECH IT SOLUTION
              </span>
              <p className="text-sm text-gray-400 font-OpenSans">
                Lorem ipsum dolor is simply dummy <br />
                text of printing.
              </p>
            </div>

            <div className="flex flex-wrap  mx-8 gap-40 mt-8 ">
              <div className="services">
                <h2 className="font-Poppins font-bold text-2xl text-red-700   pb-2">
                  Services
                </h2>
                <nav className="list-none font-OpenSans">
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
              <div className="about-us">
                <h2 className="font-Poppins font-bold text-2xl text-red-700   pb-2">
                  About us
                </h2>
                <nav className="list-none font-OpenSans">
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
              <div className="get-in-touch">
                <h2 className="tfont-Poppins  font-bold text-2xl text-red-700   pb-2">
                  Get in touch
                </h2>
                <div className="list-none">
                  <li className=" mt-2 ">
                    <a className="  text-gray-400 font-OpenSans">
                      99 Wall Street <br /> New York, NY 10005
                    </a>
                  </li>

                  <ul className="mt-8 flex text-gray-400 gap-2">
                    <li>
                      <Link href="#" target="_blank" title="facebook">
                        <Image
                          src="/iconfooter/facebook.svg"
                          alt="Myimage"
                          width={7.92}
                          height={17}
                        />
                      </Link>
                    </li>

                    <li className="ml-6">
                      <Link href="#" target="_blank" title="skypef">
                        <Image
                          src="/iconfooter/skype.svg"
                          alt="Myimage"
                          width={16}
                          height={15.29}
                        />
                      </Link>
                    </li>

                    <li className="ml-6">
                      <Link href="#" target="_blank" title="linkedin">
                        <Image
                          src="/iconfooter/linkedin.svg"
                          alt="Myimage"
                          width={17}
                          height={17}
                        />
                      </Link>
                    </li>

                    <li className="ml-6">
                      <Link href="#" target="_blank" title="insta">
                        <Image
                          src="/iconfooter/instagram.svg"
                          alt="Myimage"
                          width={17}
                          height={17}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className=" text-center font-OpenSans text-base pt-3 pb-48 text-gray-400">
            Copyrighted © 2023 Mabolotech IT Solution
          </p>
        </footer>
        {/* footer-end */}
      </div>
    </>
  );
}
