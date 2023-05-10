import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <>
      {/* header-start */}
      <Header />
      {/* header-end */}

      {/* start-Portfolio */}
      <div className="porttolfio">
        <div className=" text-center py-40 ">
          <span className="text-xl text-gray-400 font-OpenSans font-light ">
            PORTFOLIO
          </span>
          <p className="text-5xl font-Poppins font-bold pt-10">
            People don’t buy what you do, <br /> they buy why you do it.
          </p>
        </div>
        <div className="menu">
          <div
            className=" flex justify-center gap-24 text-2xl font-OpenSans pb-20
            "
          >
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
          <div className="pt-96 float-left ">
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
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
          </div>

          <div className=" grid grid-cols-3  pb-36   px-64 pt-10 ">
            <div className="  h-439 w-370 border-2 rounded-costumeRaduis  hover:shadow-lg  duration-200 hover:scale-95">
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
            {/* images */}
            <div className="  h-439 w-370 border rounded-costumeRaduis  hover:shadow-lg duration-200 hover:scale-95 mb-8 ">
              <Image
                className=" "
                src="/images/portfolio/pic1.png"
                alt="Myimage"
                width={370}
                height={439}
              />
            </div>
            <div className="  h-439 w-370 border rounded-costumeRaduis  hover:shadow-lg duration-200 hover:scale-95 ">
              <Image
                className=" "
                src="/images/portfolio/pic2.png"
                alt="Myimage"
                width={370}
                height={439}
              />
            </div>
            <div className="  h-439 w-370 border rounded-costumeRaduis  hover:shadow-lg duration-200 hover:scale-95  mb-8 ">
              <Image
                className=" "
                src="/images/portfolio/pic3.png"
                alt="Myimage"
                width={370}
                height={439}
              />
            </div>
            <div className="  h-439 w-370 border rounded-costumeRaduis  hover:shadow-lg duration-200 hover:scale-95 ">
              <Image
                className=" "
                src="/images/portfolio/pic4.png"
                alt="Myimage"
                width={370}
                height={439}
              />
            </div>
            <div className="  h-439 w-370 border rounded-costumeRaduis  hover:shadow-lg duration-200 hover:scale-95 ">
              <Image
                className=" "
                src="/images/portfolio/pic5.png"
                alt="Myimage"
                width={370}
                height={439}
              />
            </div>
            <div className="  h-439 w-370 border rounded-costumeRaduis   hover:shadow-lg duration-200 hover:scale-95 ">
              <Image
                className=" "
                src="/images/portfolio/pic6.png"
                alt="Myimage"
                width={370}
                height={439}
              />
            </div>
            <div className="  h-439 w-370 border rounded-costumeRaduis   hover:shadow-lg duration-200 hover:scale-95 ">
              <Image
                className=" "
                src="/images/portfolio/pic7.png"
                alt="Myimage"
                width={370}
                height={439}
              />
            </div>
            <div className="  h-439 w-370 border rounded-costumeRaduis   hover:shadow-lg duration-200 hover:scale-95 ">
              <Image
                className=" "
                src="/images/portfolio/pic8.png"
                alt="Myimage"
                width={370}
                height={439}
              />
            </div>
          </div>
        </div>
      </div>
      {/* end-Portfolio */}
      {/* get-in-touch */}
      <div className=" bg-gradient-to-t from-costumeOrange to-costumeRed py-6 mb-20">
        <div className=" flex justify-center gap-40 pt-28 pb-40 ">
          <div className=" text-left text-white">
            <h1 className="text-xl font-OpenSans font-light">GET IN TOUCH</h1>
            <p className="text-5xl font-Poppins font-bold pt-10">
              Let’s start with <br /> your dream <br />
              project
            </p>
            <p className="text-2xl pt-10 pb-2 font-OpenSans">
              We help our clients make realize their most
            </p>
            <span className="text-2xl font-OpenSans font-bold">
              +1 123 456 7890
            </span>
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
      <Footer />
      {/* footer-end */}
    </>
  );
}
