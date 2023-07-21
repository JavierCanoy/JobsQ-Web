import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServicesComp from "./ServicesComp";

export default function Services() {
  return (
    <div id="services" className="main-services pt-[5rem] md:pt-[7.5rem] ">
      <div className="  w-full ">
        <div className="relative ">
          <div className="image">
            <Image
              src="/images/portfolionOne/profile.png"
              alt="Myimage"
              className=" w-full object-cover"
              width={1800}
              height={579}
            />
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-75 bg-gradient-to-r from-costumeOrange to-costumeRed">
            <div className="flex h-full items-center justify-center">
              <div className=" max-w-md lg:max-w-2xl  text-center text-white ">
                <p className="pt-5 text-basemd:text-xl font-OpenSans font-light">
                  ABOUT US
                </p>
                <h1 className="mb-6 text-base md:text-5xl font-Poppins font-bold pt-4">
                  LEADING THE BEST DIGITAL AGENCY IN TOWN
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end-about-us */}
      <ServicesComp />
      {/*end-Services */}

      {/*what-we-offer */}
      <div className=" mx-4 xl:h-screen grid  ">
        <div className=" flex justify-center ">
          <h1 className=" my-auto py-4 text-4xl md:text-5xl font-Poppins font-bold text-red-600">
            What we offer:
          </h1>
        </div>
        <div className=" grid   grid-cols-12 w-full md:mx-auto  2xl:max-w-6xl   ">
          <div className=" my-4 md:mx-2 xl:col-span-4 xl:mx-2 xl:w-auto   md:col-span-6 col-span-12 lg:h-259 lg:w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white  pt-2">
            <h1 className=" pt-2 text-5xl font-Poppins font-bold   pb-1">01</h1>
            <p className="text-xl font-Poppins font-semibold">
              Requirements Gathering and Analysis:
            </p>
            <p className="text-base font-OpenSans pt-2 pb-4">
              Our first step is to fully understand and analyze your business
              requirements to create a clear and concise plan for your software
              project.
            </p>
          </div>
          <div className="  my-4 md:mx-2  xl:col-span-4 xl:mx-2 xl:w-auto md:col-span-6  col-span-12 lg:h-259 lg:w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
            <h1 className=" pt-2  text-5xl font-Poppins font-bold   pb-1">
              02
            </h1>
            <p className="text-xl  font-Poppins font-semibold">
              Design and UI/UX:
            </p>
            <p className=" text-base font-OpenSans  pt-2 pb-4">
              Our experienced designers will work with you to create a
              user-friendly and visually appealing interface and the underlying
              architecture to support your software needs.
            </p>
          </div>
          <div className=" my-4  md:mx-2  xl:col-span-4 xl:mx-2 xl:w-auto md:col-span-6 col-span-12 lg:h-259 lg:w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-5xl font-Poppins font-bold pt-1 pb-1">03</h1>
            <p className="text-xl font-Poppins font-semibold">
              Implementation:
            </p>
            <p className="text-base font-OpenSans  pt-2 pb-4">
              Our team of developers will use the latest technologies and
              programming languages to bring your software to life, ensuring it
              is fast, secure, and scalable.
            </p>
          </div>
          <div className=" my-4  md:mx-2 xl:col-span-4 xl:mx-2 xl:w-auto  md:col-span-6 col-span-12 lg:h-259 lg:w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-5xl font-Poppins font-bold  pt-1 pb-1">04</h1>
            <p className="text-xl font-Poppins font-semibold">Testing:</p>
            <p className="text-base font-OpenSans  pt-2 pb-4">
              Thorough testing is integral to our software development process.
              We will rigorously test your software to ensure it meets your
              requirements and operates without errors or glitches.
            </p>
          </div>
          <div className=" my-4  md:mx-2 xl:col-span-4 xl:mx-2 xl:w-auto  md:col-span-6 col-span-12 lg:h-259 lg:w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-5xl font-Poppins font-bold pt-1 pb-1">05</h1>
            <p className="text-xl font-Poppins font-semibold">
              Maintenance and Support:
            </p>
            <p className="text-base font-OpenSans  pt-2 pb-4">
              After we launch your software, we will provide ongoing care and
              support, ensuring that your software meets your needs and performs
              optimally.
            </p>
          </div>
          <div className=" my-4  md:mx-2 xl:col-span-4 xl:mx-2 xl:w-auto  md:col-span-6 col-span-12 lg:h-259 lg:w-468 bg-gradient-to-r from-costumeRedBg to-costumeOrange rounded-3xl px-10 text-white pt-2">
            <h1 className=" text-5xl font-Poppins font-bold  pt-1 pb-1">06</h1>
            <p className="text-xl font-Poppins font-semibold ">
              Implementation:
            </p>
            <p className="text-base font-OpenSans  pt-2 pb-4">
              Our team of developers will use the latest technologies and
              programming languages to bring your software to life, ensuring it
              is fast, secure, and scalable.
            </p>
          </div>
        </div>
      </div>
      {/*end-what-we-offer */}

      {/*why-clients-choose-us */}
      <div className="bg-gradient-to-t from-costumeOrange to-costumeRed py-10    ">
        <div className=" text-center p-4">
          <h1 className=" text-4xl md:text-5xl text-white font-Poppins  font-bold">
            Why clients choose us
          </h1>
          <p className="text-xl py-4 font-OpenSans font-light text-white">
            Find a team of digital solutions you can rely on. Every day, we
            build trust through communication, transparency, and results.
          </p>
        </div>
        <div className=" lg:grid lg:grid-cols-12 lg:mx-4 xl:max-w-6xl xl:mx-auto">
          <div className=" lg:col-span-6  my-5 mx-4    bg-gradient-to-r from-costumeBrnBg to-costumeRedBg  rounded-2xl px-10 ">
            <div className="first relative py-10 ">
              <div className=" md:flex md:justify-end">
                <Image
                  src="/images/portfolionOne/united.png"
                  alt="Myimage"
                  width={221}
                  height={221}
                  className="  object-cover   "
                />
              </div>
              <h1 className=" absolute text-white text-2xl font-Poppins font-bold top-5 my-10 md:my-16  ">
                Personalized Approach:
              </h1>
              <p className=" absolute pt-2 text-white font-OpenSans top-5 my-28">
                We customize each project, working closely with you to <br />
                understand your specific needs and requirements.
              </p>
            </div>
          </div>

          <div className=" lg:col-span-6  my-5 mx-4    bg-gradient-to-r from-costumeBrnBg to-costumeRedBg  rounded-2xl px-10 ">
            <div className="first relative py-10 ">
              <div className=" md:flex md:justify-end">
                <Image
                  src="/images/portfolionOne/united.png"
                  alt="Myimage"
                  width={221}
                  height={221}
                  className="  object-cover   "
                />
              </div>
              <h1 className=" absolute text-white text-2xl font-Poppins font-bold top-5 my-10 md:my-16 ">
                Personalized Approach:
              </h1>
              <p className=" absolute pt-2 text-white font-OpenSans top-5 my-28">
                We customize each project, working closely with you to <br />
                understand your specific needs and requirements.
              </p>
            </div>
          </div>

          <div className=" lg:col-span-6  my-5 mx-4    bg-gradient-to-r from-costumeBrnBg to-costumeRedBg  rounded-2xl px-10 ">
            <div className="first relative py-10 ">
              <div className=" md:flex md:justify-end">
                <Image
                  src="/images/portfolionOne/united.png"
                  alt="Myimage"
                  width={221}
                  height={221}
                  className="  object-cover   "
                />
              </div>
              <h1 className=" absolute text-white text-2xl font-Poppins font-bold top-5 my-10 md:my-16 ">
                Personalized Approach:
              </h1>
              <p className=" absolute pt-2 text-white font-OpenSans top-5 my-28">
                We customize each project, working closely with you to <br />
                understand your specific needs and requirements.
              </p>
            </div>
          </div>

          <div className=" lg:col-span-6  my-5 mx-4    bg-gradient-to-r from-costumeBrnBg to-costumeRedBg  rounded-2xl px-10 ">
            <div className="first relative py-10 ">
              <div className=" md:flex md:justify-end">
                <Image
                  src="/images/portfolionOne/united.png"
                  alt="Myimage"
                  width={221}
                  height={221}
                  className="  object-cover   "
                />
              </div>
              <h1 className=" absolute text-white text-2xl font-Poppins font-bold top-5 my-10 md:my-16 ">
                Personalized Approach:
              </h1>
              <p className=" absolute pt-2 text-white font-OpenSans top-5 my-28">
                We customize each project, working closely with you to <br />
                understand your specific needs and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end-why-clients-choose-us */}

      {/*contact-us-today */}
      <div className=" ">
        <div className=" p-5 md:p-10 lg:grid lg:grid-cols-12 lg:max-w-5xl lg:mx-auto lg:my-10">
          <div className="first col-span-6">
            <h1 className=" text-4xl md:text-5xl font-Poppins font-bold">
              Contact us today
            </h1>
            <p className=" py-3 text-gray-400 text-xl font-OpenSans  ">
              To learn more about our SEO services and how we can help improve
              your online visibility, reach more customers, and grow your
              business through search engines.
            </p>
          </div>
          <div className="2nd-button col-span-6 py-10 flex justify-center self-center ">
            <Link href="#">
              <button
                aria-label="contact-us"
                className="flex text-lg uppercase   items-center   text-red-500 hover:bg-gradient-to-t from-[#F35A43] to-[#C1272D]  hover:text-white   border-2 p-4  border-red-500  rounded-full"
              >
                <p className="px-10 text-sm font-semibold"> Contact US</p>
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
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*end-contact-us-today */}

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
              <button
                aria-label="submit"
                className=" text-sm text-white bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white border-2 px-12 p-3 border-white hover:border-transparent rounded-full"
              >
                SUBMIT
              </button>
            </Link>
          </div>
        </form>
      </div>
      {/* end-get-in-touch */}
    </div>
  );
}
