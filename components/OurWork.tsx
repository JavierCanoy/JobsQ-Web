import Image from "next/image";
import Link from "next/link";

export default function OurWork() {
  return (
    <div id="ourwork" className="main pt-[9rem] md:pt-[16.8rem] xl:pt-[9rem] ">
      <div className="porttolfio">
        <div className="first text-center  m-4 md:py-8 lg:max-w-2xl lg:mx-auto ">
          <h1 className="text-xl text-gray-400 font-OpenSans font-light py-4 ">
            PORTFOLIO
          </h1>
          <p className=" text-3xl md:text-5xl font-Poppins font-bold ">
            People don’t buy what you do, they buy why you do it.
          </p>
        </div>
        <div className="menu py-4">
          <div className="  flex gap-3 md:gap-10 xl:gap-12 justify-center text-base md:text-2xl font-OpenSans">
            <Link href="#">
              <button className=" hover:text-red-700 ">All</button>
            </Link>
            <Link href="#">
              <button className="hover:text-red-700 ">Branding</button>
            </Link>

            <Link href="#">
              <button className="hover:text-red-700 ">UX/UI</button>
            </Link>
            <Link href="#">
              <button className=" hover:text-red-700 ">Marketing </button>
            </Link>
          </div>
          <div className="pt-10 2xl:pt-80 float-left  ">
            <Link href="#">
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
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
          </div>

          <div className="  pb-36  w-full lg:max-w-5xl xl:max-w-7xl py-10 mx-auto  grid grid-cols-12    ">
            {/* images */}
            <div className="xl:mx-auto xl:col-span-4    m-4  col-span-12 md:m-2     lg:mx-auto  md:col-span-6    md:h-439 md:w-370  border rounded-costumeRaduis  hover:shadow-lg duration-200 hover:scale-95">
              <Image
                className=" "
                src="/images/portfolio/bag.png"
                alt="bag"
                width={370}
                height={366}
              />
              <div className="flex justify-between">
                <div className=" px-2 pt-2">
                  <p className="text-lg font-OpenSans font-bold ">
                    Firefox Org
                  </p>
                  <span className=" text-base font-OpenSans text-gray-400 ">
                    Branding
                  </span>
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

            <div className="xl:mx-auto m-4 xl:col-span-4   col-span-12 md:m-2    lg:mx-auto  md:col-span-6   md:h-439 md:w-370 border rounded-costumeRaduis  hover:shadow-lg duration-200 hover:scale-95 ">
              <Link href="#">
                <Image
                  className=" "
                  src="/images/portfolio/pic2.png"
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </Link>
            </div>

            <div className=" xl:mx-auto m-4   xl:col-span-4   md:m-2  lg:mx-auto  col-span-12  md:col-span-6   md:h-439 md:w-370 border rounded-costumeRaduis  hover:shadow-lg duration-200 hover:scale-95 ">
              <Link href="#">
                <Image
                  className=" "
                  src="/images/portfolio/pic4.png"
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </Link>
            </div>
            <div className=" xl:mx-auto xl:col-span-4 m-4   md:m-2  lg:mx-auto  col-span-12  md:col-span-6  md:h-439 md:w-370 border rounded-costumeRaduis  hover:shadow-lg duration-200 hover:scale-95 ">
              <Link href="#">
                <Image
                  className=" "
                  src="/images/portfolio/pic5.png"
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </Link>
            </div>
            <div className=" xl:mx-auto xl:col-span-4 m-4   md:m-2  lg:mx-auto  col-span-12  md:col-span-6  md:h-439 md:w-370 border rounded-costumeRaduis   hover:shadow-lg duration-200 hover:scale-95 ">
              <Link href="#">
                <Image
                  className=" "
                  src="/images/portfolio/pic6.png"
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </Link>
            </div>
            <div className=" xl:mx-auto xl:col-span-4 m-4   md:m-2  lg:mx-auto  col-span-12  md:col-span-6  md:h-439 md:w-370 border rounded-costumeRaduis   hover:shadow-lg duration-200 hover:scale-95 ">
              <Link href="#">
                <Image
                  className=" "
                  src="/images/portfolio/pic7.png"
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </Link>
            </div>
            <div className=" xl:mx-auto xl:col-span-4 m-4  md:m-2  col-span-12 lg:mx-auto  md:col-span-6  md:h-439 md:w-370 border rounded-costumeRaduis   hover:shadow-lg duration-200 hover:scale-95 ">
              <Link href="#">
                <Image
                  className=" "
                  src="/images/portfolio/pic8.png"
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </Link>
            </div>
            <div className=" xl:mx-auto xl:col-span-4 m-4 md:m-2  col-span-12 lg:mx-auto  md:col-span-6  md:h-439 md:w-370 border rounded-costumeRaduis  hover:shadow-lg duration-200 hover:scale-95 ">
              <Link href="#">
                <Image
                  className=" "
                  src="/images/portfolio/pic4.png"
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </Link>
            </div>
            <div className=" xl:mx-auto xl:col-span-4 m-4  md:m-2  col-span-12  lg:mx-auto  md:col-span-6  md:h-439 md:w-370 border rounded-costumeRaduis  hover:shadow-lg duration-200 hover:scale-95 ">
              <Link href="#">
                <Image
                  className=" "
                  src="/images/portfolio/pic5.png"
                  alt="Myimage"
                  width={370}
                  height={439}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end-Portfolio */}
      {/* get-in-touch */}
      <div className="main py-4 grid grid-cols-12 md:h-screen  md:content-center  bg-gradient-to-t from-costumeOrange to-costumeRed">
        <div className="first col-span-12 w-full p-4 md:col-span-6  md:my-auto xl:mx-auto xl:max-w-lg  ">
          <h1 className="text-xl  text-white font-OpenSans font-light">
            GET IN TOUCH
          </h1>
          <p className="text-5xl font-Poppins font-bold py-4 text-white ">
            Let’s start with your dream project
          </p>
          <p className="  text-xl font-OpenSans py-2	text-white ">
            We help our clients make realize their most
          </p>
          <p className="text-xl font-bold font-OpenSans  py-2 text-white ">
            +1 123 456 7890
          </p>
        </div>
        <form className="second col-span-12 px-4 w-full xl:max-w-lg md:col-span-6">
          <input
            className="py-4  text-base leading-tight focus:outline-none border-b-2 pt-10  w-full bg-transparent  placeholder:text-white "
            type="text"
            aria-label="Email"
            placeholder="Email "
          />
          <input
            className="py-6 text-base  leading-tight focus:outline-none border-b-2   pt-14 w-full bg-transparent  placeholder:text-white  "
            type="text"
            aria-label="Full name"
            placeholder="Full name"
          />
          <input
            className="py-10  text-base leading-tight focus:outline-none border-b-2 w-full bg-transparent placeholder:text-white "
            type="text"
            aria-label="Message"
            placeholder="Message"
          />
          <div className="pt-4 ">
            <Link href="/">
              <button className=" text-sm text-white bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white border-2 px-12 p-3 border-white hover:border-transparent rounded-full">
                SUBMIT
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
